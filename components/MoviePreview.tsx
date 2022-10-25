import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
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
} from "../styles/movie-detail.style";

interface IMoviePrevieProps {
  recommended: MovieTypes.Movie;
}

const MoviePreview: NextPage<IMoviePrevieProps> = ({ recommended }) => {
  let imgUrl = recommended?.poster_path || "/Logo.png";
  return (
    <MovieMainContainer>
      <MoviePreviewHeader>Outclass 추천 영화</MoviePreviewHeader>
      <OverlayContainer>
        <MovieTitle>{recommended?.title}</MovieTitle>
        <Genres>
          {recommended?.genres.map((el: MovieTypes.Genres) => {
            return <GenreText key={el.id}>{el.name}</GenreText>;
          })}
        </Genres>
        <TextWrapper>
          <TextBox>상영시간 : {recommended?.runtime} min.</TextBox>
          <TextBox>개봉일 : {recommended?.release_date}</TextBox>
        </TextWrapper>
        <Description>{recommended?.overview}</Description>
        <IconWrapper>
          <Icon>
            <FontAwesomeIcon icon={faStar} color={"#ffaf4c"} width={40} />
          </Icon>
          <Rating>{(+recommended?.vote_average).toFixed(2)}</Rating>
        </IconWrapper>
        <SubText>TMDB Rating</SubText>
        <LinkWrapper>
          <Homepage
            href={recommended?.homepage}
            target="_blank"
            rel="noreferrer"
          >
            홈페이지
          </Homepage>
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
  );
};

export default MoviePreview;
