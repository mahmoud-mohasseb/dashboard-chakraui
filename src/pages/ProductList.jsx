import React, { useState } from "react";
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

const ProductList = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const navigate = useNavigate();
  return (
    <Box mx="20" my={"75"}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={(e) =>
                    setCheckedItems([e.target.checked, e.target.checked])
                  }
                />
              </Th>
              <Th>id</Th>
              <Th>Product</Th>
              <Th>Stock</Th>
              <Th>Status</Th>
              <Th>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Checkbox
                  isChecked={checkedItems[0]}
                  onChange={(e) =>
                    setCheckedItems([e.target.checked, checkedItems[1]])
                  }
                ></Checkbox>
              </Td>

              <Td isNumeric>3</Td>
              <Td>
                <Flex gap={"1"}>
                  <Avatar
                    size="sm"
                    name="Dan Abrahmov"
                    src="https://www.pngmart.com/files/7/Desktop-Computer-PNG-File.png"
                  />
                  <Text
                    fontSize={"small"}
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    computer
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
                <Checkbox
                  isChecked={checkedItems[0]}
                  onChange={(e) =>
                    setCheckedItems([e.target.checked, checkedItems[1]])
                  }
                ></Checkbox>
              </Td>

              <Td isNumeric>3</Td>
              <Td>
                <Flex gap={"1"}>
                  <Avatar
                    size="sm"
                    name="Dan Abrahmov"
                    src="https://www.pngmart.com/files/7/Desktop-Computer-PNG-File.png"
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
                <Checkbox
                  isChecked={checkedItems[1]}
                  onChange={(e) =>
                    setCheckedItems([checkedItems[0], e.target.checked])
                  }
                ></Checkbox>
              </Td>

              <Td isNumeric>3</Td>
              <Td>
                <Flex gap={"1"}>
                  <Avatar
                    size="sm"
                    name="Dan Abrahmov"
                    src="https://www.pngmart.com/files/7/Desktop-Computer-PNG-File.png"
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

export default ProductList;
