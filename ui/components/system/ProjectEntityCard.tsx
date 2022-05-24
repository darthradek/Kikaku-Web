import {
  Box,
  Button,
  HStack,
  Text,
  List,
  ListIcon,
  ListItem,
  Stack,
  Flex,
} from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  FiArrowUpCircle,
  FiCalendar,
  FiPieChart,
  FiStar,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import { IProject } from "../../../utils/interfaces/IProject";
import { ITeam } from "../../../utils/interfaces/ITeam";

interface IProps {
  project: IProject;
  team?: ITeam;
}

function ProjectEntityCard(props: IProps) {
  // SECTION: Props
  const { project, team } = props;

  // SECTION: Constants & Variables

  // SECTION: Hooks State - Data
  const [dataState, setDataState] = useState();

  // SECTION: Hooks Effect - Data
  useEffect(() => {}, []);

  // SECTION: Services

  // SECTION: Services calls
  async function fetchData() {}

  // SECTION: UI Constants & Variables

  // SECTION: Hooks State - UI
  const [uiState, setUiState] = useState();

  // SECTION: Hooks Effect - UI
  useEffect(() => {}, [uiState]);

  // SECTION: UI Events
  function uiEvent() {}

  // SECTION: Render
  return (
    <Box>
      {project && (
        <Box>
          <Flex
            rounded={"md"}
            maxW={"280px"}
            w={"full"}
            flexDirection="column"
            justifyContent="space-between"
            height={"25vh"}
            bg={"white"}
            boxShadow={"2xl"}
          >
            <Box justifyContent="" mt="2" pr="4" pl="4">
              <Stack mb="4" direction={"column"} align="left">
                <Text mt="2" fontSize={"2xl"} fontWeight={800}>
                  {project?.name}
                </Text>
                <Text fontSize={"sm"}>{project?.description}</Text>
              </Stack>
              {team && (
                <HStack
                  textAlign={"center"}
                  justifyContent={"left"}
                  spacing={1}
                  align={"center"}
                  mt="2"
                  pl="1"
                  mb="4"
                >
                  <Text
                    fontSize={"sm"}
                    fontWeight={400}
                    bg="backgroundSecondary"
                    p={1}
                    px={3}
                    color={"backgroundPrimary"}
                    rounded={"xl"}
                  >
                    Andrzej
                  </Text>
                  <Text
                    fontSize={"sm"}
                    fontWeight={400}
                    bg="backgroundSecondary"
                    p={1}
                    px={3}
                    color={"backgroundPrimary"}
                    rounded={"xl"}
                  >
                    Piotr
                  </Text>
                  <Text
                    fontSize={"sm"}
                    fontWeight={400}
                    bg="backgroundSecondary"
                    p={1}
                    px={3}
                    color={"backgroundPrimary"}
                    rounded={"xl"}
                  >
                    Misio
                  </Text>
                </HStack>
              )}
            </Box>
            <Box rounded={"md"} bg={"backgroundPrimary"} px={6} pt="4" pb="5">
              <List spacing={3}>
                <ListItem>
                  <Flex align={"center"}>
                    <ListIcon as={FiTarget} color="highlightPrimary" />
                    {project?.objective}
                  </Flex>
                  <Flex align={"center"}>
                    <ListIcon as={FiArrowUpCircle} color="highlightPrimary" />
                    Kickstared
                  </Flex>
                  <Flex align={"center"}>
                    <ListIcon as={FiUsers} color="highlightPrimary" />1
                  </Flex>
                  <Flex align={"center"}>
                    <ListIcon as={FiCalendar} color="highlightPrimary" />
                    {project?.deadline}
                  </Flex>
                </ListItem>
              </List>
              <Button
                mt={6}
                w={"full"}
                bg={"highlightSecondary"}
                color={"backgroundPrimary"}
                rounded={"md"}
                boxShadow={"white"}
                _hover={{
                  bg: "highlightPrimary",
                  color: "backgroundSecondary",
                }}
              >
                Manage Project
              </Button>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default ProjectEntityCard;
