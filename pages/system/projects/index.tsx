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
import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { FiPlus, FiTrello } from "react-icons/fi";
import SystemPageHeader from "../../../ui/components/system/SystemPageHeader";
import TeamEntityCard from "../../../ui/components/system/TeamEntityCard";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../ui/hocs/system-page-hoc/SystemPageHOC";
import css from "./index.module.scss";

function ProjectsPage(props: ISystemPageHOCProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Constants & Variables
  const toast = useToast();

  // SECTION: Hooks State - Data
  const [projects, setProjects] = useState();

  // SECTION: UI Constants & Variables
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SECTION: Hooks State - UI
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");

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
          <Flex>
            <TeamEntityCard />
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
                  setProjectDescription(newValue.target.value)
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
              // onClick={() => createTeam()}
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
