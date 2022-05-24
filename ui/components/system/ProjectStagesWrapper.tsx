import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import TaskEntityCard from "./TaskEntityCard";

interface IProps {
  projectStageTitle?: string;
  children?: any;
  createProjectStage?: Function;
  cancelCreation?: Function;
  setNewProjectStageTitle?: Function;
  setTaskTitle?: Function;
  setTaskContent?: Function;
}

function ProjectStageWrapper(props: IProps) {
  // SECTION: Props
  const {
    projectStageTitle,
    children,
    createProjectStage,
    cancelCreation,
    setNewProjectStageTitle,
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
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState<boolean>(false);

  // SECTION: Hooks Effect - UI
  useEffect(() => {}, []);

  // SECTION: UI Events
  async function createNewTask() {}

  // SECTION: Render
  return (
    <Flex
      w={"full"}
      maxW={"450px"}
      minHeight="32vh"
      rounded="md"
      direction="column"
      justifyContent="space-between"
      bg="backgroundQuaternary"
      p="4"
    >
      {createProjectStage ? (
        <Flex direction="column" justifyContent="space-between">
          <Flex justify={"space-between"} direction="column" align="flex-start">
            <Text
              mb="4"
              as={"span"}
              position={"relative"}
              color="highlightPrimary"
              fontSize="xl"
              fontWeight={600}
            >
              New Project Stage
            </Text>
          </Flex>
          {setNewProjectStageTitle && (
            <FormControl mb="18px">
              <FormLabel
                color="backgroundPrimary"
                htmlFor="password"
                fontSize="sm"
              >
                Project Stage Title
              </FormLabel>
              <Input
                color="backgroundPrimary"
                borderColor="backgroundPrimary"
                _hover={{ borderColor: "highlightPrimary" }}
                onChange={(newValue) =>
                  setNewProjectStageTitle(newValue.target.value)
                }
              />
            </FormControl>
          )}
          <Stack direction={"row"} spacing={4}>
            {cancelCreation && (
              <Button
                onClick={() => {
                  cancelCreation();
                }}
                flex={1}
                bg="backgroundPrimary"
                fontSize={"sm"}
              >
                Cancel
              </Button>
            )}
            <Button
              flex={1}
              fontSize={"sm"}
              bg="highlightPrimary"
              color={"backgroundSecondary"}
              _hover={{
                bg: "highlightSecondary",
                color: "backgroundPrimary",
              }}
              onClick={() => createProjectStage()}
            >
              Create
            </Button>
          </Stack>
        </Flex>
      ) : (
        <Box>
          <Flex justify={"space-between"} align="center">
            <Text
              as={"span"}
              position={"relative"}
              color="highlightPrimary"
              fontSize="xl"
              fontWeight={600}
            >
              {projectStageTitle}
            </Text>
            <Button
              fontWeight={600}
              color={"backgroundPrimary"}
              bg={"highlightSecondary"}
              size="md"
              _hover={{
                color: "backgroundPrimary",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              onClick={() => {
                setIsCreateTaskOpen(true);
              }}
            >
              <Icon
                fontSize="2xl"
                mr="2"
                size={"md"}
                color="backgroundPrimary"
                as={FiPlus}
              />
              Add Task
            </Button>
          </Flex>
        </Box>
      )}
      <Box>
        {children?.length !== 0 ? (
          <Box>
            {isCreateTaskOpen && (
              <TaskEntityCard
                onClose={() => {
                  setIsCreateTaskOpen(false);
                }}
                onCreateTask={() => createNewTask()}
              />
            )}
            <Box>{children}</Box>
          </Box>
        ) : (
          <Box>
            {isCreateTaskOpen ? (
              <TaskEntityCard
                onClose={() => {
                  setIsCreateTaskOpen(false);
                }}
              />
            ) : (
              <Flex align="center" mb="16">
                <Image w="12rem" src="/illus/task-illu.svg" />
                <Text
                  ml="4"
                  color="backgroundPrimary"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  No tasks found...
                </Text>
              </Flex>
            )}
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default ProjectStageWrapper;
