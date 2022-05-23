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
  useToast,
  Stack,
} from "@chakra-ui/react";
import LandingPageHOC from "../../ui/hocs/landing-page-hoc/LandingPageHOC";
import Routes from "../../global/Routes";
import UserService from "../../services/UserService";
import { ILoginUserDTO } from "../../utils/dtos/user/LoginUserDTO";
import { useEffect, useState } from "react";
import router from "next/router";
import AuthService from "../../services/AuthService";

const LoginPage: NextPage = (props: any) => {
  // SECTION: Props
  const {} = props;

  // SECTION: Constants & Variables
  const toast = useToast();

  // SECTION: Services
  const userService = new UserService();
  const authService = new AuthService();

  // SECTION: Services calls
  async function loginUser() {
    const loginUserDTO: ILoginUserDTO = {
      email: emailInput,
      password: passwordInput,
    };
    userService.loginUser(loginUserDTO).then((response: any) => {
      toast({
        title: "User logged in successfully!",
        position: "top-left",
        description: "Good luck planning your projects 🤠",
        status: "success",
        duration: 1350,
        isClosable: true,
      });
      authService.saveToken(response.token);
      router.push(Routes.systemDashboardPage);
    });
  }

  // SECTION: Hooks State - UI
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  return (
    <LandingPageHOC>
      <Center h="100vh" background="backgroundPrimary" flexDirection="column">
        <Box w={[300, 400, 600]} p="12px" border="0px" borderRadius="10px">
          <Stack mb="6" textAlign={"center"} align={"left"}>
            <Heading fontSize={"3xl"}>Sign in to your account!</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
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
