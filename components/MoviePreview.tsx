import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

interface IMoviePrevieProps {
  recommended: {
    title: string;
    runtime: string;
    release_date: string;
    vote_average: string;
    genres: string[];
    poster_path: string;
    homepage: string;
    overview: string;
  };
}

const MoviePreview: NextPage<IMoviePrevieProps> = ({ recommended }) => {
  let imgUrl = recommended?.poster_path || "/Logo.png";

  return (
    <MoviePreviewContainer>
      <MoviePreviewHeader>이달의 추천 영화</MoviePreviewHeader>
      <ContentWrapper>
        <LeftBox>
          <Image
            width={380}
            height={569}
            alt="/Logo.png"
            src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
          />
        </LeftBox>
        <RightBox>
          <TextBox>Title : {recommended?.title}</TextBox>
          <TextBox>Runtime : {recommended?.runtime} min.</TextBox>
          <TextBox>Release : {recommended?.release_date}</TextBox>
          <TextBox>Rating : {recommended?.vote_average}</TextBox>
          <TextBox>
            Genres :
            {recommended?.genres.map((el: any) => {
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
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #e9e9e9;
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
  gap: 12px;
`;
const TextBox = styled.div`
  display: flex;
  min-height: 50px;
  align-items: center;
  background-color: #e9e9e9;
  border-radius: 5px;
  padding: 18px;
  font-size: 17px;
  font-weight: 700;
`;

const GenreText = styled.span`
  margin: 0px 5px 0px 5px;
  padding: 0px 5px 0px 5px;
  border-radius: 7px;
  background-color: #2b2b2b;
  font-weight: 500;
  color: white;
`;
