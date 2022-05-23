import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FiPlus } from "react-icons/fi";

interface IProps {
  headingText: string;
  headingIcon: IconType;
  createButtonLabel: string;
  onCreateModalOpen?: Function;
}

function SystemPageHeader(props: IProps) {
  // SECTION: Props
  const { headingText, headingIcon, createButtonLabel, onCreateModalOpen } =
    props;

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
    <Box
      mb="6"
      pb="2"
      borderBottom="3px"
      borderStyle="dashed"
      borderColor="backgroundTertiary"
    >
      <Flex justifyContent="space-between" align="center">
        <Flex align="center">
          <Icon
            mr="4"
            fontSize="35"
            color="highlightPrimary"
            as={headingIcon}
          />
          <Text color="backgroundPrimary" fontSize={"4xl"} fontWeight="600">
            {headingText}
          </Text>
        </Flex>
        {onCreateModalOpen && (
          <Button
            fontWeight={600}
            color={"backgroundSecondary"}
            bg={"highlightPrimary"}
            size="md"
            _hover={{
              color: "backgroundSecondary",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            onClick={() => onCreateModalOpen()}
          >
            <Icon
              fontSize="2xl"
              mr="2"
              size={"md"}
              color="backgroundSecondary"
              as={FiPlus}
            />
            Create New {createButtonLabel}
          </Button>
        )}
      </Flex>
    </Box>
  );
}

export default SystemPageHeader;
