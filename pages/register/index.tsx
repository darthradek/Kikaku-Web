import type { NextPage } from "next";
import css from "./index.module.scss";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Button,
  Center,
  Link,
  FormHelperText,
  Stack,
} from "@chakra-ui/react";
import UserService from "../../services/UserService";
import { useEffect, useState } from "react";
import LandingPageHOC from "../../ui/hocs/landing-page-hoc/LandingPageHOC";
import Routes from "../../global/Routes";
import Router from "next/router";
import { IRegisterUserDTO } from "../../utils/dtos/user/RegisterUserDTO";
import { useToast } from "@chakra-ui/react";

const RegisterPage: NextPage = () => {
  const toast = useToast();
  // SECTION: Services
  const userService = new UserService();

  // SECTION: Services calls
  async function register() {
    const username = emailInput.split("@")[0];

    const registerUserDTO: IRegisterUserDTO = {
      username: username,
      email: emailInput,
      password: passwordInput,
    };
    userService.registerUser(registerUserDTO).then((response) => {
      toast({
        title: "Account created successfully!",
        position: "top-left",
        description: "Now you can log into your account",
        status: "success",
        duration: 1350,
        isClosable: true,
      });
      Router.push(Routes.loginPage);
    });
  }

  // SECTION: Hooks State - UI
  const [isCreateAccountValid, setIsCreateAccountValid] =
    useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>();

  // MARK: Hooks Effect - UI
  useEffect(() => {
    if (emailInput.length > 0 && passwordInput === confirmPasswordInput) {
      setIsCreateAccountValid(true);
    }
  }, [emailInput, passwordInput, confirmPasswordInput]);

  return (
    <LandingPageHOC>
      <Center h="100vh" background="backgroundPrimary" flexDirection="column">
        <Box p={8}>
          <Stack mb="6" textAlign={"center"} align={"left"}>
            <Heading fontSize={"3xl"}>Create your account!</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <FormControl pb="12px" isRequired>
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
          <FormControl pb="12px" isRequired>
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
            <FormHelperText>
              Your password must be at least 6 characters long.
            </FormHelperText>
          </FormControl>
          <FormControl pb="12px" isRequired>
            <FormLabel htmlFor="password" fontSize="xl">
              Confirm password
            </FormLabel>
            <Input
              id="confrimPassword"
              type="confrimPassword"
              placeholder="Enter password again"
              borderColor="grey"
              _hover={{ borderColor: "blue" }}
              onChange={(newValue) =>
                setConfirmPasswordInput(newValue.target.value)
              }
            />
            <FormHelperText>
              Repeat your password in order to confirm it.
            </FormHelperText>
          </FormControl>
          <Center>
            <Button
              isDisabled={!isCreateAccountValid}
              w={[300, 400, 600]}
              size="lg"
              mt="24px"
              bg={"highlightPrimary"}
              color="backgroundSecondary"
              _hover={{
                bg: "highlightSecondary",
                color: "backgroundPrimary",
              }}
              onClick={() => register()}
            >
              Create account
            </Button>
          </Center>
          <Stack mt="4" align="center">
            <Text fontSize="xl" align="center">
              Already have an account?
            </Text>
            <Link href={Routes.loginPage}>
              <Text
                fontSize="xl"
                color="highlightSecondary"
                className={css.createAccount}
              >
                Sign in
              </Text>
            </Link>
          </Stack>
        </Box>
      </Center>
    </LandingPageHOC>
  );
};

export default RegisterPage;
