import type { NextPage } from "next";
import SystemPageHOC from "../../../ui/hocs/system-page-hoc/SystemPageHOC";
import css from "./index.module.scss";

const DashboardPage: NextPage = () => {
  return (
    <SystemPageHOC>
      <div className={css.something}>
        <h1>Dashboard</h1>
      </div>
    </SystemPageHOC>
  );
};

export default DashboardPage;
