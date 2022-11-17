import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import MoviePreview from "../components/MoviePreview";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import styled from "styled-components";
import axios from "axios";
import { mediaQuery } from "../styles/global.style";
import {
  FlexColumnDiv,
  FlexColumnDivCentered,
  FlexDiv,
} from "../styles/utility.style";
import React, { useEffect, useState } from "react";
import MovieBox from "../components/MovieBox";
import LatestVideo from "../components/LatestVideo";

interface IMovieProps {
  movies: MovieTypes.Movie[];
  recommended: MovieTypes.Movie;
}

// type SortedMovieType = null | MovieTypes.Movie[]

const Home: NextPage<IMovieProps> = ({ movies, recommended }) => {
  // const [sortedMovieList, setSortedMovieList] = useState<SortedMovieType>(null)

  // const handleSortingMovieList = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   let sorted: SortedMovieType

  //   if(e.target.value === "평점순") {
  //     sorted = movies?.sort((a,b) => Number(b.vote_average) - Number(a.vote_average))
  //     if(sorted.length) {
  //       setSortedMovieList(sorted)
  //     }
  //   } else if(e.target.value === "최신순") {
  //     sorted = movies?.sort((a,b) =>{
  //       const date1:any = new Date(a.release_date);
  //       const date2:any = new Date(b.release_date);
  //       return date2.getTime() - date1.getTime();
  //     })
  //     if(sorted.length) {
  //       setSortedMovieList(sorted)
  //     }
  //   }
  // }

  return (
    <MainContainer>
      <Seo title="Home" />
      <LatestVideo />
      <MoviePreview recommended={recommended} />
      <SubContainer>
        <MainHeader>
          <HeaderText>
            TMDB 최신 영화
            {/* <SelectBox onChange={handleSortingMovieList}>
            <SelectBox >
              <option>옵션을 선택하세요</option>
              <option>최신순</option>
              <option>평점순</option>
            </SelectBox> */}
          </HeaderText>
        </MainHeader>
        <GridContainer>
          {movies &&
            movies.map((movie: MovieTypes.Movie) => (
              <MovieBox key={movie.id} movie={movie} />
            ))}
          {/* {sortedMovieList === null ?
          (movies.map((movie: MovieTypes.Movie) => (
            <MovieBox key={movie.id} movie={movie}/>
          )))
        : (sortedMovieList?.map((movie: MovieTypes.Movie) => (
            <MovieBox key={movie.id} movie={movie}/>
        )))
        } */}
        </GridContainer>
      </SubContainer>
    </MainContainer>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const id = 634649;
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
  align-items: center;
`;
const HeaderText = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;

  ${mediaQuery.pad} {
    font-size: 16px;
  }
`;
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
const SelectBox = styled.select`
  height: 25px;
`;
