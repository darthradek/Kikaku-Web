import type { NextPage } from "next";
import Link from "next/link";
import css from "./index.module.scss";

const Nav: NextPage = () => {
  return (
    <div>
      <div className={css.nav}>
        <div className={css.logo}>
          <div className={css.logoWrapper}>
            <img className="max-w-none" src="/logo.svg" alt="logo" />
          </div>
          <Link href="/">
            <a>
              <h1>Kikaku</h1>
            </a>
          </Link>
        </div>
        <div className={css.menu}>
          <Link href="/login">
            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              <h2>Login</h2>
            </a>
          </Link>
          <Link href="/register">
            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
              <h2>Register</h2>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
