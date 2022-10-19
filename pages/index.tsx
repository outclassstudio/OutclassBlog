import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import MoviePreview from "../components/MoviePreview";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import ImageTag from "next/image";
import styled from "styled-components";

interface IMovieProps {
  results : Movie[];
  recommended: Movie;
}

interface Movie {
  id: number;
  title: string;
  original_title: string;
  runtime: string;
  release_date: string;
  vote_average: string;
  genres: string[];
  poster_path: string;
  homepage: string;
  overview: string;
}

const Home: NextPage<IMovieProps> = ({ results, recommended }) => {
  const router = useRouter();
  const navigate = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <MainContainer>
      <Seo title="Home" />
      <MoviePreview recommended={recommended} />
      <SubContainer>
        <MainHeader>Popular Movies</MainHeader>
        <GridContainer>
          {results?.map((movie: Movie) => (
            <MovieBox key={movie.id}>
              <ImageWrapper>
                <ImageTag
                  onClick={() => navigate(movie.id, movie.original_title)}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="/Logo.png"
                  layout="fill"
                />
              </ImageWrapper>
              <h4 onClick={() => navigate(movie.id, movie.original_title)}>
                {movie.original_title}
              </h4>
            </MovieBox>
          ))}
        </GridContainer>
      </SubContainer>
    </MainContainer>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/movies`)
  const res2 = await fetch(`http://localhost:3000/api/movies/634649`)
  const recommended = await res2.json()
  const {results} = await res.json()

  return {
    props: {
      results, recommended
    },
  };
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MainHeader = styled.span`
  margin-left : 20px;
  font-size : 20px;
  font-weight: 700;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill, minmax(1fr, auto));
  padding: 20px;
  gap: 20px;
  justify-content: center;
`

const MovieBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 225px;
  height: 337px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: relative;
  border-radius: 12px;
  cursor: pointer;

  img {
    object-fit: contain;
    border-radius: 12px;
  }

  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`