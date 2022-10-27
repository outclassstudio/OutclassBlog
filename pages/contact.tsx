import { NextPage } from "next";
import styled from "styled-components";
import Seo from "../components/Seo";
import { FlexDiv } from "../styles/utility.style";

const Contact: NextPage = () => {
  return (
    <ContactMainContainer>
      <Seo title="Contact" />
      <SubContainer>
        <div>문의 : outclassstudio@gmail.com</div>
      </SubContainer>
    </ContactMainContainer>
  );
};

export default Contact;

const ContactMainContainer = styled(FlexDiv)`
  justify-content: center;
`;
const SubContainer = styled(FlexDiv)`
  width: 1000px;
  background-color: white;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #e9e9e9;
  justify-content: center;
`;
