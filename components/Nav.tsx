import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FlexColumnDivCentered } from "../styles/utility.style";

const Nav: NextPage = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/");
  };

  return (
    <NavContainer>
      <Image
        width={80}
        height={89}
        onClick={() => navigate()}
        src="/Logo.png"
        alt="/Logo.png"
      />
      <Menus>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <Link href="/contact">
          <a className={router.pathname === "/contact" ? "active" : ""}>
            Contact
          </a>
        </Link>
      </Menus>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled(FlexColumnDivCentered)`
  padding-top: 10px 0px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;

  img {
    cursor: pointer;
  }
`;
const Menus = styled.div`
  a {
    margin: 0px 5px;
    font-weight: bold;
  }
  a:hover {
    color: #c70ec7;
  }
  &.active {
    color: #c70ec7;
    font-weight: bold;
  }
`;
