import React from "react";
import {
  Box,
  useColorModeValue,
  Avatar,
  Text,
  Badge,
  //
  TableContainer,
  Tbody,
  Thead,
  Th,
  Tr,
  Td,
  Table,
  //
  Flex,
} from "@chakra-ui/react";

const Latesttrans = () => {
  return (
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
      <Text textAlign={"start"} fontWeight="semibold">
        Latest Transactions
      </Text>
      <Flex flexDirection={"column"} gap={"2"}>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Customer</Th>
                <Th>Date</Th>
                <Th isNumeric>Amount</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>
                  <Avatar
                    src={"https://bit.ly/code-beast"}
                    alt={"name"}
                    mb={2}
                  />
                </Td>
                <Td>
                  {new Date().getFullYear()}/{new Date().getDate()}/
                  {new Date().getMonth()}
                </Td>
                <Td isNumeric>25.4$</Td>
                <Td>
                  <Badge colorScheme="green">Approved</Badge>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Avatar
                    src={"https://bit.ly/code-beast"}
                    alt={"name"}
                    mb={2}
                  />
                </Td>
                <Td>
                  {new Date().getFullYear()}/{new Date().getDate()}/
                  {new Date().getMonth()}
                </Td>
                <Td isNumeric>30.48$</Td>
                <Td>
                  <Badge colorScheme="red">Declined</Badge>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Avatar
                    src={"https://bit.ly/code-beast"}
                    alt={"name"}
                    mb={2}
                  />
                </Td>
                <Td>
                  {new Date().getFullYear()}/{new Date().getDate()}/
                  {new Date().getMonth()}
                </Td>
                <Td isNumeric>0.91444$</Td>
                <Td>
                  <Badge colorScheme="red">Declined</Badge>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Avatar
                    src={"https://bit.ly/code-beast"}
                    alt={"name"}
                    mb={2}
                  />
                </Td>
                <Td>
                  {new Date().getFullYear()}/{new Date().getDate()}/
                  {new Date().getMonth()}
                </Td>
                <Td isNumeric>0.91444$</Td>
                <Td>
                  <Badge colorScheme="cyan">pending</Badge>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  );
};

export default Latesttrans;
