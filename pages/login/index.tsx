import type { NextPage } from "next";
import css from "./index.module.scss";
import Link from "next/link";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import LandingPageHOC from "../../ui/hocs/landing-page-hoc/LandingPageHOC";
import Routes from "../../global/Routes";
import UserService from "../../services/UserService";
import { ILoginUserDTO } from "../../utils/dtos/user/LoginUserDTO";
import { useEffect, useState } from "react";
import router from "next/router";

const LoginPage: NextPage = () => {
  // SECTION: Services
  const userService = new UserService();

  // SECTION: Services calls
  async function loginUser() {
    const loginUserDTO: ILoginUserDTO = {
      email: emailInput,
      password: passwordInput,
    };

    userService.loginUser(loginUserDTO).then((response) => {
      console.log("response: ", response);
      router.push(Routes.systemDashboardPage);
    });
  }

  // SECTION: Hooks State - UI
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  return (
    <LandingPageHOC>
      <Center h="100vh" background="backgroundPrimary" flexDirection="column">
        <Center>
          <Heading mb={4}>Log into your account</Heading>
        </Center>
        <Box w={[300, 400, 600]} p="12px" border="0px" borderRadius="10px">
          <FormControl pb="12px">
            <FormLabel htmlFor="email" fontSize="xl">
              Email address
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              borderColor="grey"
              _hover={{ borderColor: "blue" }}
              onChange={(newValue) => setEmailInput(newValue.target.value)}
            />
          </FormControl>
          <FormControl pb="12px">
            <FormLabel htmlFor="password" fontSize="xl">
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              borderColor="grey"
              _hover={{ borderColor: "blue" }}
              onChange={(newValue) => setPasswordInput(newValue.target.value)}
            />
          </FormControl>
          <Center>
            <Button
              w={[300, 400, 600]}
              size="lg"
              mt="24px"
              bg={"highlightPrimary"}
              color="backgroundSecondary"
              _hover={{
                bg: "highlightSecondary",
                color: "backgroundPrimary",
              }}
              onClick={() => loginUser()}
            >
              Log In
            </Button>
          </Center>
        </Box>
        <Text fontSize="xl" align="center">
          Dont have an account yet?
        </Text>
        <Link href={Routes.registerPage}>
          <Text
            fontSize="xl"
            color="highlightSecondary"
            className={css.createAccount}
          >
            Sign up
          </Text>
        </Link>
      </Center>
    </LandingPageHOC>
  );
};

export default LoginPage;
