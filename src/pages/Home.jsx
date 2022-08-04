import React from "react";
import Sidebar from "../components/Sidebar";
import {
  Container,
  Box,
  useColorModeValue,
  Text,
  Center,
  Grid,
  GridItem,
  StackDivider,
  VStack,
  HStack,
  Flex,
  Stack,
} from "@chakra-ui/react";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import Widgetusers from "../components/Widgetusers";
// import WidgetSm from "../components/widgetSm";

import { userData } from "../dummyData";

const Home = () => {
  return (
    <Center overflow={"scroll"}>
      <Box my={"100"}>
        <FeaturedInfo />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <Widgetusers />
      </Box>
    </Center>
  );
};

export default Home;
