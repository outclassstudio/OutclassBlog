import Nav from "./Nav";

interface props {
  children: any;
}

export default function Layout({ children }: props) {
  return (
    <>
      <Nav></Nav>
      <div>{children}</div>
    </>
  );
}
