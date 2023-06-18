import Box from "@mui/material/Box";
import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Context } from "..";
import { useContext } from "react";

const Custcard = (props) => {
  const navigate = useNavigate();
  const { Authenticated, setAuthenticated, loading, setLoading } =
    useContext(Context);

  const addcart = async () => {
    try {
      if (Authenticated) {
        const resdata = await axios.get(
          `http://localhost:5000/addcart/${props.data._id}`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (resdata.data.success == true) {
          toast.success("added to cart");
        } else {
          toast.error("error");
        }
      } else {
        toast.error("Login or Register first");
      }
    } catch (error) {}
  };

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
    >
      <Box width="100%">
        <img
          src={props.data.image.url}
          alt="im"
          height="150px"
          width="100%"
          sx={{ objectFit: "fill", zIndex: 1 }}
          onClick={handleclick}
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Typography variant="h6" textAlign={"center"}>
          {props.data.name}
        </Typography>
        <Typography textAlign={"center"}>&#8377; {props.data.price}</Typography>
        <button
          className="bg-yellow-400 p-2 font-bold rounded-md text-base hover:outline outline-2"
          onClick={addcart}
        >
          {props.name}
        </button>
      </Box>
    </Box>
  );
};

export default Custcard;
