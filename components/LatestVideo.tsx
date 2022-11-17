import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import { mediaQuery } from "../styles/global.style";
import {
  FlexColumnDiv,
  FlexDiv,
  FlexDivCentered,
} from "../styles/utility.style";

interface ILatestVideoProps {}

const LatestVideo: NextPage<ILatestVideoProps> = () => {
  return (
    <LatestMainContainer>
      <OverlayContainer>
        <BackgroundContainer>
          <VideoContent
            src="https://www.youtube.com/embed/DYWNU_LpWpI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></VideoContent>
        </BackgroundContainer>
        <MoviePreviewHeader>Outclass 최신 영상</MoviePreviewHeader>
        <ContentsContainer>
          <MovieTitle>인류 최후의 적, 직장 상사 | 영화 파이트 클럽</MovieTitle>
          <TextWrapper>
            <TextBox>영상길이 : 8분48초</TextBox>
            <TextBox>분류 : 영화 해석</TextBox>
          </TextWrapper>
          <Description>
            인류최후의적, 직장 상사와 얽힌 이야기와 함께 모욕감에 대처하는
            방법에 대해 이야기 합니다.
          </Description>
          <LinkWrapper>
            <Homepage
              as="a"
              href="https://www.youtube.com/watch?v=DYWNU_LpWpI"
              target="_blank"
              rel="noreferrer"
            >
              유튜브링크
            </Homepage>
          </LinkWrapper>
        </ContentsContainer>
      </OverlayContainer>
    </LatestMainContainer>
  );
};

export default LatestVideo;

const LatestMainContainer = styled(FlexDiv)`
  width: 1000px;
  height: 657px;
  margin-top: 30px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.322) 0px 5px 25px;
  background-color: #020025;
  background-image: url("/fightclub.jpg");
  background-size: cover;

  ${mediaQuery.pad} {
    width: 90vw;
    height: 600px;
  }

  ${mediaQuery.mobile} {
    width: 340px;
    height: 480px;
  }
`;
const OverlayContainer = styled(FlexDiv)`
  position: absolute;
  width: 1000px;
  height: 657px;
  background: linear-gradient(to left, #000000 10%, rgba(0, 0, 0, 0));
  z-index: 1;
  justify-content: center;

  ${mediaQuery.pad} {
    flex-direction: column;
    align-items: center;
    width: 90vw;
    height: 600px;
  }

  ${mediaQuery.mobile} {
    width: 340px;
    height: 480px;
  }
`;
const BackgroundContainer = styled(FlexColumnDiv)`
  width: 450px;
  height: 657px;
  padding-left: 30px;
  justify-content: center;
  align-items: center;

  ${mediaQuery.pad} {
    padding: 30px 10px 10px 10px;
    width: 100%;
  }
`;
const VideoContent = styled.iframe`
  width: 100%;
  height: 42%;
  box-shadow: rgba(0, 0, 0, 1) 0px 0px 30px, rgba(0, 0, 0, 1) 0px 0px 30px;

  ${mediaQuery.pad} {
    width: 100%;
    height: 100%;
  }
`;
const MoviePreviewHeader = styled(FlexDiv)`
  width: 100%;
  justify-content: right;
  position: absolute;
  top: 40px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffffce;
  padding-right: 30px;
  z-index: 2;

  ${mediaQuery.pad} {
    top: 10px;
    padding-left: 10px;
    justify-content: left;
    font-size: 11px;
    padding-right: 20px;
  }

  ${mediaQuery.mobile} {
    padding-right: 10px;
  }
`;
const ContentsContainer = styled(FlexColumnDiv)`
  justify-content: center;
  width: 550px;
  height: 657px;
  padding: 0px 30px;

  ${mediaQuery.pad} {
    width: 100%;
    height: 50%;
  }
`;
const MovieTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: white;
  text-align: right;
  text-shadow: -1px 0px 3px black, 0px 1px 3px black, 1px 0px 3px black,
    0px -1px 3px black;

  ${mediaQuery.pad} {
    text-align: left;
    width: 100%;
    padding-left: 0px;
    font-size: 22px;
  }

  ${mediaQuery.mobile} {
    padding-left: 20px;
    font-size: 22px;
  }
`;
const TextWrapper = styled(FlexDiv)`
  margin-top: 20px;
  justify-content: right;
  gap: 10px;

  ${mediaQuery.pad} {
    justify-content: left;
    width: 100%;
    padding-left: 0px;
    font-size: 25px;
    margin-top: 20px;
  }

  ${mediaQuery.mobile} {
    width: 100%;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    margin-top: 15px;
  }
`;
const TextBox = styled(FlexDiv)`
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  color: #ffffffb5;

  ${mediaQuery.pad} {
    font-size: 11px;
  }

  ${mediaQuery.mobile} {
    font-size: 8px;
  }
`;
const Description = styled.div`
  margin-top: 20px;
  /* padding-left: 460px; */
  line-height: 1.7;
  text-align: right;
  color: #e4e4e4f2;

  ${mediaQuery.pad} {
    text-align: left;
    padding-left: 0px;
    font-size: 13px;
  }

  ${mediaQuery.mobile} {
    margin-top: 15px;
    font-size: 11px;
  }
`;
const LinkWrapper = styled(FlexDiv)`
  justify-content: right;
  width: 100%;
  margin-top: 20px;

  ${mediaQuery.pad} {
    justify-content: left;
    margin: 15px 0px;
  }
`;
const Homepage = styled(FlexDivCentered)`
  width: 100px;
  height: 40px;
  color: white;
  font-size: 14px;
  background: linear-gradient(to bottom right, #007491, #850091);
  border-radius: 10px;

  ${mediaQuery.pad} {
    width: 70px;
    height: 30px;
    font-size: 10px;
  }
`;
