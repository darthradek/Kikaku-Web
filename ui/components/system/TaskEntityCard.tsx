import {
  Box,
  Flex,
  Text,
  HStack,
  Stack,
  IconButton,
  List,
  ListItem,
  ListIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { FiPlus, FiTrash, FiUsers } from "react-icons/fi";
import { IUser } from "../../../utils/interfaces/IUser";

interface IProps {
  title?: string;
  content?: string;
  assigned_users?: IUser[];
  onClose?: Function;
  onCreateTask?: Function;
  setTaskTitle?: Function;
  setTaskContent?: Function;
}

function TaskEntityCard(props: IProps) {
  // SECTION: Props
  const {
    title,
    content,
    assigned_users,
    onCreateTask,
    onClose,
    setTaskTitle,
    setTaskContent,
  } = props;

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
    <Box mt="4" w={"full"}>
      {onCreateTask ? (
        <Flex
          w={"full"}
          bg={"white"}
          boxShadow={"2xl"}
          rounded={"md"}
          justifyContent="space-between"
          flexDirection="column"
        >
          <Box mt="2" pr="4" pl="4">
            <Stack
              mb="2"
              direction={"column"}
              align="left"
              w={"full"}
              justify={"center"}
            >
              <Text fontSize={"xl"} fontWeight={800}>
                New Task
              </Text>
              <FormControl pb="12px" isRequired>
                <FormLabel fontSize="sm">Task title</FormLabel>
                <Input
                  placeholder="Enter task title"
                  borderColor="backgroundSecondary"
                  size="sm"
                  _hover={{ borderColor: "highlightSecondary" }}
                  onChange={(newValue) => setTaskTitle?.(newValue.target.value)}
                />
                <FormHelperText>
                  This is general title of your task
                </FormHelperText>
              </FormControl>
              <FormControl pb="12px" isRequired>
                <FormLabel fontSize="sm">Task Content</FormLabel>
                <Textarea
                  h="7rem"
                  placeholder="Enter task content..."
                  borderColor="backgroundSecondary"
                  size="sm"
                  _hover={{ borderColor: "highlightSecondary" }}
                  onChange={(newValue) =>
                    setTaskContent?.(newValue.target.value)
                  }
                />
                <FormHelperText>
                  This is general title of your task
                </FormHelperText>
              </FormControl>
            </Stack>
          </Box>
          <Stack pl="4" pr="4" pb="4" direction={"row"} spacing={4}>
            {onClose && (
              <Button
                flex={1}
                onClick={() => {
                  onClose?.();
                }}
                bg="backgroundPrimary"
                fontSize={"sm"}
              >
                Cancel Creation
              </Button>
            )}
            <Button
              flex={1}
              fontSize={"sm"}
              borderColor="backgroundQuaternary"
              color={"backgroundSecondary"}
              onClick={() => onCreateTask()}
              bg="highlightPrimary"
              _hover={{
                bg: "highlightSecondary",
                color: "backgroundPrimary",
              }}
            >
              Create Task
            </Button>
          </Stack>
        </Flex>
      ) : (
        <Flex
          w={"full"}
          bg={"white"}
          boxShadow={"2xl"}
          rounded={"md"}
          justifyContent="space-between"
          flexDirection="column"
        >
          <Box mt="2" pr="4" pl="4">
            <Stack
              mb="2"
              direction={"column"}
              align="left"
              w={"full"}
              justify={"center"}
            >
              <Text fontSize={"xl"} fontWeight={800}>
                {title}
              </Text>
              {/* <List spacing={3}>
            <ListItem>
              <ListIcon as={FiPlus} color="highlightPrimary" />
              {created_by}
            </ListItem>
            <ListItem>
              <ListIcon as={FiUsers} color="highlightPrimary" />
              49 users
            </ListItem>
          </List> */}
            </Stack>
            {assigned_users && (
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
            <Text>{content}</Text>
          </Box>
          <Stack p="4" mt="4" direction={"row"} spacing={4}>
            <Button flex={1} bg="backgroundPrimary" fontSize={"sm"}>
              Archivize Task
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              bg="none"
              border="2px"
              borderStyle="dashed"
              borderColor="backgroundQuaternary"
              color={"backgroundSecondary"}
              _hover={{
                bg: "highlightPrimary",
                color: "backgroundSecondary",
              }}
            >
              Edit Task
            </Button>
          </Stack>
        </Flex>
      )}
    </Box>
  );
}

export default TaskEntityCard;
