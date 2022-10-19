import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

const Detail: NextPage = ({ movie }: any) => {
  let imgUrl = movie?.poster_path || "/Logo.png";

  return (
    <MovieDetailContainer>
      <SubContainer>
        <MovieDetailHeader>영화소개</MovieDetailHeader>
        <ContentWrapper>
          <LeftBox>
            <Image
              width={380}
              height={566}
              alt="/Logo.png"
              src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
            />
          </LeftBox>
          <RightBox>
            <TextBox>Title : {movie?.title}</TextBox>
            <TextBox>Runtime : {movie?.runtime} min.</TextBox>
            <TextBox>Release : {movie?.release_date}</TextBox>
            <TextBox>Rating : {movie?.vote_average}</TextBox>
            <TextBox>
              Genres :
              {movie?.genres.map((el: any) => {
                return <GenreText key={el.id}>{el.name}</GenreText>;
              })}
            </TextBox>
            <TextBox>
              Homepage :
              <a href={movie?.homepage} target="_blank" rel="noreferrer">
                {movie?.homepage}
              </a>
            </TextBox>
            <TextBox>{movie?.overview}</TextBox>
          </RightBox>
        </ContentWrapper>
      </SubContainer>
    </MovieDetailContainer>
  );
};

export default Detail;

export const getServerSideProps = async ({ query, req }: any) => {
  const id = query.params[1];
  let movie: any;
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

const MovieDetailContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SubContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #e9e9e9;
`;
const MovieDetailHeader = styled.div`
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
  /* max-height: 136px; */
  align-items: center;
  background-color: #e9e9e9;
  border-radius: 5px;
  padding: 18px;
  font-size: 17px;
  font-weight: 700;
  /* overflow: auto; */
`;

const GenreText = styled.span`
  margin: 0px 5px;
  padding: 0px 5px 0px 5px;
  border-radius: 7px;
  background-color: #2b2b2b;
  font-weight: 500;
  color: white;
`;
