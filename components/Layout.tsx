import { NextPage } from "next";
import Footer from "./Footer";
import Nav from "./Nav";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: NextPage<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
        <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
