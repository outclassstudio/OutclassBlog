import type { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import MoviePreview from "../components/MoviePreview";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  // console.log(data);

  const router = useRouter();
  const navigate = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  const [movies, setMovies] = useState<any>();
  const [recommended, setRecommended] = useState<any>();

  useEffect(() => {
    axios(`http://localhost:3000/api/movies`).then((res) => {
      setMovies(res.data.results);
    });

    axios(`http://localhost:3000/api/movies/634649`).then((res) => {
      setRecommended(res.data);
      // console.log(res.data);
    });
  }, []);

  // console.log(movies);

  return (
    <div className="container">
      <Seo title="Home" />
      <MoviePreview recommended={recommended} />
      <div className="main">
        <span className="main-header">Popular Movies</span>
        <div className="grid">
          {movies?.map((movie: any) => (
            <div className="movie" key={movie.id}>
              <img
                onClick={() => navigate(movie.id, movie.original_title)}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <h4 onClick={() => navigate(movie.id, movie.original_title)}>
                {movie.original_title}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          overflow: auto;
        }
        .main {
          margin-top: 30px;
          padding-top: 20px;
          width: 1000px;
          background-color: white;
          border: 1px solid #e9e9e9
        }
        .main-header{
          margin-left : 20px;
          font-size : 20px;
          font-weight: 700;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: repeat(auto-fill, minmax(1fr, auto));
          padding: 20px;
          gap: 20px;
          justify-content: center;s
        }
        .movie {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          cursor: pointer;
        }
        .movie img:hover {
          transform: scale(1.05) translateY(-10px);
        }
      `}</style>
    </div>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const data = await axios(`http://localhost:3000/api/movies`);
//   const data = await res.json();

//   return { props: { data } };
// };
