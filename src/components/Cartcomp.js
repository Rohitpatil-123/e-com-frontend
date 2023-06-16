import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import image from "../assets/banner1.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cartcomp = (props) => {
  const [count, setCount] = React.useState(1);
  const plus = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1);
  };
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
              {count < 2 ? (
                <RemoveIcon fontSize="small" disabled />
              ) : (
                <RemoveIcon fontSize="small" onClick={sub} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cartcomp;
