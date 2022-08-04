import React from "react";
import {
  Grid,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  return (
    <Center>
      <Box my={"20"} mx={"90"}>
        <Grid templateColumns={{ sm: "1fr", md: "2fr 1fr" }} py={"5"}>
          <Text fontSize="5xl" textAlign={"start"} fontWeight="bold">
            EDIT USER
          </Text>
          <Box>
            <Button
              onClick={() => navigate("/NewAccount")}
              borderRadius={"full"}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"black"}
              href={"#"}
              _hover={{
                bg: "gray.800",
              }}
            >
              Create
            </Button>
          </Box>
        </Grid>
        <Grid templateColumns={{ sm: "1fr", md: "1fr 2fr" }} py={"5"}>
          <Box
            p={"6"}
            m={"2"}
            w={"300"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"2xl"}
            cursor={"pointer"}
            _hover={{
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          >
            <Flex gap={"1"}>
              <Image
                borderRadius={"full"}
                boxSize="100px"
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Box py="5" mx="5">
                <Text
                  fontSize={"large"}
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  Mahmoud Ahmed
                </Text>
                <Text
                  fontSize={"small"}
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  Software Engineer
                </Text>
              </Box>
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
              Account Details
            </Heading>
            {/*  */}
            <Box display={"flex"} gap="6" my="6">
              <AiOutlineUser size={"20"} />
              <Text
                fontSize={"large"}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Mahmoud Ahmed
              </Text>
            </Box>
            <Box display={"flex"} gap="6" my="6">
              <AiOutlineCalendar size={"20"} />
              <Text
                fontSize={"large"}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                27.04.1986
              </Text>
            </Box>
            {/* <Box display={"flex"} gap="6">
            <BsPhone size={"20"} />
            <Text
              fontSize={"large"}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              +023939375754
            </Text>
          </Box> */}
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
              Account Details
            </Heading>

            <Box display={"flex"} gap="6" my="6">
              <BiLocationPlus size={"20"} />
              <Text
                fontSize={"large"}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                cairo | egyot
              </Text>
            </Box>
            <Box display={"flex"} gap="6" my="6">
              <AiOutlineMail size={"20"} />
              <Text
                fontSize={"large"}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Ghareb4@gmail.com
              </Text>
            </Box>
            <Box display={"flex"} gap="6">
              <BsPhone size={"20"} />
              <Text
                fontSize={"large"}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                +023939375754
              </Text>
            </Box>
          </Box>

          {/*  */}
          {/*  */}
          <Box bg={useColorModeValue("white", "gray.800")} cursor={"pointer"}>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Text
                fontSize={"xl"}
                fontWeight={"bold"}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Edit
              </Text>

              <Grid templateColumns={{ sm: "1fr", md: "2fr 1fr" }} gap={"2"}>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>User Name</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Full Name</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Email</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Phone</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Address</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <Stack spacing={10}>
                    <Button
                      borderRadius={"full"}
                      fontSize={"sm"}
                      fontWeight={600}
                      color={"white"}
                      bg={"black"}
                      href={"#"}
                      _hover={{
                        bg: "gray.800",
                      }}
                    >
                      Update
                    </Button>
                  </Stack>
                </Stack>
                <Image
                  borderRadius={"2xl"}
                  boxSize="150px"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Center>
  );
};

export default EditUser;
