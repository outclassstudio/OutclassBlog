export default function MoviePreview({ recommended }: any) {
  // console.log(results);
  let imgUrl = recommended?.poster_path || "/Logo.png";

  return (
    <div className="main">
      <div className="header">이달의 추천 영화</div>
      <div className="content-wrapper">
        <div className="left">
          <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} />
        </div>
        <div className="right">
          <div className="box">Title : {recommended?.title}</div>
          <div className="box">Runtime : {recommended?.runtime} min.</div>
          <div className="box">Release : {recommended?.release_date}</div>
          <div className="box">Rating : {recommended?.vote_average}</div>
          <div className="box">
            Genres :
            {recommended?.genres.map((el: any) => {
              return <span className="genres">{el.name}</span>;
            })}
          </div>
          <div className="box">
            Homepage :
            <a href={recommended?.homepage} target="_blank">
              {recommended?.homepage}
            </a>
          </div>
          <div className="box">{recommended?.overview}</div>
        </div>
      </div>

      <style jsx>{`
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
          align-items: center;
          background-color: #e9e9e9;
          border-radius: 5px;
          padding: 18px;
          font-size: 17px;
          font-weight: 700;
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
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   let results: any;

//   axios(`http://localhost:3000/api/movies`).then((res) => {
//     results = res;
//     // console.log(res);
//   });

//   return {
//     props: {
//       results,
//     },
//   };
// };
