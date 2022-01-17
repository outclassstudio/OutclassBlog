import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MoviePreview() {
  // console.log(results);

  return (
    <div className="main">
      <div className="header">이달의 추천 영화</div>
      <div className="content-wrapper">
        <div className="left">ㅇ</div>
        <div className="rigth">ㅇ</div>
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
