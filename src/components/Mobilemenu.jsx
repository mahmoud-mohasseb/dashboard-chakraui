import React from "react";
import {
  useColorMode,
  Flex,
  useColorModeValue,
  HStack,
  IconButton,
  Avatar,
  MenuButton,
  Menu,
  AvatarBadge,
  MenuItem,
  VStack,
  Box,
  Text,
  MenuDivider,
  MenuList,
} from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FiChevronDown, FiBell } from "react-icons/fi";

const Mobilemenu = ({ ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      //   ml={{ base: 0, md: 60 }}
      //   px={{ base: 4, md: 4 }}
      height="20"
      position={"fixed"}
      w="full"
      zIndex={"2"}
      alignItems="center"
      bg={useColorModeValue("white ", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={"space-between"}
      //   justifyContent={{ base: "space-between", md: "flex.end" }}
      {...rest}
    >
      <Text
        ml={"10"}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        color={useColorModeValue("gray.900", "white")}
      >
        The Market
      </Text>
      <HStack spacing={{ base: "0", md: "6" }} mr={"30"}>
        <IconButton
          my="1"
          w={8}
          h={8}
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <IconButton
          display={{ base: "none", md: "inherit" }}
          my="1"
          w={8}
          h={8}
          variant="ghost"
          fontSize="30"
          _groupHover={{
            color: "white",
          }}
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? (
            <MdDarkMode size={"20"} />
          ) : (
            <MdLightMode size={"20"} />
          )}
        </IconButton>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                {/* <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                                /> */}
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                >
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
          {/*  */}
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Mobilemenu;
