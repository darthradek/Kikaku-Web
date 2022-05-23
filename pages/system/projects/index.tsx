import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  useToast,
  Text,
  ModalFooter,
  ModalContent,
  Modal,
  ModalBody,
  FormControl,
  Input,
  FormLabel,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiTrello } from "react-icons/fi";
import Routes from "../../../global/Routes";
import ProjectService from "../../../services/ProjectService";
import ProjectEntityCard from "../../../ui/components/system/ProjectEntityCard";
import SystemPageHeader from "../../../ui/components/system/SystemPageHeader";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../ui/hocs/system-page-hoc/SystemPageHOC";
import { ICreateProjectDTO } from "../../../utils/dtos/project/ICreateProjectDTO";
import { IProject } from "../../../utils/interfaces/IProject";

function ProjectsPage(props: ISystemPageHOCProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Constants & Variables
  const router = useRouter();
  const toast = useToast();

  // SECTION: Hooks State - Data
  const [projects, setProjects] = useState<IProject[]>();

  // SECTION: Hooks Effect - Data
  useEffect(() => {
    getAllProjectsCreatedByUser();
  }, []);

  // SECTION: Services
  const projectService = new ProjectService();

  // SECTION: Services calls
  async function createNewProject() {
    const createProjectDTO: ICreateProjectDTO = {
      name: projectName,
      objective: projectObjective,
      description: projectDescription,
      deadline: "2022-05-22T23:51:52.337Z",
      created_by: "626a6ac4ab353804343bfcb2",
    };
    projectService.createProject(createProjectDTO).then((response: any) => {
      console.log(response);
      toast({
        title: "Project created successfully!",
        position: "top-left",
        description:
          "Feel free to jump into project and start planning your process",
        status: "success",
        duration: 1350,
        isClosable: true,
      });
      onClose();
    });
  }

  async function getAllProjectsCreatedByUser() {
    projectService
      .getAllProjectsCreatedByUser("626a6ac4ab353804343bfcb2")
      .then((response: IProject[]) => {
        setProjects(response);
      });
  }
  console.log(projects, "state");
  // SECTION: UI Constants & Variables
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SECTION: Hooks State - UI
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [projectObjective, setProjectObjective] = useState<string>("");

  // SECTION: UI Events
  function onProjectClick(project: IProject) {
    router.push({
      pathname: Routes.systemProjectsPage + "/[id]",
      query: { id: project._id },
    });
  }

  return (
    <SystemPageHOC systemPageProps={props.systemPageProps}>
      <SystemPageHeader
        headingText="Projects"
        headingIcon={FiTrello}
        createButtonLabel="Project"
        onCreateModalOpen={onOpen}
      />
      <Box>
        {projects ? (
          <Flex gap="4">
            {projects?.map((project: IProject, index) => {
              return (
                <Box onClick={() => onProjectClick(project)} key={index}>
                  <ProjectEntityCard project={project} />
                </Box>
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
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl pb="12px">
              <FormLabel htmlFor="email" fontSize="md">
                Project Name
              </FormLabel>
              <Input
                placeholder="Sample Project"
                borderColor="grey"
                _hover={{ borderColor: "blue" }}
                onChange={(newValue) => setProjectName(newValue.target.value)}
              />
            </FormControl>
            <FormControl pb="12px">
              <FormLabel htmlFor="email" fontSize="md">
                Project Description
              </FormLabel>
              <Input
                placeholder="This is important project, focusing on...."
                borderColor="grey"
                _hover={{ borderColor: "blue" }}
                onChange={(newValue) =>
                  setProjectDescription(newValue.target.value)
                }
              />
            </FormControl>
            <FormControl pb="12px">
              <FormLabel htmlFor="email" fontSize="md">
                Main Objective
              </FormLabel>
              <Input
                placeholder="Going to Alabama"
                borderColor="grey"
                _hover={{ borderColor: "blue" }}
                onChange={(newValue) =>
                  setProjectObjective(newValue.target.value)
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              color={"backgroundPrimary"}
              bg={"backgroundSecondary"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              variant="ghost"
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              color={"backgroundPrimary"}
              bg={"highlightSecondary"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              variant="ghost"
              onClick={() => createNewProject()}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SystemPageHOC>
  );
}

export const getServerSideProps: GetServerSideProps = systemPageServerSideProps;

export default ProjectsPage;
