import React from "react";
import {
  Box,
  TableContainer,
  Tbody,
  Thead,
  Th,
  Tr,
  Td,
  Table,
  IconButton,
  TableCaption,
  Badge,
  Button,
  Avatar,
  Checkbox,
  Text,
  Center,
  useColorModeValue,
  Flex,
  Container,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const Users = () => {
  const navigate = useNavigate();
  return (
    <Box mx="20" my={"75"}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                <Checkbox />
              </Th>
              <Th>id</Th>
              <Th>User</Th>
              <Th>Email</Th>
              <Th>Status</Th>
              <Th>Transaction</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Checkbox defaultChecked></Checkbox>
              </Td>

              <Td isNumeric>3</Td>
              <Td>
                <Flex gap={"1"}>
                  <Avatar
                    size="sm"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text
                    fontSize={"small"}
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    UX/UI Designer
                  </Text>
                </Flex>
              </Td>
              <Td>Ghareb4@gmail.com</Td>
              <Badge colorScheme="red">Passive</Badge>

              <Td>300$</Td>
              <Td isNumeric>
                <Button
                  colorScheme="teal"
                  size="xs"
                  mr={"2"}
                  //   href={'#'}
                >
                  Edit
                </Button>

                <IconButton variant="outline" colorScheme="teal" size="xs">
                  <AiFillDelete />
                </IconButton>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox defaultChecked></Checkbox>
              </Td>

              <Td isNumeric>3</Td>
              <Td>
                <Flex gap={"1"}>
                  <Avatar
                    size="sm"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text
                    fontSize={"small"}
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    UX/UI Designer
                  </Text>
                </Flex>
              </Td>
              <Td>Ghareb4@gmail.com</Td>
              <Badge colorScheme="red">Passive</Badge>

              <Td>300$</Td>
              <Td isNumeric>
                <Button colorScheme="teal" size="xs" mr={"2"}>
                  Edit
                </Button>

                <IconButton variant="outline" colorScheme="teal" size="xs">
                  <AiFillDelete />
                </IconButton>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox defaultChecked></Checkbox>
              </Td>

              <Td isNumeric>3</Td>
              <Td>
                <Flex gap={"1"}>
                  <Avatar
                    size="sm"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text
                    fontSize={"small"}
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    UX/UI Designer
                  </Text>
                </Flex>
              </Td>
              <Td>Ghareb4@gmail.com</Td>
              <Td>
                <Badge colorScheme="green">Active</Badge>
              </Td>

              <Td>300$</Td>
              <Td isNumeric>
                <Button
                  colorScheme="teal"
                  size="xs"
                  mr={"2"}
                  onClick={() => navigate("/EditUser")}
                >
                  Edit
                </Button>

                <IconButton variant="outline" colorScheme="teal" size="xs">
                  <AiFillDelete />
                </IconButton>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
