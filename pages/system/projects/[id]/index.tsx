import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  useToast,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiPlus, FiTrello } from "react-icons/fi";
import Routes from "../../../../global/Routes";
import ProjectService from "../../../../services/ProjectService";
import ProjectStageService from "../../../../services/ProjectStageService";
import TaskService from "../../../../services/TaskService";
import ProjectStagesWrapper from "../../../../ui/components/system/ProjectStagesWrapper";
import ProjectStageWrapper from "../../../../ui/components/system/ProjectStagesWrapper";
import SystemPageHeader from "../../../../ui/components/system/SystemPageHeader";
import TaskEntityCard from "../../../../ui/components/system/TaskEntityCard";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../../ui/hocs/system-page-hoc/SystemPageHOC";
import { ICreateProjectStageDTO } from "../../../../utils/dtos/project-stage/ICreateProjectStageDTO";
import { IUpdateProjectStageDTO } from "../../../../utils/dtos/project-stage/IUpdateProjectStageDTO";
import { ICreateTaskDTO } from "../../../../utils/dtos/task/ICreateTaskDTO";
import { IProject } from "../../../../utils/interfaces/IProject";
import { IProjectStage } from "../../../../utils/interfaces/IProjectStage";
import { ITask } from "../../../../utils/interfaces/ITask";

