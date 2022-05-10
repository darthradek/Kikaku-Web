import type { NextPage } from "next";
import SystemPageHOC from "../../../ui/hocs/system-page-hoc/SystemPageHOC";
import css from "./index.module.scss";

const TeamsPage: NextPage = () => {
  return <SystemPageHOC>teams</SystemPageHOC>;
};

export default TeamsPage;
