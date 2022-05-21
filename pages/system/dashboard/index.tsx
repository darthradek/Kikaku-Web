import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../ui/hocs/system-page-hoc/SystemPageHOC";
import css from "./index.module.scss";

function DashboardPage(props: ISystemPageHOCProps) {
  return (
    <SystemPageHOC systemPageProps={props.systemPageProps}>
      <Container maxW={"5xl"}>
        <Stack
          mt="10"
          textAlign={"center"}
          align={"center"}
          spacing={{ md: 8 }}
        >
          <img
            className={css.dashboardIlluWrapper}
            src="/illus/dashboard-illu.svg"
            alt=""
          />
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color="#ffc107"
          >
            Kickstart your project!
          </Heading>
          <Text color="#F2F2F2" maxW="3xl">
            Never miss a meeting. Never be late for one too. Keep track of your
            meetings and receive smart reminders in appropriate times. Read your
            smart “Daily Agenda” every morning.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              px={6}
              bg={"#7952b3"}
              color="white"
              _hover={{ bg: "#7952b3" }}
            >
              Create Project
            </Button>
            <Button
              bg="#ffc107"
              color="#43474b"
              _hover={{ bg: "#ffc107" }}
              px={6}
            >
              Create Team
            </Button>
          </Stack>
        </Stack>
      </Container>
    </SystemPageHOC>
  );
}

export const getServerSideProps: GetServerSideProps = systemPageServerSideProps;

export default DashboardPage;
