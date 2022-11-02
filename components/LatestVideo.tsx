import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import { mediaQuery } from "../styles/global.style";
import { FlexColumnDiv, FlexDiv, FlexDivCentered } from "../styles/utility.style";

interface ILatestVideoProps {
}

const LatestVideo: NextPage<ILatestVideoProps> = () => {
  return (
    <LatestMainContainer>
      <BackgroundContainer>
          <VideoContent src="https://www.youtube.com/embed/DYWNU_LpWpI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></VideoContent>
      </BackgroundContainer>
      <MoviePreviewHeader>Outclass 최신 영상</MoviePreviewHeader>
      <ContentsContainer>
        <MovieTitle>영상제목</MovieTitle>
        {/* <Genres>
          {recommended?.genres.map((el: MovieTypes.Genres) => {
            return <GenreText key={el.id}>{el.name}</GenreText>;
          })}
        </Genres> */}
        <TextWrapper>
          <TextBox>상영시간 : 없음</TextBox>
          <TextBox>개봉일 : 없음</TextBox>
        </TextWrapper>
        <Description>인류최후의적</Description>
        {/* <IconWrapper>
          <Icon>
            <FontAwesomeIcon icon={faStar} color={"#ffaf4c"} width={40} />
          </Icon>
          <Rating>{(+recommended?.vote_average).toFixed(2)}</Rating>
        </IconWrapper> */}
        {/* <SubText>TMDB Rating</SubText> */}
        <LinkWrapper>
          <Homepage
            as="a"
            href="https://www.youtube.com/embed/DYWNU_LpWpI"
            target="_blank"
            rel="noreferrer"
          >
            유튜브링크
          </Homepage>
        </LinkWrapper>
      </ContentsContainer>
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

  ${mediaQuery.pad} {
    flex-direction: column;
    width: 90vw;
    height: 600px;
  }

  ${mediaQuery.mobile} {
    width: 340px;
    height: 480px;
  }
`;
const ContentsContainer = styled.div`
  height: 657px;
  
  ${mediaQuery.pad} {
    width: 100%;
    height: 50%;
  }
`
const BackgroundContainer = styled(FlexColumnDiv)`
  width: 50%;
  height: 657px;
  /* background-color: white; */

  ${mediaQuery.pad} {
    padding: 10px;
    width: 100%;
    /* height: 50%; */
  }
`;
const VideoContent = styled.iframe`
  width: 560;
  height: 315;

  ${mediaQuery.pad} {
    width: 100%;
    height: 100%;
  }
`
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
    font-size: 11px;
    padding-right: 20px;
  }

  ${mediaQuery.mobile} {
    padding-right: 10px;
  }
`;
const MovieTitle = styled.div`
  padding-left: 200px;
  font-size: 40px;
  font-weight: 700;
  color: white;
  text-align: right;
  text-shadow: -1px 0px 3px black, 0px 1px 3px black, 1px 0px 3px black,
    0px -1px 3px black;

  ${mediaQuery.pad} {
    padding-left: 100px;
    font-size: 25px;
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

  ${mediaQuery.mobile} {
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
  padding-left: 460px;
  line-height: 1.7;
  text-align: right;
  color: #e4e4e4f2;

  ${mediaQuery.pad} {
    padding-left: 90px;
    font-size: 13px;
  }

  ${mediaQuery.mobile} {
    margin-top: 15px;
    font-size: 11px;
  }
`
const LinkWrapper = styled(FlexDiv)`
  justify-content: right;
  width: 100%;
  margin-top: 20px;

  ${mediaQuery.mobile} {
    margin-top: 15px;
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