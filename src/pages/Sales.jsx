import React from "react";
import {
  Text,
  Stack,
  Box,
  Center,
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";

const Sales = () => {
  return (
    <Center>
      <Stack spacing={3}>
        <Text fontSize="6xl">(6xl) In love with React & Next</Text>
        <Text fontSize="4xl">(4xl) In love with React & Next</Text>
        <Text fontSize="3xl">(3xl) In love with React & Next</Text>
        <Text fontSize="2xl">(2xl) In love with React & Next</Text>
        <Text fontSize="xl">(xl) In love with React & Next</Text>
        <Text fontSize="lg">(lg) In love with React & Next</Text>
        <Text fontSize="md">(md) In love with React & Next</Text>
        <Text fontSize="sm">(sm) In love with React & Next</Text>
        <Text fontSize="xs">(xs) In love with React & Next</Text>
        <Box
          maxW={"270px"}
          w={"400px"}
          h={" 300px"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          position={"position"}
          bgImage="url('https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80')"
          bgPosition="center"
          bgRepeat="no-repeat"
          cursor="pointer"
        >
          <Box
            display={"flex"}
            backgroundColor={`rgba(31, 31, 31, 0.85)`}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"100%"}
            h={"100%"}
            p="10"
            opacity={0}
            transition={"all 0.3s ease-out"}
            _hover={{
              opacity: 1,
            }}
          >
            <Text fontSize="2xl" color={"whiteAlpha.900"}>
              Dubai
            </Text>
            <Text fontSize="xl" color={"whiteAlpha.900"}>
              United Arab Emirates
            </Text>
          </Box>
        </Box>
      </Stack>
    </Center>
  );
};

export default Sales;
