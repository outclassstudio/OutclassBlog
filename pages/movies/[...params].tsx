import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import {
  BackgroundContainer,
  Description,
  Genres,
  GenreText,
  Homepage,
  Icon,
  IconWrapper,
  ImageWrapper,
  LinkWrapper,
  MovieMainContainer,
  MoviePreviewHeader,
  MovieTitle,
  OverlayContainer,
  Rating,
  SubText,
  TextBox,
  TextWrapper,
} from "../../styles/movie-detail.style";
import { FlexColumnDivCentered } from "../../styles/utility.style";

interface IMovieProps {
  movie: MovieTypes.Movie;
}

const Detail: NextPage<IMovieProps> = ({ movie }) => {
  let imgUrl = movie?.poster_path || "/Logo.png";

  return (
    <MainContainer>
      <MovieMainContainer>
        <MoviePreviewHeader>영화소개</MoviePreviewHeader>
        <OverlayContainer>
          <MovieTitle>{movie?.title}</MovieTitle>
          <Genres>
            {movie?.genres.map((el: MovieTypes.Genres) => {
              return <GenreText key={el.id}>{el.name}</GenreText>;
            })}
          </Genres>
          <TextWrapper>
            <TextBox>상영시간 : {movie?.runtime} min.</TextBox>
            <TextBox>개봉일 : {movie?.release_date}</TextBox>
          </TextWrapper>
          <Description>{movie?.overview}</Description>
          <IconWrapper>
            <Icon>
              <FontAwesomeIcon icon={faStar} color={"#ffaf4c"} width={40} />
            </Icon>
            <Rating>{(+movie?.vote_average).toFixed(2)}</Rating>
          </IconWrapper>
          <SubText>TMDB Rating</SubText>
          <LinkWrapper>
            {movie?.homepage && (
              <Homepage as="a" href={movie?.homepage} target="_blank" rel="noreferrer">
                홈페이지
              </Homepage>
            )}
          </LinkWrapper>
        </OverlayContainer>
        <BackgroundContainer>
          <ImageWrapper>
            <Image
              width={438}
              height={657}
              alt="/Logo.png"
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
            />
          </ImageWrapper>
        </BackgroundContainer>
      </MovieMainContainer>
    </MainContainer>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async ({
  query,
}) => {
  let movie;
  let id;
  if (query.params) {
    id = query.params[1];
  }
  try {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    );
    movie = data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      movie,
    },
  };
};

const MainContainer = styled(FlexColumnDivCentered)`
  gap: 30px;
`;
