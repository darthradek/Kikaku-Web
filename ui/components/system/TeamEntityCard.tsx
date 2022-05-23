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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import * as React from "react";
import { useEffect, useState } from "react";
import { FiPlus, FiStar, FiTrello, FiUsers } from "react-icons/fi";

interface IProps {}

function TeamEntityCard(props: IProps) {
  // SECTION: Props
  const {} = props;

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
        <Stack direction={"row"} align="center" justify={"left"}>
          <Text fontSize={"3xl"} fontWeight={800}>
            The Best Team
          </Text>
        </Stack>
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
      </Box>
      <Box bg={"backgroundPrimary"} px={6} pt="4" pb="5">
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FiStar} color="highlightPrimary" />
            Andrew Lmao
          </ListItem>

          <ListItem>
            <ListIcon as={FiUsers} color="highlightPrimary" />
            22 users
          </ListItem>
          <ListItem>
            <ListIcon as={FiTrello} color="highlightPrimary" />
            54 projects
          </ListItem>
          <ListItem>
            <ListIcon as={FiPlus} color="highlightPrimary" />
            Andrew Lmao
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
          Activate Team
        </Button>
      </Box>
    </Box>
  );
}

export default TeamEntityCard;
