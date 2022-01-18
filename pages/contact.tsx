import { GetServerSideProps, NextPage } from "next";
import Seo from "../components/Seo";

const Contact: NextPage = ({ props }: any) => {
  console.log(props);

  return (
    <div className="container">
      <Seo title="Contact" />
      <div className="main">
        <div>문의 : outclassstudio@gmail.com</div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
        }
        .main {
          width: 1000px;
          display: flex;
          /* flex-direction: column; */
          background-color: white;
          margin-top: 30px;
          padding: 20px;
          border: 1px solid #e9e9e9;
          justify-content: center;
        }
        .main img {
          width: 450px;
        }
        .left {
          width: 485px;
        }
        .right {
          /* flex: 1 0 auto; */
          width: 485px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .right div {
          margin: 10px;
          font-size: 20px;
        }
        .right a {
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default Contact;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/movies`);
  const data = await res.json();

  return { props: { data } };
};
