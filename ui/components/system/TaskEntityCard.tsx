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
  Icon,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUp,
  FiArrowUpCircle,
  FiClock,
  FiPlus,
  FiTrash,
  FiUsers,
} from "react-icons/fi";
import { ITask } from "../../../utils/interfaces/ITask";
import { IUser } from "../../../utils/interfaces/IUser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  task?: ITask;
  content?: string;
  assigned_users?: IUser[];
  onClose?: Function;
  onCreateTask?: Function;
  onTaskDelete?: Function;
  setTaskTitle?: Function;
  setTaskContent?: Function;
  setTaskDeadline?: Function;
  newTaskDeadline?: Date;
}

function TaskEntityCard(props: IProps) {
  // SECTION: Props
  const {
    task,
    content,
    assigned_users,
    onCreateTask,
    onClose,
    onTaskDelete,
    setTaskTitle,
    setTaskContent,
    setTaskDeadline,
    newTaskDeadline,
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
              <FormControl pb="12px" isRequired>
                <FormLabel fontSize="sm">Task Content</FormLabel>
                <Button
                  border="1px solid"
                  borderColor="grey"
                  w="100%"
                  bg="white"
                >
                  {setTaskDeadline && (
                    <DatePicker
                      selected={newTaskDeadline}
                      onChange={(date: Date) => setTaskDeadline(date)}
                    />
                  )}
                </Button>
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
              mb="4"
              direction={"column"}
              align="left"
              w={"full"}
              justify={"center"}
            >
              <Text fontSize={"xl"} fontWeight={800}>
                {task?.title}
              </Text>
              <List spacing="1">
                <ListItem fontWeight="bold" fontSize="0.9rem">
                  <ListIcon as={FiArrowUpCircle} color="highlightPrimary" />
                  {task?.status === 1 ? "Kickstarted" : "Finished"}
                </ListItem>
                <ListItem fontWeight="bold" fontSize="0.9rem">
                  <Flex alignItems="center">
                    <ListIcon as={FiClock} color="highlightPrimary" />
                    {dayjs(task?.created_at).format("M/D/YYYY h:mm A")}
                    <Icon
                      mr="1"
                      ml="1"
                      size={"sm"}
                      color="highlightSecondary"
                      as={FiArrowRight}
                    />

                    {dayjs(task?.deadline).format("M/D/YYYY h:mm A")}
                  </Flex>
                </ListItem>
              </List>
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
            {onTaskDelete && (
              <Button
                onClick={() => onTaskDelete(task?._id)}
                flex={1}
                bg="backgroundPrimary"
                fontSize={"sm"}
              >
                Archivize Task
              </Button>
            )}
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
