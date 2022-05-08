import type { NextPage } from "next";
import css from "./index.module.scss";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  FormHelperText,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";

const RegisterPage: NextPage = () => {
  return (
    <div>
      <Center h="100vh" background="#E1E8EB" flexDirection="column">
        <Center>
          <Heading mb={4}>Create your account</Heading>
        </Center>
        <Box w={[300, 400, 600]} p="12px" border="0px" borderRadius="10px">
          <FormControl pb="12px" isRequired>
            <FormLabel htmlFor="username" fontSize="xl">
              Username
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter username"
              borderColor="grey"
              _hover={{ borderColor: "blue" }}
            />
          </FormControl>
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
              id="password"
              type="password"
              placeholder="Enter password again"
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
              Create account
            </Button>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default RegisterPage;
