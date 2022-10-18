import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import MoviePreview from "../components/MoviePreview";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

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
    <div className="container">
      <Seo title="Home" />
      <MoviePreview recommended={recommended} />
      <div className="main">
        <span className="main-header">Popular Movies</span>
        <div className="grid">
          {results?.map((movie: Movie) => (
            <div className="movie" key={movie.id}>
              <img 
                onClick={() => navigate(movie.id, movie.original_title)}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
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

// export const getStaticProps: GetServerSideProps = async () => {
//   const res = await fetch(`http://localhost:3000/api/movies`)
//   const {results} = await res.json()

//   return {
//     props: {
//       results,
//     },
//   };
// };
