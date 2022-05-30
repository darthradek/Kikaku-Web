import { SmallCloseIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  Flex,
  FormControl,
  Text,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
  NextPageContext,
} from "next";
import { useEffect, useState } from "react";
import AuthService from "../../../services/AuthService";
import SystemPageHeader from "../../../ui/components/system/SystemPageHeader";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../ui/hocs/system-page-hoc/SystemPageHOC";

function AccountPage(
  props: ISystemPageHOCProps,
  ctx: GetServerSidePropsContext
) {
  const loggedInUser = props.systemPageProps.loggedInUser;
  const authToken = props.systemPageProps.token;

  // SECTION: Constants & Variables

  // SECTION: Hooks State - Data
  const [dataState, setDataState] = useState();

  // SECTION: Hooks Effect - Data
  useEffect(() => {}, []);

  // SECTION: Services
  const authService = new AuthService();

  // SECTION: Services calls
  async function fetchData() {
    document.cookie = "token" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  // SECTION: UI Constants & Variables

  // SECTION: Hooks State - UI
  const [uiState, setUiState] = useState();

  // SECTION: Hooks Effect - UI
  useEffect(() => {}, [uiState]);

  return (
    <SystemPageHOC systemPageProps={props.systemPageProps}>
      <SystemPageHeader headingText="Account Settings" />
      <Flex align={"center"} justify={"center"}>
        <Stack
          bg="white"
          spacing={4}
          w={"full"}
          maxW={"md"}
          rounded={"md"}
          boxShadow={"lg"}
          p={6}
          mt="4rem"
        >
          <Flex
            fontSize="0.3rem"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading lineHeight={1.1} fontSize="2rem">
              User Profile
            </Heading>
            <Flex fontWeight="bold" fontSize="0.8rem">
              <Text color="highlightSecondary" mr="0.5rem">
                Created at:
              </Text>
              {dayjs(loggedInUser.createdAt).format("M/D/YYYY")}
            </Flex>
          </Flex>
          <FormControl id="userName">
            <Center mb="0.5rem" mt="1rem">
              <Avatar
                bg="backgroundSecondary"
                color="highlightPrimary"
                name={loggedInUser.username[0]}
                size={"2xl"}
              />
            </Center>
          </FormControl>
          <FormControl id="userName">
            <FormLabel>Username</FormLabel>
            <Input
              borderColor="backgroundSecondary"
              size="sm"
              _hover={{ borderColor: "highlightSecondary" }}
              placeholder="UserName"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              borderColor="backgroundSecondary"
              size="sm"
              _hover={{ borderColor: "highlightSecondary" }}
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"backgroundPrimary"}
              color={"backgroundSecondary"}
              w="full"
              _hover={{
                bg: "red",
                color: "backgroundPrimary",
              }}
              onClick={() => fetchData()}
            >
              Log out
            </Button>
            <Button
              bg={"backgroundSecondary"}
              color={"highlightPrimary"}
              w="full"
              _hover={{
                bg: "highlightPrimary",
                color: "backgroundSecondary",
              }}
            >
              Update
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </SystemPageHOC>
  );
}

export const getServerSideProps: GetServerSideProps = systemPageServerSideProps;

export default AccountPage;
