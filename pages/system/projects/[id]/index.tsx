import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  useToast,
  Text,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiPlus, FiTrello } from "react-icons/fi";
import Routes from "../../../../global/Routes";
import ProjectService from "../../../../services/ProjectService";
import ProjectStageService from "../../../../services/ProjectStageService";
import ProjectStagesWrapper from "../../../../ui/components/system/ProjectStagesWrapper";
import ProjectStageWrapper from "../../../../ui/components/system/ProjectStagesWrapper";
import SystemPageHeader from "../../../../ui/components/system/SystemPageHeader";
import TaskEntityCard from "../../../../ui/components/system/TaskEntityCard";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../../ui/hocs/system-page-hoc/SystemPageHOC";
import { ICreateProjectStageDTO } from "../../../../utils/dtos/project-stage/ICreateProjectStageDTO";
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

  async function createNewTask() {
    console.log("cipa");
  }

  async function deleteProjectStageById(projectStageId: string) {
    projectStageService
      .deleteProjectStageById(projectStageId, authToken)
      .then((response) => {
        toast({
          title: response?.projectStage.title + " deleted successfully",
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

  async function deleteProjectById() {
    projectService
      .deleteProjectById(id, authToken)
      .then((response: IProject) => {
        console.log("respo", response);
        toast({
          title: response?.name + " Deleted successfully",
          position: "top-left",
          status: "success",
          duration: 1350,
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
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState<boolean>(false);
  //LINK: newProjectStage
  const [newProjectStageTitle, setNewProjectStageTitle] = useState<string>("");
  //LINK: newTask
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const [newTaskDeadline, setNewTaskDeadline] = useState<string>("");

  return (
    <SystemPageHOC systemPageProps={props.systemPageProps}>
      <Box position="fixed" w="97.5%">
        <SystemPageHeader
          headingText={project?.name}
          headingIcon={FiTrello}
          createButtonLabel="Project Stage"
          onCreateModalOpen={() => setIsCreateProjectStageOpen(true)}
          onDelete={() => {
            deleteProjectById();
          }}
        />
      </Box>
      <Box mt="5rem">
        {projectStages ? (
          <Flex
            overflowY="hidden"
            justifyContent="flex-start"
            width="auto"
            gap="9"
          >
            {isCreateProjectStageOpen && (
              <ProjectStagesWrapper
                createProjectStage={createNewProjectStage}
                cancelCreation={() => {
                  setIsCreateProjectStageOpen(false);
                }}
                setNewProjectStageTitle={(data: string) =>
                  setNewProjectStageTitle(data)
                }
              />
            )}
            {projectStages?.map((projectStage: IProjectStage, index) => {
              return (
                <ProjectStageWrapper
                  key={index}
                  projectStage={projectStage}
                  deleteProjectStage={deleteProjectStageById}
                >
                  {projectStage.tasks?.map((task: ITask, index) => {
                    return (
                      <TaskEntityCard
                        title={task.title}
                        content={task.content}
                        key={index}
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
