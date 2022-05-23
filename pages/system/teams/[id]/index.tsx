import type { GetServerSideProps, NextPage } from "next";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../../ui/hocs/system-page-hoc/SystemPageHOC";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Button,
  Center,
  Flex,
  Link,
  FormHelperText,
  Stack,
} from "@chakra-ui/react";

function SelectedTeamPage(props: ISystemPageHOCProps) {
  return (
    <SystemPageHOC systemPageProps={props.systemPageProps}>
      <Flex align={"center"} justify={"center"}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg="backgroundPrimary"
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
        >
          <Flex>
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
              Create New Team
            </Heading>
          </Flex>
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: "gray.500" }}
              type="password"
            />
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
            >
              Cancel
            </Button>
            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </SystemPageHOC>
  );
}

export const getServerSideProps: GetServerSideProps = systemPageServerSideProps;

export default SelectedTeamPage;
