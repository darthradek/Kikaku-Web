import type { GetServerSideProps, NextPage } from "next";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../ui/hocs/system-page-hoc/SystemPageHOC";
import css from "./index.module.scss";

function TeamsPage(props: ISystemPageHOCProps) {
  return (
    <SystemPageHOC systemPageProps={props.systemPageProps}>sss</SystemPageHOC>
  );
}

export const getServerSideProps: GetServerSideProps = systemPageServerSideProps;

export default TeamsPage;
