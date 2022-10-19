import Footer from "./Footer";
import Nav from "./Nav";

interface props {
  children: JSX.Element;
}

export default function Layout({ children }: props) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
}
