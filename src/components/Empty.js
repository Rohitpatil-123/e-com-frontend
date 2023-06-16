import React from "react";
import phot from "../assets/empty.png";
import { Box, Typography } from "@mui/material";
const Empty = () => {
  return (
    <Box
      width="100%"
      height="78vh"
      display={"flex"}
      flexDirection={"column"}
      py={{ lg: 8, xs: 8 }}
    >
      <Box width="100%" display={"flex"} justifyContent={"center"}>
        <img src={phot} alt="du" />
      </Box>
      <Typography
        textAlign={"center"}
        mt={1}
        color={"#d97706"}
        fontWeight={"bold"}
      >
        Opps your Cart is Empty !!!
      </Typography>
    </Box>
  );
};

export default Empty;
