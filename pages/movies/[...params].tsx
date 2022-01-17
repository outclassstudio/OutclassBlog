import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detail: NextPage = () => {
  const router = useRouter();
  // console.log(router.query.params);
  const [movie, setMovie] = useState<any>();
  const id: any = router.query.params;

  useEffect(() => {
    axios(`http://localhost:3000/api/movies/${id[1]}`).then((res) => {
      setMovie(res.data);
      console.log(movie);
    });
  }, []);

  let imgUrl = movie?.poster_path || "/Logo.png";

  return (
    <div className="container">
      <div className="main">
        <div className="header">영화소개</div>
        <div className="content-wrapper">
          <div className="left">
            <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} />
          </div>
          <div className="right">
            <div className="box">Title : {movie?.title}</div>
            <div className="box">Runtime : {movie?.runtime} min.</div>
            <div className="box">Release : {movie?.release_date}</div>
            <div className="box">Rating : {movie?.vote_average}</div>
            <div className="box">
              Genres :
              {movie?.genres.map((el: any) => {
                return <span className="genres">{el.name}</span>;
              })}
            </div>
            <div className="box">
              Homepage :
              <a href={movie?.homepage} target="_blank">
                {movie?.homepage}
              </a>
            </div>
            <div className="box">{movie?.overview}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
        }
        .main {
          width: 1000px;
          display: flex;
          flex-direction: column;
          background-color: white;
          margin-top: 30px;
          padding: 20px;
          border: 1px solid #e9e9e9;
        }
        .header {
          font-size: 20px;
          font-weight: 700;
        }
        .content-wrapper {
          display: flex;
          justify-content: center;
        }
        .left {
          flex: 2 1 0;
          margin-right: 5px;
        }
        .left img {
          width: 100%;
        }
        .right {
          flex: 3 1 0;
          margin-left: 5px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .box {
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
        }
        .genres {
          margin: 0px 5px 0px 5px;
          padding: 0px 5px 0px 5px;
          border-radius: 7px;
          background-color: #2b2b2b;
          font-weight: 500;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Detail;
