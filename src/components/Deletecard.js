import Box from "@mui/material/Box";
import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const Deletecard = (props) => {
  const deleteprod = async () => {
    const resdata = await axios.delete(
      `https://e-com-rksk.onrender.com/product/${props.data._id}`,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    if (resdata.data.success == true) {
      toast.success("item deleted");
    } else {
      toast.error("error occured");
    }
  };
  return (
    <Box
      width={"250px"}
      borderRadius={"8px"}
      className="shadow-md shadow-gray-400 imgtag"
      p={2}
    >
      <Box width="100%">
        <img
          src={props.data.image.url}
          alt="im"
          height="150px"
          width="100%"
          sx={{ objectFit: "fill", zIndex: 1 }}
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Typography variant="h6" textAlign={"center"}>
          {props.data.name}
        </Typography>
        <Typography textAlign={"center"}>&#8377; {props.data.price}</Typography>
        <button
          className="bg-yellow-400 p-2 font-bold rounded-md text-base hover:outline outline-2"
          onClick={deleteprod}
        >
          {props.name}
        </button>
      </Box>
    </Box>
  );
};

export default Deletecard;
