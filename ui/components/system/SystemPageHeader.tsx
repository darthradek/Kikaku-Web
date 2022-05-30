import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";

interface IProps {
  headingText?: string;
  headingIcon?: IconType;
  headingPrefix?: string;
  createButtonLabel?: string;
  deleteButtonLabel?: string;
  editButtonLabel?: string;
  onCreateModalOpen?: Function;
  onDelete?: Function;
}

function SystemPageHeader(props: IProps) {
  // SECTION: Props
  const {
    headingText,
    headingIcon,
    headingPrefix,
    createButtonLabel,
    deleteButtonLabel,
    editButtonLabel,
    onCreateModalOpen,
    onDelete,
  } = props;

  // SECTION: Render
  return (
    <Box
      mb="6"
      borderBottom="3px"
      borderStyle="dashed"
      borderColor="backgroundTertiary"
      position="static"
    >
      <Flex justifyContent="space-between" align="center">
        <Flex align="center">
          {headingIcon && (
            <Icon
              mr="4"
              fontSize="35"
              color="highlightPrimary"
              as={headingIcon}
            />
          )}
          {headingPrefix && (
            <Text
              mr={"1rem"}
              color="backgroundPrimary"
              fontSize={"4xl"}
              fontWeight="600"
              opacity="0.5"
            >
              {headingPrefix}
            </Text>
          )}
          <Text color="backgroundPrimary" fontSize={"4xl"} fontWeight="600">
            {headingText}
          </Text>
        </Flex>
        <Flex>
          {onDelete && (
            <Button
              fontWeight={"bold"}
              color={"backgroundPrimary"}
              bg={"backgroundTertiary"}
              size="sm"
              mr="1rem"
              _hover={{
                color: "backgroundPrimary",
                transform: "translateY(-2px)",
                bg: "red",
                boxShadow: "lg",
              }}
              onClick={() => onDelete()}
            >
              <Icon mr="2" size={"sm"} color="backgroundPrimary" as={FiTrash} />
              Delete {deleteButtonLabel}
            </Button>
          )}
          {/* {editButtonLabel && (
            <Button
              fontWeight={"bold"}
              color={"backgroundSecondary"}
              bg={"backgroundPrimary"}
              size="sm"
              mr="1rem"
              _hover={{
                color: "backgroundSecondary",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              onClick={() => onCreateModalOpen()}
            >
              <Icon
                mr="2"
                size={"sm"}
                color="backgroundSecondary"
                as={FiEdit}
              />
              Edit {editButtonLabel}
            </Button>
          )} */}
          {onCreateModalOpen && (
            <Button
              fontWeight={"bold"}
              color={"backgroundSecondary"}
              bg={"highlightPrimary"}
              size="sm"
              _hover={{
                color: "backgroundSecondary",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              onClick={() => onCreateModalOpen()}
            >
              <Icon
                mr="2"
                size={"sm"}
                color="backgroundSecondary"
                as={FiPlus}
              />
              {createButtonLabel}
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default SystemPageHeader;
