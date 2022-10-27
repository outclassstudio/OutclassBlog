import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import MoviePreview from "../components/MoviePreview";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import ImageTag from "next/image";
import styled from "styled-components";
import axios from "axios";
import { mediaQuery } from "../styles/global.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FlexColumnDiv, FlexColumnDivCentered, FlexDiv } from "../styles/utility.style";

interface IMovieProps {
  movies: MovieTypes.Movie[];
  recommended: MovieTypes.Movie;
}

const Home: NextPage<IMovieProps> = ({ movies, recommended }) => {
  const router = useRouter();
  const navigate = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  // console.log(movies)

  return (
    <MainContainer>
      <Seo title="Home" />
      <MoviePreview recommended={recommended} />
      <SubContainer>
        <MainHeader>
          <HeaderText>
            TMDB 최신 영화
          </HeaderText>
        </MainHeader>
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
              <MovieInfoWrapper>
                <MovieTitle
                  onClick={() => navigate(movie.id, movie.original_title)}
                >
                  {movie.original_title}
                </MovieTitle>
                <MovieInfoSubWrapper>
                  <MovieInfo>{movie.release_date}</MovieInfo>
                  <FontAwesomeIcon icon={faStar} color={"#ffaf4c"} width={10} />
                  <MovieInfo>{movie.vote_average}</MovieInfo>
                </MovieInfoSubWrapper>
              </MovieInfoWrapper>
            </MovieBox>
          ))}
        </GridContainer>
      </SubContainer>
    </MainContainer>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const id = 634649;
  // const id = 436270;
  const allMovies = await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const previewMovies = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const movies = allMovies.data.results;
  const recommended = previewMovies.data;

  return {
    props: {
      movies,
      recommended,
    },
  };
};

const MainContainer = styled(FlexColumnDivCentered)`
  gap: 30px;
  overflow: auto;
`;
const SubContainer = styled(FlexColumnDiv)`
  width: 1000px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  align-items: center;

  ${mediaQuery.pad} {
    width: 90vw;
  }

  ${mediaQuery.mobile} {
    width: 340px;
  }
`;
const MainHeader = styled(FlexDiv)`
  width: 100%;
  padding: 0px 25px;
  margin-top: 20px;
`;
const HeaderText = styled(FlexDiv)`
  width: 100%;
  justify-content: left;
  font-size: 18px;
  font-weight: 700;
  padding-bottom : 15px;
  border-bottom : 1px solid gray;

  ${mediaQuery.pad} {
    font-size: 16px;
  }
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(1fr, auto));
  padding: 20px;
  gap: 20px;
  justify-content: center;

  ${mediaQuery.pad} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediaQuery.middle} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const MovieBox = styled(FlexColumnDiv)`
  align-items: center;
  position: relative;
`;
const ImageWrapper = styled.div`
  width: 225px;
  height: 337px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.103) 0px 4px 12px;
  position: relative;
  border-radius: 7px;
  cursor: pointer;

  img {
    object-fit: contain;
    border-radius: 7px;
  }

  ${mediaQuery.middle} {
    width: 180px;
    height: 270px;
  }

  ${mediaQuery.mobile} {
    width: 135px;
    height: 202px;
  }

  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;
const MovieInfoWrapper = styled(FlexColumnDiv)`
  width: 100%;

  ${mediaQuery.middle} {
    padding : 0px 10px;
  }

  ${mediaQuery.mobile} {
    padding : 0px 5px;
  }
`
const MovieTitle = styled.div`
  font-size: 14px;
  font-weight: 600;

  ${mediaQuery.mobile} {
    font-size: 12px;
  }
`;
const MovieInfoSubWrapper = styled(FlexDiv)`
  display: flex;
  gap: 5px;
`
const MovieInfo = styled.div`
  font-size : 11px;
  font-weight: 300;
`