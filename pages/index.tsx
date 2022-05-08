import type { NextPage } from "next";
import Link from "next/link";
import LandingPageHOC from "../ui/hocs/landing-page-hoc/LandingPageHOC";
import css from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <LandingPageHOC>
      <div className={css.pageWrapper}>
        {/* Our homepage goes here a will get all the illus */}
        <img src="/teamWork.png" alt="" />
      </div>
    </LandingPageHOC>
  );
};

export default Home;
