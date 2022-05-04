import type { NextPage } from "next";
import Link from "next/link";
import css from "./index.module.scss";

const Nav: NextPage = () => {
  return (
    <div>
      <div className={css.nav}>
        <div className={css.logo}>
          <div className={css.logoWrapper}>
            <img className={css.logo1} src="/logo.svg" alt="logo" />
          </div>
          <Link href="/">
            <a>
              <h1>Kikaku</h1>
            </a>
          </Link>
        </div>
        <div className={css.menu}>
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
    </div>
  );
};

export default Nav;
