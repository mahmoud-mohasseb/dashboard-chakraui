import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiMessageSquare,
  FiUsers,
} from "react-icons/fi";

import {
  MdDarkMode,
  MdLightMode,
  MdOutlineReport,
  MdStackedLineChart,
} from "react-icons/md";
import {
  AiOutlineShop,
  AiOutlineTransaction,
  AiOutlineMail,
} from "react-icons/ai";
import { HiOutlineDocumentReport, HiOutlineBriefcase } from "react-icons/hi";
import { RiFeedbackLine } from "react-icons/ri";
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

const Dashboarditems = [
  { name: "Home", icon: FiHome },
  { name: "Analytics", icon: FiTrendingUp },
  { name: "Sales", icon: FiCompass },
];
const QuickMenu = [
  { name: "Users", icon: FiUsers },
  { name: "Products", icon: AiOutlineShop },
  { name: "Transactions", icon: AiOutlineTransaction },
  { name: "Reports", icon: HiOutlineDocumentReport },
];
const Notification = [
  { name: "Mail", icon: AiOutlineMail },
  { name: "Feedback", icon: RiFeedbackLine },
  { name: "Messages", icon: FiMessageSquare },
];

const staff = [
  { name: "Manage", icon: HiOutlineBriefcase },
  { name: "Analytics", icon: MdStackedLineChart },
  { name: "Reports", icon: MdOutlineReport },
];

// items settings

