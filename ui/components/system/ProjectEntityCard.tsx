import {
  Box,
  Button,
  HStack,
  Text,
  List,
  ListIcon,
  ListItem,
  useColorModeValue,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import * as React from "react";
import { useEffect, useState } from "react";
import { FiCalendar, FiPlus, FiStar, FiTrello, FiUsers } from "react-icons/fi";
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
    <Box
      maxW={"280px"}
      w={"full"}
      bg={"white"}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Box mt="2" pr="4" pl="4">
        <Stack mb={2} direction={"row"} align="center" justify={"left"}>
          <Text fontSize={"3xl"} fontWeight={800}>
            {project.name}
          </Text>
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
      <Box bg={"backgroundPrimary"} px={6} pt="4" pb="5">
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FiStar} color="highlightPrimary" />
            {project.created_by.email}
          </ListItem>
          {/* <ListItem>
            <ListIcon as={FiUsers} color="highlightPrimary" />
            team name
          </ListItem> */}
          <ListItem>
            <Flex align={"center"}>
              <ListIcon as={FiCalendar} color="highlightPrimary" />
              {project.deadline}
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
    </Box>
  );
}

export default ProjectEntityCard;
