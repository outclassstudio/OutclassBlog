import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

interface IMoviePrevieProps {
  recommended: MovieTypes.Movie
}

const MoviePreview: NextPage<IMoviePrevieProps> = ({ recommended }) => {
  let imgUrl = recommended?.poster_path || "/Logo.png";

  return (
    <MoviePreviewContainer>
      <MoviePreviewHeader>Outclass 추천 영화</MoviePreviewHeader>
      <ContentWrapper>
        <LeftBox>
          <Image
            width={380}
            height={569}
            alt="/Logo.png"
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
          />
        </LeftBox>
        <RightBox>
          <MovieTitle>{recommended?.title}</MovieTitle>
          <TextBox>Runtime : {recommended?.runtime} min.</TextBox>
          <TextBox>Release : {recommended?.release_date}</TextBox>
          <TextBox>Rating : {recommended?.vote_average}</TextBox>
          <TextBox>
            Genres :
            {recommended?.genres.map((el: MovieTypes.Genres) => {
              return <GenreText key={el.id}>{el.name}</GenreText>;
            })}
          </TextBox>
          <TextBox>
            Homepage :
            <a href={recommended?.homepage} target="_blank" rel="noreferrer">
              {recommended?.homepage}
            </a>
          </TextBox>
          <TextBox>{recommended?.overview}</TextBox>
        </RightBox>
      </ContentWrapper>
    </MoviePreviewContainer>
  );
};

export default MoviePreview;

const MoviePreviewContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  background-color: white;
  /* background-color: #775ff3; */
  margin-top: 30px;
  padding: 40px;
  border: 1px solid #e9e9e9;
  border-radius: 30px;
  /* color:white; */
`;
const MoviePreviewHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const LeftBox = styled.div`
  flex: 2 1 0;
  margin-right: 5px;

  img {
  }
`;
const RightBox = styled.div`
  flex: 3 1 0;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MovieTitle =styled.div`
  padding-left: 18px;
  font-size: 25px;
  font-weight: 800;
`
const TextBox = styled.div`
  display: flex;
  min-height: 50px;
  align-items: center;
  /* background-color: #fdfdfd; */
  background-color: white;
  border-radius: 5px;
  padding: 18px;
  font-size: 17px;
  font-weight: 700;
  color: #555555;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 10px; */
`;

const GenreText = styled.span`
  margin: 0px 5px;
  padding: 5px 7px;
  border-radius: 7px;
  /* background-color: #2b2b2b; */
  background-color: #775ff3;
  font-weight: 500;
  color: white;
`;
