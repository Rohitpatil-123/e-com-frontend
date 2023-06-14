import Box from "@mui/material/Box";
import React from "react";
import { Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "../pages/Productdetails";
import "../App.css";

const Custcard = (props) => {
  const navigate = useNavigate();
  const handleclick = async () => {
    try {
      navigate(`/Product?id=${props.data._id}`);
    } catch (error) {}
  };
  return (
    <Box
      width={"250px"}
      borderRadius={"8px"}
      className="shadow-md shadow-gray-400 imgtag"
      p={2}
      onClick={handleclick}
    >
      <Box width="100%">
        <img
          src={props.data.image.url}
          alt="image"
          height="150px"
          width="100%"
          sx={{ objectFit: "fill" }}
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Typography variant="h6" textAlign={"center"}>
          {props.data.name}
        </Typography>
        <Typography textAlign={"center"}>&#8377; {props.data.price}</Typography>
        <button className="bg-yellow-400 p-2  rounded-md text-base hover:outline outline-2">
          Add To Cart
        </button>
      </Box>
    </Box>
  );
};

export default Custcard;