function SelectedProjectPage(props: ISystemPageHOCProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Constants & Variables
  const loggedInUser = props.systemPageProps.loggedInUser;
  const authToken = props.systemPageProps.token;
  const router = useRouter();
  const { id } = router.query as any;
  const toast = useToast();

  // SECTION: Hooks State - Data
  const [project, setProject] = useState<IProject>();
  const [projectStages, setProjectStages] = useState<IProjectStage[]>([]);

  // SECTION: Hooks Effect - Data
  useEffect(() => {
    getProjectById(id);
    getAllProjectStagesForProject(id);
  }, [router]);

  // SECTION: Services
  const projectService = new ProjectService();
  const projectStageService = new ProjectStageService();
  const taskService = new TaskService();

  // SECTION: Services calls
  async function getProjectById(id: string) {
    projectService.getProjectById(id, authToken).then((response: IProject) => {
      setProject(response);
    });
  }

  async function getAllProjectStagesForProject(id: string) {
    projectStageService
      .getAllProjectStagesForProject(id, authToken)
      .then((response: IProjectStage[]) => {
        setProjectStages(response);
      });
  }

  async function createNewProjectStage() {
    const createProjectStageDTO: ICreateProjectStageDTO = {
      title: newProjectStageTitle,
      project_id: id,
    };

    projectStageService
      .createProjectStage(createProjectStageDTO, authToken)
      .then((response: IProjectStage) => {
        setIsCreateProjectStageOpen(false);
        toast({
          title: "Project Stage created successfully!",
          position: "top-left",
          description: "Feel free to assign some tasks to it",
          status: "success",
          duration: 1350,
          isClosable: true,
        });
        const projectStageResponse: IProjectStage = response;
        const tempProjectStages: IProjectStage[] = projectStages?.filter(
          (projectStage) => {
            if (projectStage._id !== projectStageResponse._id) {
              return project;
            }
          }
        );
        tempProjectStages.push(projectStageResponse);
        setProjectStages(tempProjectStages);
      });
  }

  async function updateProjectStage(
    updateProjectStageDTO: IUpdateProjectStageDTO,
    projectStageId?: string
  ) {
    projectStageService
      .updateProjectStage(updateProjectStageDTO, authToken, projectStageId)
      .then((response: IProjectStage) => {
        getAllProjectStagesForProject(id);
        toast({
          title: "Project Stage: " + response.title + " successfully updated!!",
          position: "top-left",
          description: "Feel free to assign some users to it",
          status: "success",
          duration: 1550,
          isClosable: true,
        });
      });
  }

  async function createNewTask() {
    const createTaskDTO: ICreateTaskDTO = {
      title: newTaskTitle,
      content: newTaskContent,
      status: 1,
      isOptional: false,
      assigned_users: [],
      deadline: "2022-05-24T07:26:43.634+00:00",
      created_by: loggedInUser._id,
    };
    taskService.createTask(createTaskDTO, authToken).then((response: any) => {
      const projectStageToBeUpdated: IProjectStage[] = projectStages.filter(
        (projectStage) => {
          if (projectStage._id === isCreateTaskOpen) {
            return projectStage;
          }
        }
      );

      const updatedProjectStageTasksTemp: string[] = [];

      projectStageToBeUpdated[0].tasks.forEach((task) => {
        updatedProjectStageTasksTemp.push(task._id);
      });

      updatedProjectStageTasksTemp.push(response._id);
      const updateProjectStageDTO: IUpdateProjectStageDTO = {
        title: projectStageToBeUpdated[0].title,
        tasks: updatedProjectStageTasksTemp,
        project_id: project?._id,
      };

      updateProjectStage(updateProjectStageDTO, isCreateTaskOpen);
      setIsCreateTaskOpen("");
      setNewTaskTitle("");
      setNewTaskDeadline("");
    });
  }

  async function deleteProjectStageById(projectStageId: string) {
    projectStageService
      .deleteProjectStageById(projectStageId, authToken)
      .then((response) => {
        toast({
          title:
            "Project Stage: " +
            response?.projectStage.title +
            " deleted successfully",
          position: "top-left",
          status: "success",
          duration: 1550,
          isClosable: true,
        });
        const projectStageResponse: IProjectStage = response.projectStage;
        const tempProjectStages: IProjectStage[] = projectStages?.filter(
          (projectStage) => {
            if (projectStage._id !== projectStageResponse._id) {
              return project;
            }
          }
        );
        setProjectStages(tempProjectStages);
      });
  }

  async function deleteTaskById(taskId: string) {
    taskService.deleteTaskById(taskId, authToken).then((response) => {
      const deletedTask: ITask = response.task;
      toast({
        title: "Task: " + deletedTask.title + " deleted successfully",
        position: "top-left",
        status: "success",
        duration: 1550,
        isClosable: true,
      });
      getAllProjectStagesForProject(id);
    });
  }

  async function deleteProjectById() {
    projectService
      .deleteProjectById(id, authToken)
      .then((response: IProject) => {
        toast({
          title: response?.name + " deleted successfully",
          position: "top-left",
          status: "success",
          duration: 1550,
          isClosable: true,
        });
        router.push(Routes.systemProjectsPage);
      });
  }
  // SECTION: UI Constants & Variables
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SECTION: Hooks State - UI
  const [isCreateProjectStageOpen, setIsCreateProjectStageOpen] =
    useState<boolean>(false);
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState<string>("");
  //LINK: newProjectStage
  const [newProjectStageTitle, setNewProjectStageTitle] = useState<string>("");
  //LINK: newTask
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const [newTaskDeadline, setNewTaskDeadline] = useState<string>("");

  useEffect(() => {
    if (isCreateTaskOpen === "") {
      setNewTaskTitle("");
      setNewTaskContent("");
    }
  }, [isCreateTaskOpen]);

  return (
    <SystemPageHOC systemPageProps={props.systemPageProps}>
      <Box>
        <SystemPageHeader
          headingPrefix={"Project Workspace:"}
          headingText={project?.name}
          createButtonLabel="Add Project Stage"
          deleteButtonLabel="Project"
          editButtonLabel="Project"
          onCreateModalOpen={() => setIsCreateProjectStageOpen(true)}
          onDelete={() => {
            deleteProjectById();
          }}
        />
      </Box>
      <Box>
        {projectStages ? (
          <Flex
            overflowX="auto"
            justifyContent="flex-start"
            width="auto"
            gap="9"
          >
            {isCreateProjectStageOpen && (
              <ProjectStagesWrapper
                setNewProjectStageTitle={(data: string) =>
                  setNewProjectStageTitle(data)
                }
                createProjectStage={createNewProjectStage}
                cancelCreation={() => {
                  setIsCreateProjectStageOpen(false);
                }}
              />
            )}
            {projectStages?.map((projectStage: IProjectStage, index) => {
              return (
                <ProjectStageWrapper
                  key={index}
                  projectStage={projectStage}
                  deleteProjectStage={deleteProjectStageById}
                  setCreateTaskOpen={(data: string) =>
                    setIsCreateTaskOpen(data)
                  }
                >
                  {isCreateTaskOpen === projectStage._id && (
                    <TaskEntityCard
                      onCreateTask={() => createNewTask()}
                      setTaskTitle={(data: string) => setNewTaskTitle(data)}
                      setTaskContent={(data: string) => setNewTaskContent(data)}
                      onClose={() => setIsCreateTaskOpen("")}
                    />
                  )}
                  {projectStage.tasks?.map((task: ITask, index) => {
                    return (
                      <TaskEntityCard
                        task={task}
                        content={task.content}
                        key={index}
                        onTaskDelete={(taskId: string) =>
                          deleteTaskById(taskId)
                        }
                        setTaskTitle={(data: string) => {
                          setNewTaskTitle(data);
                        }}
                      />
                    );
                  })}
                </ProjectStageWrapper>
              );
            })}
          </Flex>
        ) : (
          <Center>
            <Box maxW="32rem">
              <img src="/illus/project-illu.svg" />
              <Center>
                <Heading mb="4" color="backgroundPrimary">
                  Create your first project!
                </Heading>
              </Center>
              <Text fontSize="xl" color="backgroundPrimary" align="center">
                Create your first project to start planning your project
                workflow! 🥳
              </Text>
              <Center>
                <Button
                  mt="6"
                  onClick={onOpen}
                  color={"backgroundPrimary"}
                  bg={"highlightSecondary"}
                  _hover={{
                    color: "backgroundSecondary",
                    bg: "highlightPrimary",
                    boxShadow: "lg",
                  }}
                >
                  Create your first Project
                </Button>
              </Center>
            </Box>
          </Center>
        )}
      </Box>
    </SystemPageHOC>
  );
}

export const getServerSideProps: GetServerSideProps = systemPageServerSideProps;

export default SelectedProjectPage;
