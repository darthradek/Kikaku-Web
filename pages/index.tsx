import type { NextPage } from "next";
import Link from "next/link";
import LandingPageHOC from "../ui/hocs/landing-page-hoc/LandingPageHOC";
import css from "./index.module.scss";
import { Heading, Box, Text, Button, Center } from "@chakra-ui/react";

const HomePage: NextPage = () => {
  return (
    <LandingPageHOC>
      <Center h="100vh" background="#E1E8EB">
        <Box maxW="32rem">
          <img src="/teamWork.png" alt="" />
          <Center>
            <Heading mb={4}>Ready to dive in?</Heading>
          </Center>
          <Text fontSize="xl" align="center">
            Create your account or log in to start planning your projects
          </Text>
          <Center>
            <Link href="/register">
              <Button
                size="lg"
                colorScheme="#e1e8eb"
                mt="24px"
                mr="12px"
                bg={"#7952b3"}
              >
                Sign In
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" colorScheme="#e1e8eb" mt="24px" bg={"#ffc107"}>
                Log in
              </Button>
            </Link>
          </Center>
        </Box>
      </Center>
    </LandingPageHOC>
  );
};

export default HomePage;
