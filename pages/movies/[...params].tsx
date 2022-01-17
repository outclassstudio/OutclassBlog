import { NextPage } from "next";
import { useRouter } from "next/router";

const Detail: NextPage = () => {
  const router = useRouter();
  // const title = router.query.params
  console.log(router.query.params);
  // const query = router.query.params;

  return (
    <div>
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
};

export default Detail;
