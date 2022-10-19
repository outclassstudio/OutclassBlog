import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Seo from "../components/Seo";

const introduce_text = `"영화를 보는 새로운 시각! 아웃클라쓰입니다. 저희는 영화에 대한
다양한 해석을 통해 영화 속에 숨겨져있는 진실을 발견해나가고
있습니다. 그리고 영화 속에 숨겨진 진실이 드러내는 '우리 세상의
진실'을 이야기하고자 합니다. 천천히, 그리고 꾸준히 '좋은 영상'으로
찾아뵙겠습니다:D"`;

const About: NextPage = () => {
  return (
    <AboutContainer>
      <Seo title="About" />
      <SubContainer>
        <LeftBox>
          <Image
            layout="intrinsic"
            width="450"
            height="495"
            alt="/Logo.png"
            src="/Logo.png"
          />
        </LeftBox>
        <RightBox>
          <div>{introduce_text}</div>
          <a
            href="https://www.youtube.com/channel/UCLlHx2GuxkUUMr0MebLBZtQ"
            target="_blank"
            rel="noreferrer"
          >
            유튜브링크
          </a>
        </RightBox>
      </SubContainer>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SubContainer = styled.div`
  width: 1000px;
  display: flex;
  background-color: white;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #e9e9e9;
  justify-content: center;
`;
const LeftBox = styled.div`
  width: 485px;
`;
const RightBox = styled.div`
  width: 485px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    margin: 10px;
    font-size: 20px;
  }

  a {
    margin: 10px;
  }
`;
