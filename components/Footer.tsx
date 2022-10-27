import styled from "styled-components";
import { FlexDivCentered } from "../styles/utility.style";

export default function Footer() {
  return (
    <FooterDiv>
      <div>Copyright Outclass Studio 2020 All Rights Reserved</div>
    </FooterDiv>
  );
}

const FooterDiv = styled(FlexDivCentered)`
  margin-top: 30px;
  background-color: white;
  height: 50px;
  border-top: 1px solid #e9e9e9;
  color: #464646;
  font-size: 13px;
`;
