import React from "react";
import { Box, useColorModeValue, Grid } from "@chakra-ui/react";
import Latesttrans from "./Latesttrans";
import NewJoin from "./NewJoin";
const Widgetusers = () => {
  return (
    <Box>
      <Grid templateColumns={{ sm: "1fr", md: "1fr 2fr" }} py={"5"}>
        {/*  */}
        <NewJoin />
        <Latesttrans />
      </Grid>
    </Box>
  );
};

export default Widgetusers;
