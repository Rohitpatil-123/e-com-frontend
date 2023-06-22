import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Addproduct from "../components/Addproduct";
import Delproduct from "../components/Delproduct";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Orderpage from "./Orderpage";

const Admin = () => {
  const [comp, setComp] = useState("1");
  const compon = (comp) => {
    switch (comp) {
      case "2":
        return <Addproduct />;
      case "3":
        return <Delproduct />;
      case "4":
        return <Orderpage />;
      default:
        return <Addproduct />;
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
          <button
            className="bg-yellow-400 p-2 font-bold  rounded-md text-base hover:outline outline-2"
            onClick={() => {
              setComp("2");
            }}
          >
            <AddToPhotosIcon /> Add Product
          </button>
          <button
            className="bg-yellow-400 p-2 font-bold rounded-md text-base hover:outline outline-2"
            onClick={() => {
              setComp("3");
            }}
          >
            <DeleteIcon /> Delete Product
          </button>
          <button
            className="bg-yellow-400 p-2 font-bold rounded-md text-base hover:outline outline-2"
            onClick={() => {
              setComp("4");
            }}
          >
            <ListAltIcon /> Orders
          </button>
        </Box>
        <Box width={"100%"}>{compon(comp)}</Box>
      </Box>
    </>
  );
};

export default Admin;
