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

const LoginPage: NextPage = () => {
  return (
    <div>
      <Center h="100vh" background="#E1E8EB" flexDirection="column">
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
            />
          </FormControl>
          <Center>
            <Button
              w={[300, 400, 600]}
              size="lg"
              colorScheme="#e1e8eb"
              mt="24px"
              bg={"#ffc107"}
            >
              Log In
            </Button>
          </Center>
        </Box>
        <Text fontSize="xl" align="center">
          Dont have an account yet?
        </Text>
        <Link href="/register">
          <Text fontSize="xl" color="blue" className={css.createAccount}>
            Create one
          </Text>
        </Link>
      </Center>
    </div>
  );
};

export default LoginPage;
