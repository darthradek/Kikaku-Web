import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Image,
  Stack,
  Text,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { IProjectStage } from "../../../utils/interfaces/IProjectStage";
import TaskEntityCard from "./TaskEntityCard";

interface IProps {
  projectStage?: IProjectStage;
  children?: any;
  createProjectStage?: Function;
  setNewProjectStageTitle?: Function;
  cancelCreation?: Function;
  deleteProjectStage?: Function;
  setTaskTitle?: Function;
  setTaskContent?: Function;
}

function ProjectStageWrapper(props: IProps) {
  // SECTION: Props
  const {
    projectStage,
    children,
    setNewProjectStageTitle,
    createProjectStage,
    deleteProjectStage,
    cancelCreation,
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
      minWidth="450px"
      minHeight="82vh"
      rounded="md"
      direction="column"
      justifyContent="space-between"
      bg="backgroundQuaternary"
      p="4"
    >
      <Flex flexDirection="column" alignItems="space-between">
        {createProjectStage ? (
          <Flex direction="column" justifyContent="space-between">
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
                {projectStage?.title}
              </Text>
              <HStack alignItems="center">
                <Button
                  fontWeight={600}
                  color={"backgroundPrimary"}
                  bg={"highlightSecondary"}
                  size="sm"
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
                    size={"sm"}
                    color="backgroundPrimary"
                    as={FiPlus}
                  />
                  Add Task
                </Button>
              </HStack>
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
                <Flex mt="12" align="center">
                  <Image w="8rem" src="/illus/task-illu.svg" />
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
      {!createProjectStage && deleteProjectStage && projectStage && (
        <Flex w="100%" justifyContent="flex-end">
          <Button
            fontWeight="bold"
            color={"backgroundPrimary"}
            bg={"backgroundSecondary"}
            size="sm"
            _hover={{
              color: "backgroundPrimary",
              bg: "red",
              boxShadow: "lg",
            }}
            onClick={() => deleteProjectStage(projectStage._id)}
          >
            <Icon mr="2" size={"sm"} color="backgroundPrimary" as={FiTrash} />
            Delete Project Stage
          </Button>
        </Flex>
      )}
    </Flex>
  );
}

export default ProjectStageWrapper;