const NavItem = ({ icon, children, href, ...rest }) => {
  const iconHover = useColorModeValue("gray.900", "gray.200");
  const iconColor = useColorModeValue("gray.200", "gray.900");
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="1"
        // mx="4"
        mx="3"
        borderRadius="lg"
        role="ground"
        cursor="pointer"
        _hover={{
          bg: iconHover,
          color: iconColor,
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        <Link href={href}>{children}</Link>
      </Flex>
    </Link>
  );
};

const MobileSideMenu = ({ ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconHover = useColorModeValue("gray.900", "gray.200");
  const iconColor = useColorModeValue("gray.200", "gray.900");

  return (
    <Box
      minH="100vh"
      my={"20"}
      transition={"3s ease"}
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      shadow={"md"}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      display={{ base: "block", md: "none" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        flexDirection={"column"}
        align="center"
        p="2"
        mx="2"
        my="3"
        borderRadius="lg"
        role="ground"
        cursor="pointer"
      >
        {Dashboarditems.map((link, id) => (
          <Link href={link.name}>
            <IconButton
              my="1"
              w={8}
              h={8}
              variant="outline"
              fontSize="10"
              _groupHover={{
                color: "white",
              }}
              as={link.icon}
              _hover={{
                bg: iconHover,
                color: iconColor,
              }}
              onClick={() => console.log(link.name)}
            />
          </Link>
        ))}
        {QuickMenu.map((link, id) => (
          <Link href={link.name}>
            <IconButton
              key={id}
              w={8}
              h={8}
              my="1"
              variant="outline"
              fontSize="10"
              _groupHover={{
                color: "white",
              }}
              as={link.icon}
              _hover={{
                bg: iconHover,
                color: iconColor,
              }}
              onClick={
                (() => console.log(id),
                //   navigate(`/${link.name}`);
                console.log(link.name))
              }
            />
          </Link>
        ))}
        {Notification.map((link) => (
          <Link href={link.name}>
            <IconButton
              w={8}
              h={8}
              my="1"
              variant="outline"
              fontSize="10"
              _groupHover={{
                color: "white",
              }}
              as={link.icon}
              _hover={{
                bg: iconHover,
                color: iconColor,
              }}
            />
          </Link>
        ))}
        {staff.map((link) => (
          <Link href={link.name}>
            <IconButton
              my="1"
              w={8}
              h={8}
              variant="outline"
              fontSize="30"
              _groupHover={{
                color: "white",
              }}
              as={link.icon}
              _hover={{
                bg: iconHover,
                color: iconColor,
              }}
            />
          </Link>
        ))}

        {/*  */}
        <IconButton
          my="1"
          w={8}
          h={8}
          variant="outline"
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
      </Flex>
    </Box>
  );
};

// const MobileNav = ({ ...rest }) => {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 4 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue("white ", "gray.900")}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue("gray.200", "gray.700")}
//       justifyContent={"end"}
//       //   justifyContent={{ base: "space-between", md: "flex.end" }}
//       {...rest}
//     >
//       <HStack spacing={{ base: "0", md: "6" }}>
//         <IconButton
//           my="1"
//           w={8}
//           h={8}
//           variant="ghost"
//           aria-label="open menu"
//           icon={<FiBell />}
//         />
//         <IconButton
//           display={{ base: "none", md: "inherit" }}
//           my="1"
//           w={8}
//           h={8}
//           variant="ghost"
//           fontSize="30"
//           _groupHover={{
//             color: "white",
//           }}
//           onClick={toggleColorMode}
//         >
//           {colorMode === "light" ? (
//             <MdDarkMode size={"20"} />
//           ) : (
//             <MdLightMode size={"20"} />
//           )}
//         </IconButton>
//         <Flex alignItems={"center"}>
//           <Menu>
//             <MenuButton
//               py={2}
//               transition="all 0.3s"
//               _focus={{ boxShadow: "none" }}
//             >
//               <HStack>
//                 {/* <Avatar
//                   size={"sm"}
//                   src={
//                     "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
//                   }
//                               /> */}
//                 <Avatar
//                   size={"sm"}
//                   src={
//                     "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
//                   }
//                 >
//                   <AvatarBadge boxSize="1.25em" bg="green.500" />
//                 </Avatar>
//                 <VStack
//                   display={{ base: "none", md: "flex" }}
//                   alignItems="flex-start"
//                   spacing="1px"
//                   ml="2"
//                 >
//                   <Text fontSize="sm">Justina Clark</Text>
//                   <Text fontSize="xs" color="gray.600">
//                     Admin
//                   </Text>
//                 </VStack>
//                 <Box display={{ base: "none", md: "flex" }}>
//                   <FiChevronDown />
//                 </Box>
//               </HStack>
//             </MenuButton>
//             <MenuList
//               bg={useColorModeValue("white", "gray.900")}
//               borderColor={useColorModeValue("gray.200", "gray.700")}
//             >
//               <MenuItem>Profile</MenuItem>
//               <MenuItem>Settings</MenuItem>
//               <MenuItem>Billing</MenuItem>
//               <MenuDivider />
//               <MenuItem>Sign out</MenuItem>
//             </MenuList>
//           </Menu>
//           {/*  */}
//         </Flex>
//       </HStack>
//     </Flex>
//   );
// };

const SidebarContent = ({ ...rest }) => {
  return (
    <Box
      minH="100vh"
      transition={"3s ease"}
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      shadow={"md"}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "fit-content", md: 60 }}
      my={"8"}
      display={{ base: "none", md: "block" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="10"
        alignItems="center"
        mx="8"
        mt={"8"}
        justifyContent="space-between"
      >
        {/* <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color={useColorModeValue("gray.900", "white")}
        >
          The Market
        </Text> */}
        {/* <CloseButton display={{ base: "flex", md: "none" }} /> */}
      </Flex>
      <Heading
        display={"flex"}
        as="h5"
        size="sm"
        align="center"
        p="2"
        color={useColorModeValue("gray.400", "white")}
        role="ground"
        cursor="pointer"
      >
        Dashboard
      </Heading>
      {/*  */}
      {/*  */}
      {Dashboarditems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.name}>
          {link.name}
        </NavItem>
      ))}
      <Heading
        display={"flex"}
        color={useColorModeValue("gray.400", "white")}
        as="h5"
        size="sm"
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="ground"
        cursor="pointer"
      >
        QuickMenu
      </Heading>
      {QuickMenu.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.name}>
          {link.name}
        </NavItem>
      ))}
      <Heading
        display={"flex"}
        color={useColorModeValue("gray.400", "white")}
        as="h5"
        size="sm"
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="ground"
        cursor="pointer"
      >
        Notification
      </Heading>
      {Notification.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.name}>
          {link.name}
        </NavItem>
      ))}
      <Heading
        display={"flex"}
        color={useColorModeValue("gray.400", "white")}
        as="h5"
        size="sm"
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="ground"
        cursor="pointer"
      >
        Staff
      </Heading>
      {staff.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.name}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Box>
      <SidebarContent />
      <MobileSideMenu />
      {/* <MobileNav /> */}
    </Box>
  );
};

export default Sidebar;
