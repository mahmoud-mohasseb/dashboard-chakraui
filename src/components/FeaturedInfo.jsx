import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
const FeaturedInfo = () => {
  return (
    <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr " }} gap={3} py={"5"}>
      <GridItem
        p={"6"}
        w={"200"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"2xl"}
        cursor={"pointer"}
        borderRadius={"12px"}
        h="150"
      >
        <Box textAlign={"center"}>
          <Text fontSize="3xl" fontWeight={"semibold"}>
            Revenue
          </Text>
          <Flex direction={"row"} justifyContent={"center"}>
            <Text fontSize="3xl" color={useColorModeValue("gray.400", "white")}>
              25.45 $
            </Text>
            <Text fontSize="sm" color={useColorModeValue("gray.400", "white")}>
              11.12$
            </Text>
            <AiOutlineArrowDown color="red" size={"30"} />
          </Flex>

          <Text
            size="sm"
            color={useColorModeValue("gray.400", "white")}
            cursor="pointer"
          >
            Compared to last month
          </Text>
        </Box>
      </GridItem>
      <GridItem
        p={"6"}
        w={"200"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"2xl"}
        cursor={"pointer"}
        borderRadius={"12px"}
        h="150"
      >
        <Box textAlign={"center"}>
          <Text fontSize="3xl" fontWeight={"semibold"}>
            Sales
          </Text>
          <Flex direction={"row"} justifyContent={"center"}>
            <Text fontSize="3xl" color={useColorModeValue("gray.400", "white")}>
              25.45 $
            </Text>
            <Text fontSize="sm" color={useColorModeValue("gray.400", "white")}>
              11.12$
            </Text>
            <AiOutlineArrowDown color="red" size={"30"} />
          </Flex>

          <Text
            size="sm"
            color={useColorModeValue("gray.400", "white")}
            cursor="pointer"
          >
            Compared to last month
          </Text>
        </Box>
      </GridItem>
      <GridItem
        p={"6"}
        w={"200"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"2xl"}
        cursor={"pointer"}
        borderRadius={"12px"}
        h="150"
      >
        <Box textAlign={"center"}>
          <Text fontSize="3xl" fontWeight={"semibold"}>
            Cost
          </Text>
          <Flex direction={"row"} justifyContent={"center"}>
            <Text fontSize="3xl" color={useColorModeValue("gray.400", "white")}>
              25.45 $
            </Text>
            <Text fontSize="sm" color={useColorModeValue("gray.400", "white")}>
              11.12$
            </Text>
            <AiOutlineArrowUp color="green" size={"30"} />
          </Flex>

          <Text
            size="sm"
            color={useColorModeValue("gray.400", "white")}
            cursor="pointer"
          >
            Compared to last month
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default FeaturedInfo;
