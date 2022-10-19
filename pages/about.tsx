import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Seo from "../components/Seo";
import { introduce_text } from "./contents/about-text";

const About: NextPage = () => {
  return (
    <AboutContainer>
      <Seo title="About" />
      <SubContainer>
        <LeftBox>
          <Image layout="intrinsic" width="450" height="495" alt="/Logo.png" src="/Logo.png" />
        </LeftBox>
        <RightBox>
          <div>
            {introduce_text}
          </div>
          <a
            href="https://www.youtube.com/channel/UCLlHx2GuxkUUMr0MebLBZtQ"
            target="_blank" rel="noreferrer"
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
`
const SubContainer = styled.div`
  width: 1000px;
  display: flex;
  background-color: white;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #e9e9e9;
  justify-content: center;
`
const LeftBox = styled.div`
  width: 485px;
`
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
`