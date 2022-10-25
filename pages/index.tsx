import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import MoviePreview from "../components/MoviePreview";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import ImageTag from "next/image";
import styled from "styled-components";
import axios from "axios";
import { mediaQuery } from "../styles/global.style";

interface IMovieProps {
  movies: MovieTypes.Movie[];
  recommended: MovieTypes.Movie;
}

const Home: NextPage<IMovieProps> = ({ movies, recommended }) => {
  const router = useRouter();
  const navigate = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <MainContainer>
      <Seo title="Home" />
      <MoviePreview recommended={recommended} />
      <SubContainer>
        <MainHeader>TMDB 최신 영화</MainHeader>
        <GridContainer>
          {movies?.map((movie: MovieTypes.Movie) => (
            <MovieBox key={movie.id}>
              <ImageWrapper>
                <ImageTag
                  onClick={() => navigate(movie.id, movie.original_title)}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="/Logo.png"
                  layout="fill"
                />
              </ImageWrapper>
              <MovieTitle onClick={() => navigate(movie.id, movie.original_title)}>
                {movie.original_title}
              </MovieTitle>
            </MovieBox>
          ))}
        </GridContainer>
      </SubContainer>
    </MainContainer>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  // const id = 634649;
  // const id = 616820
  const id = 436270
  const allMovies = await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const previewMovies = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const movies = allMovies.data.results;
  const recommended = previewMovies.data

  return {
    props: {
      movies,
      recommended,
    },
  };
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap : 30px;
  overflow: auto;
  /* background-color: black; */
`;
const SubContainer = styled.div`
  width: 1000px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${mediaQuery.pad} {
    width: 600px;
  }

  ${mediaQuery.mobile} {
    width: 320px;
  }
`;
const MainHeader = styled.span`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
  /* color: white; */
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(1fr, auto));
  padding: 20px;
  gap: 20px;
  justify-content: center;

  ${mediaQuery.pad} {
    grid-template-columns: repeat(2, 1fr)
  }
`;
const MovieBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageWrapper = styled.div`
  width: 225px;
  height: 337px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.103) 0px 4px 12px;
  position: relative;
  border-radius: 12px;
  cursor: pointer;

  img {
    object-fit: contain;
    border-radius: 12px;
  }

  ${mediaQuery.mobile} {
    width: 112px;
    height: 168px;
  }

  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;
const MovieTitle = styled.div`
  font-size: 17px;
  font-weight:600;
  text-align:center;

  ${mediaQuery.mobile} {
    font-size : 11px;
  }
`