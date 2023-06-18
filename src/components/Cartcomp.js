import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { toast } from "react-hot-toast";
import { Context } from "..";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cartcomp = (props) => {
  const [count, setCount] = React.useState(1);
  const { Authenticated, setAuthenticated, loading, setLoading } =
    useContext(Context);
  const navigate = useNavigate();
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
        if (resdata.data.success === true) {
          toast.success("added to cart");
        } else {
          toast.error("error");
        }
      } else {
        toast.error("Login or Register first");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const delcart = async () => {
    try {
      if (Authenticated) {
        const resdata = await axios.get(
          `http://localhost:5000/cartremove/${props.data._id}`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (resdata.data.success === true) {
          toast.success("removed from cart");
        } else {
          toast.error("error");
        }
      } else {
        toast.error("Login or Register first");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const plus = () => {
    addcart();
    setCount(count + 1);
  };
  const sub = () => {
    delcart();
    setCount(count - 1);
    navigate("/");
  };
  useEffect(() => {}, [count, props.ac]);
  return (
    <Box
      height="200px"
      style={{ display: "flex", padding: "2px" }}
      mx={1}
      my={1}
      borderBottom={"2px solid grey"}
    >
      <Box width="30%" mx={1}>
        <img
          src={props.data.image.url}
          alt="im"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "fill",
          }}
        />
      </Box>
      <Box
        style={{ display: "flex", flexDirection: "column" }}
        width="70%"
        mx={1}
        textOverflow={"inherit"}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          {props.data.name}
        </Typography>
        <Typography variant="h6">&#8377; {props.data.price}</Typography>
        <Typography>{props.data.description}</Typography>
        <Box display={"flex"} justifyContent="flex-start" mt={1} gap={3}>
          <Box display={"flex"} justifyContent="flex-start" gap={4}>
            <Box sx={{ cursor: "pointer" }}>
              <AddIcon fontSize="small" onClick={plus} />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              {count}
            </Box>
            <Box sx={{ cursor: "pointer" }}>
              <RemoveIcon fontSize="small" onClick={sub} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cartcomp;
