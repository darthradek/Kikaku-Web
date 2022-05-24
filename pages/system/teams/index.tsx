import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Center,
  Heading,
} from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import SystemPageHOC, {
  ISystemPageHOCProps,
  systemPageServerSideProps,
} from "../../../ui/hocs/system-page-hoc/SystemPageHOC";
import { FiUsers } from "react-icons/fi";
import SystemPageHeader from "../../../ui/components/system/SystemPageHeader";
import TeamEntityCard from "../../../ui/components/system/TeamEntityCard";
import { useEffect, useState } from "react";
import { ICreateTeamDTO } from "../../../utils/dtos/team/ICreateTeamDTO";
import TeamService from "../../../services/TeamService";
import { ITeam } from "../../../utils/interfaces/ITeam";

function TeamsPage(props: ISystemPageHOCProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Constants & Variables
  const toast = useToast();

  // SECTION: Hooks State - Data
  const [teams, setTeams] = useState<ITeam[]>([]);

  // SECTION: Hooks Effect - Data
  useEffect(() => {}, []);

  // SECTION: Services
  const teamService = new TeamService();

  // SECTION: Services calls
  async function createTeam() {
    const createTeamDTO: ICreateTeamDTO = {
      name: teamName,
      description: teamDescription,
      members: ["626a68df3376728dedcf5d16"],
      leader: "626a6ac4ab353804343bfcb2",
      created_by: "626a6ac4ab353804343bfcb2",
    };
    teamService.createTeam(createTeamDTO).then((response: any) => {
      toast({
        title: "Team created successfully!",
        position: "top-left",
        description: "Feel free to activate freshly created team",
        status: "success",
        duration: 1350,
        isClosable: true,
      });
      const teamResponse: ITeam = response;
      const tempTeams: ITeam[] = teams.filter((team) => {
        if (team._id !== teamResponse._id) {
          return team;
        }
      });
      tempTeams.push(teamResponse);
      setTeams(tempTeams);
      onClose();
    });
  }

  // SECTION: UI Constants & Variables
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SECTION: Hooks State - UI
  const [teamName, setTeamName] = useState<string>("");
  const [teamDescription, setTeamDescription] = useState<string>("");
  console.log("team-name", teamName);
  console.log("team-description", teamDescription);

  // SECTION: Hooks Effect - UI
  useEffect(() => {}, []);

  // SECTION: UI Events

  // SECTION: Render
  return (
    <SystemPageHOC systemPageProps={props.systemPageProps}>
      <Box>
        <SystemPageHeader
          headingText="Teams"
          headingIcon={FiUsers}
          createButtonLabel="Team"
          onCreateModalOpen={onOpen}
        />
        <Box>
          {teams ? (
            <Flex>
              {teams?.map((team: ITeam, index) => {
                return (
                  <Box key={index}>
                    <TeamEntityCard />
                    {team.created_at}
                  </Box>
                );
              })}
            </Flex>
          ) : (
            <Center>
              <Box maxW="32rem">
                <img src="/illus/team-illu.svg" />
                <Center>
                  <Heading mb="4" color="backgroundPrimary">
                    Dont have a team yet?
                  </Heading>
                </Center>
                <Text fontSize="xl" color="backgroundPrimary" align="center">
                  Create your first team to start sharing tasks on shared
                  project board assigned to team! 🥳
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
                    Create your first Team
                  </Button>
                </Center>
              </Box>
            </Center>
          )}
        </Box>
      </Box>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Team</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl pb="12px">
              <FormLabel htmlFor="email" fontSize="md">
                Team Name
              </FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                borderColor="grey"
                _hover={{ borderColor: "blue" }}
                onChange={(newValue) => setTeamName(newValue.target.value)}
              />
            </FormControl>
            <FormControl pb="12px">
              <FormLabel htmlFor="email" fontSize="md">
                Team Description
              </FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                borderColor="grey"
                _hover={{ borderColor: "blue" }}
                onChange={(newValue) =>
                  setTeamDescription(newValue.target.value)
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
              onClick={() => createTeam()}
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

export default TeamsPage;
