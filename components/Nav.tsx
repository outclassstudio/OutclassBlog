import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const navigate = (): void => {
    router.push("/");
  };

  return (
    <nav>
      <img onClick={() => navigate()} src="/Logo.png" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>about</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          padding-top: 10px;
          padding-bottom: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: white;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -40px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -50px;
        }
        img {
          width: 80px;
          cursor: pointer;
        }
        a {
          margin: 0px 5px 0px 5px;
        }
        a:hover {
          color: tomato;
        }
        .active {
          color: tomato;
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
}
