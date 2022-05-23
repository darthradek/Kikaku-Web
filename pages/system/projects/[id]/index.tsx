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
  Icon,
} from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiTrello } from "react-icons/fi";
import ProjectService from "../../../../services/ProjectService";
import ProjectStageService from "../../../../services/ProjectStageService";
import SystemPageHeader from "../../../../ui/components/system/SystemPageHeader";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../../ui/hocs/system-page-hoc/SystemPageHOC";
import { IProject } from "../../../../utils/interfaces/IProject";
import { IProjectStage } from "../../../../utils/interfaces/IProjectStage";

function SelectedProjectPage(props: ISystemPageHOCProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Constants & Variables
  const router = useRouter();
  const { id } = router.query as any;
  const toast = useToast();

  // SECTION: Hooks State - Data
  const [project, setProject] = useState<IProject>();
  const [projectStages, setProjectStages] = useState<IProjectStage[]>();

  // SECTION: Hooks Effect - Data
  useEffect(() => {
    getProjectById(id);
    getAllProjectStagesForProject(id);
  }, [router]);
  console.log(id);

  // SECTION: Services
  const projectService = new ProjectService();
  const projectStageService = new ProjectStageService();

  // SECTION: Services calls
  async function getProjectById(id: string) {
    projectService.getProjectById(id).then((response: IProject) => {
      setProject(response);
    });
  }

  async function getAllProjectStagesForProject(id: string) {
    projectStageService
      .getAllProjectStagesForProject(id)
      .then((response: IProjectStage[]) => {
        setProjectStages(response);
      });
  }
  console.log(projectStages);
  // SECTION: UI Constants & Variables
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SECTION: Hooks State - UI
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [projectObjective, setProjectObjective] = useState<string>("");

  return (
    <SystemPageHOC systemPageProps={props.systemPageProps}>
      <Box mb="6" pb="2">
        <Flex justifyContent="space-between" align="center">
          <Flex align="center">
            <Icon mr="4" fontSize="35" color="highlightPrimary" as={FiTrello} />
            <Text color="backgroundPrimary" fontSize={"4xl"} fontWeight="600">
              Selected Project: {"" + project?.name}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box>
        {projectStages ? (
          <Flex gap="4">
            {projectStages?.map((projectStage: IProjectStage, index) => {
              return (
                <Box key={index}>
                  <Box>{projectStage.title}</Box>
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
    </SystemPageHOC>
  );
}

export const getServerSideProps: GetServerSideProps = systemPageServerSideProps;

export default SelectedProjectPage;
