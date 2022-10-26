import styled from "styled-components";
import { mediaQuery } from "./global.style";

export const MovieMainContainer = styled.div`
  margin-top: 30px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.322) 0px 5px 25px;
`;
export const BackgroundContainer = styled.div`
  width: 1000px;
  height: 657px;
  display: flex;
  flex-direction: column;
  background-color: white;
  background-color: #020025;

  ${mediaQuery.pad} {
    width: 90vw;
  }

  ${mediaQuery.mobile} {
    width: 340px;
    height: 480px;
  }
`;
export const OverlayContainer = styled.div`
  position: absolute;
  width: 1000px;
  height: 657px;
  background: linear-gradient(to left, #000000 25%, rgba(0, 0, 0, 0));
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;

  ${mediaQuery.pad} {
    padding-right: 20px;
    width: 90vw;
  }

  ${mediaQuery.mobile} {
    padding-right: 10px;
    width: 340px;
    height: 480px;
  }
`;
export const MoviePreviewHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  top: 40px;
  position: absolute;
  font-size: 14px;
  font-weight: 400;
  color: #ffffffce;
  z-index: 2;
  padding-right: 30px;

  ${mediaQuery.pad} {
    font-size: 11px;
    padding-right: 20px;
  }

  ${mediaQuery.mobile} {
    padding-right: 10px;
  }
`;
export const ImageWrapper = styled.div`
  /* width:100%; */

  span {
    -webkit-box-reflect: right 5px;
  }
  img {
  }

  ${mediaQuery.pad} {
    overflow: hidden;
  }
`;
export const MovieTitle = styled.div`
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
export const Genres = styled.div`
  display: flex;
  gap: 5px;
  justify-content: right;
  padding-left: 18px;
  margin-top: 20px;

  ${mediaQuery.mobile} {
    margin-top: 10px;
    gap: 3px;
  }
`;
export const GenreText = styled.span`
  padding: 5px 7px;
  border-radius: 7px;
  background-color: #775ff3;
  font-size: 12px;
  font-weight: 500;
  color: white;

  ${mediaQuery.pad} {
    font-size: 10px;
  }

  ${mediaQuery.mobile} {
    font-weight: 300;
    padding : 4px;
  }
`;
export const TextWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: right;
  gap: 10px;

  ${mediaQuery.mobile} {
    margin-top: 15px;
  }
`;
export const TextBox = styled.div`
  display: flex;
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
export const Description = styled.div`
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
`;
export const IconWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: right;
  gap: 15px;
  align-items: center;

  ${mediaQuery.mobile} {
    margin-top: 15px;
  }
`;
export const Icon = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery.pad} {
    width: 20px;
  }
`;
export const Rating = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: white;

  ${mediaQuery.pad} {
    font-size: 25px;
  }

  ${mediaQuery.mobile} {
    font-size: 22px;
  }
`;
export const SubText = styled.div`
  padding-right: 10px;
  font-size: 13px;
  font-weight: 400;
  color: #bdbdbd;
  text-align: right;

  ${mediaQuery.pad} {
    font-size: 10px;
  }
`;
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  margin-top: 20px;

  ${mediaQuery.mobile} {
    margin-top: 15px;
  }
`;
export const Homepage = styled.a`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
