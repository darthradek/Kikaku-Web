import * as React from "react";
import css from "./SystemSidebar.module.scss";
import {
  Flex,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  DrawerOverlay,
  Spacer,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import SystemNavItems from "../../../../static-data/SystemNavItem";
interface IProps {}

function SystemSidebar(props: IProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Hooks State - UI
  const { isOpen, onOpen, onClose } = useDisclosure();

  // SECTION: UI Events

  // SECTION: Render
  return (
    <>
      <div className={css.navToggleButton} onClick={onOpen}>
        <ChevronRightIcon w="8" h="8" />
      </div>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        closeOnOverlayClick={false}
      >
        <DrawerContent>
          <DrawerHeader>
            <img src="/logo.svg" className={css.logoBanner} alt="" />
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody mt="8">
            {SystemNavItems.systemNavItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                style={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Flex
                  align="center"
                  mb="4"
                  p="4"
                  borderRadius="lg"
                  role="group"
                  bg="#e1e8eb"
                  cursor="pointer"
                  _hover={{
                    bg: "#343a40",
                    color: "white",
                  }}
                >
                  {/* {icon && (
                  <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                      color: "white",
                    }}
                    as={icon}
                  />
                )} */}
                  {link.label}
                </Flex>
              </Link>
            ))}
          </DrawerBody>
          <DrawerFooter h="4rem" bg="#e1e8eb">
            <Flex minWidth="max-content" alignItems="center" gap="8">
              <Link href="https://chakra-ui.com" isExternal>
                Logged in user...
              </Link>
              <Spacer />
              <Button colorScheme="#e1e8eb" bg="#343a40">
                Log out
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SystemSidebar;
