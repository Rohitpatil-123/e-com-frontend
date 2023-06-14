import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Addproduct from "../components/Addproduct";

const Admin = () => {
  const [comp, setComp] = useState("1");
  const compon = (comp) => {
    switch (comp) {
      case "2":
        return <Addproduct />;
      default:
        return <h1>No project match</h1>;
    }
  };
  return (
    <>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        fontSize={"30px"}
        fontFamily={"cursive"}
        textAlign={"center"}
      >
        Admin Dashboard
      </Typography>
      <Box display={"flex"} flexDirection={{ lg: "row", xs: "column" }}>
        <Box
          width={{ lg: "20%", xs: "100%" }}
          p={{ lg: 2, xs: 1 }}
          display={"flex"}
          flexDirection={{ lg: "column", xs: "row" }}
          gap={2}
          overflowX={{ xs: "auto", lg: "none" }}
          Height={{ lg: "auto", xs: "70px" }}
          borderRight={"2px solid grey"}
        >
          <Button
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: "17px",
              backgroundColor: "yellowgreen",
            }}
            startIcon={<AddToPhotosIcon />}
            onClick={() => {
              setComp("2");
            }}
          >
            Add Product
          </Button>
          <Button
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: "17px",
              backgroundColor: "yellowgreen",
            }}
            startIcon={<DeleteIcon />}
          >
            Delete Product
          </Button>
        </Box>
        <Box width={"100%"}>{compon(comp)}</Box>
      </Box>
    </>
  );
};

export default Admin;
