import type { NextPage } from "next";
import Link from "next/link";
import css from "./index.module.scss";

const Nav: NextPage = () => {
  return (
    
    <div>
      <div className={css.nav}>
        <Link href="/">
          <a>
            <h1>LOGO</h1>
          </a>
        </Link>
        <Link href="/register">
          <a>
            <h2>Register</h2>
          </a>
        </Link>
        <Link href="/login">
          <a>
            <h2>Login</h2>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
