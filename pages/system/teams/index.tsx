import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import type { GetServerSideProps, NextPage } from "next";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../ui/hocs/system-page-hoc/SystemPageHOC";
import css from "./index.module.scss";

function TeamsPage(props: ISystemPageHOCProps) {
  return (
    <SystemPageHOC systemPageProps={props.systemPageProps}>
      <Box>
        <Flex>
          <Box
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Box mt="2" pt="1" pl="1">
              <Stack direction={"row"} align={"center"} justify={"center"}>
                <Text fontSize={"3xl"} fontWeight={800}>
                  $
                </Text>
                <Text color={"gray.500"}>/month</Text>
              </Stack>
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Flex>
                  <Text
                    fontSize={"sm"}
                    fontWeight={500}
                    bg={useColorModeValue("green.50", "green.900")}
                    p={2}
                    px={3}
                    color={"green.500"}
                    rounded={"full"}
                  >
                    Andrzej
                  </Text>
                  <Text
                    fontSize={"sm"}
                    fontWeight={500}
                    bg={useColorModeValue("green.50", "green.900")}
                    p={2}
                    px={3}
                    color={"green.500"}
                    rounded={"full"}
                  >
                    Kalachan
                  </Text>
                  <Text
                    fontSize={"sm"}
                    fontWeight={500}
                    bg={useColorModeValue("green.50", "green.900")}
                    p={2}
                    px={3}
                    color={"green.500"}
                    rounded={"full"}
                  >
                    Cipek
                  </Text>
                </Flex>
              </Stack>
            </Box>
            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  All features
                </ListItem>
              </List>

              <Button
                mt={10}
                w={"full"}
                bg={"green.400"}
                color={"white"}
                rounded={"xl"}
                boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                Start your trial
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </SystemPageHOC>
  );
}

export const getServerSideProps: GetServerSideProps = systemPageServerSideProps;

export default TeamsPage;
