import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = ({ onClick }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color={useColorModeValue("gray.900", "gray.100")}>
          Welcome Dashboard
        </Heading>
        <Avatar bg="gray.800" top={"4"} />
        <Box minW={{ base: "90%", md: "468px" }}>
          {/* <form> */}
          <Stack
            spacing={4}
            p="3rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
            borderRadius={"3xl"}
          >
            <FormControl id="email">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input
                  rounded={"full"}
                  type="email"
                  placeholder="email address"
                  bg={useColorModeValue("gray.100", "gray.900")}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                  rounded={"full"}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  bg={useColorModeValue("gray.100", "gray.900")}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleShowClick}
                    rounded={"full"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link>forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius={"2xl"}
              type="submit"
              variant="ghost"
              width="full"
              bg={useColorModeValue("gray.100", "gray.900")}
              onClick={() => navigate("/Home")}
            >
              Login
            </Button>
          </Stack>
          {/* </form> */}
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
