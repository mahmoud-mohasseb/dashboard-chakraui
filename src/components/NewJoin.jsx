import React from "react";
import {
  Box,
  useColorModeValue,
  Text,
  Avatar,
  Stack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";

const NewJoin = () => {
  return (
    <Box
      p={"6"}
      w={"200"}
      //   m={"2"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"2xl"}
      cursor={"pointer"}
      _hover={{
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      <Text textAlign={"start"} fontWeight="semibold">
        New Members Join
      </Text>

      <Flex flexDirection={"column"} gap={"3"}>
        <Flex mt={8} direction={"row"} gap={"3"}>
          <Avatar
            src={"https://bit.ly/tioluwani-kolawole"}
            alt={"name"}
            mb={2}
          />
          <Stack spacing={-1}>
            <Text fontWeight={600}>MAHMOUD</Text>
            <Text
              fontSize={"xs"}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              UX/UI Designer
            </Text>
          </Stack>
          <Button
            rounded={"full"}
            variant={"ghost"}
            //   onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            <AiOutlineEye size={20} />
            Display
            {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
          </Button>
        </Flex>

        <Flex mt={2} direction={"row"} gap={"3"}>
          <Avatar src={"https://bit.ly/ryan-florence"} alt={"name"} mb={2} />
          <Stack spacing={-1}>
            <Text fontWeight={600}>MAHMOUD</Text>
            <Text
              fontSize={"xs"}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              UX/UI Designer
            </Text>
          </Stack>
          <Button
            rounded={"full"}
            variant={"ghost"}
            //   onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            <AiOutlineEye size={20} />
            Display
            {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
          </Button>
        </Flex>

        <Flex mt={2} direction={"row"} gap={"3"}>
          <Avatar src={"https://bit.ly/code-beast"} alt={"name"} mb={2} />
          <Stack spacing={-1}>
            <Text fontWeight={600}>MAHMOUD</Text>
            <Text
              fontSize={"xs"}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              UX/UI Designer
            </Text>
          </Stack>
          <Button
            rounded={"full"}
            variant={"ghost"}
            //   onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            <AiOutlineEye size={20} />
            Display
            {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
          </Button>
        </Flex>

        <Flex mt={2} direction={"row"} gap={"3"}>
          <Avatar src={"https://bit.ly/code-beast"} alt={"name"} mb={2} />
          <Stack spacing={-1}>
            <Text fontWeight={600}>MAHMOUD</Text>
            <Text
              fontSize={"xs"}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              UX/UI Designer
            </Text>
          </Stack>
          <Button
            rounded={"full"}
            variant={"ghost"}
            //   onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            <AiOutlineEye size={20} />
            Display
            {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NewJoin;
