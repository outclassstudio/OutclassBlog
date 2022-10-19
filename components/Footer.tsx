import styled from "styled-components";

export default function Footer() {
  return (
    <FooterDiv>
      <div>Copyright Outclass Studio 2021 All Rights Reserved</div>
    </FooterDiv>
  );
}

const FooterDiv = styled.footer`
  margin-top: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  border-top: 1px solid #e9e9e9;
  color: #464646;
  font-size: 13px;
`