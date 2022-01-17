import { NextPage } from "next";
import Seo from "../components/Seo";

const About: NextPage = () => {
  return (
    <div className="container">
      <Seo title="About" />
      <div className="main">
        <div className="left">
          <img src="/Logo.png" />
        </div>
        <div className="right">
          <div>
            "영화를 보는 새로운 시각! 아웃클라쓰입니다. 저희는 영화에 대한
            다양한 해석을 통해 영화 속에 숨겨져있는 진실을 발견해나가고
            있습니다. 그리고 영화 속에 숨겨진 진실이 드러내는 '우리 세상의
            진실'을 이야기하고자 합니다. 천천히, 그리고 꾸준히 '좋은 영상'으로
            찾아뵙겠습니다:D"
          </div>
          <a
            href="https://www.youtube.com/channel/UCLlHx2GuxkUUMr0MebLBZtQ"
            target="_blank"
          >
            유튜브링크
          </a>
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

export default About;
