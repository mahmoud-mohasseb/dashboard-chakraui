import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <Box
      role={"group"}
      p={"6"}
      m={"2"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"2xl"}
      cursor={"pointer"}
      _hover={{
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      <Text fontSize="5xl" textAlign={"start"} fontWeight="semibold">
        {title}
      </Text>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;
