import React from "react";
import {
  Box,
  Stack,
  Center,
  Text,
  useColorModeValue,
  Button,
  Grid,
  Flex,
  Image,
  Heading,
  Select,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
const NewAccount = () => {
  return (
    <Box my={"20"} mx={"95"}>
      <Grid templateColumns={{ sm: "1fr", md: "2fr 1fr" }} py={"5"}>
        <Text fontSize="5xl" textAlign={"start"} fontWeight="bold">
          New Account
        </Text>
      </Grid>
      {/*  */}
      <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} gap={2} py={"5"}>
        <Box
          p={"6"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"2xl"}
          cursor={"pointer"}
          _hover={{
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>User Name</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Email</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Phone number</FormLabel>
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

          {/*  */}
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

            <Stack spacing={4}>
              <FormControl id="password">
                <FormLabel>Full Name</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Address</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Active</FormLabel>
                <Select>
                  <option value="yes">Yes</option>
                  <option value="No">No</option>
                </Select>
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
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default NewAccount;
