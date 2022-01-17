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
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <Link href="/contact">
          <a className={router.pathname === "/contact" ? "active" : ""}>
            Contact
          </a>
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
          font-weight: bold;
        }
        a:hover {
          color: #c70ec7;
        }
        .active {
          color: #c70ec7;
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
}
