import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { mediaQuery } from "../styles/global.style";
import { FlexColumnDiv, FlexDiv } from "../styles/utility.style";
import Image from "next/image";

interface IMovieBoxProps {
  movie : MovieTypes.Movie
}

const MovieBox: NextPage<IMovieBoxProps> = ({movie}) => {
  const router = useRouter();
  const navigate = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <MovieBoxContainer>
      <ImageWrapper>
        <Image
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
    </MovieBoxContainer>
  )
}

export default MovieBox

const MovieBoxContainer = styled(FlexColumnDiv)`
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