import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import image from "../assets/banner1.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cartcomp = () => {
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
    >
      <Box width="30%" mx={1}>
        <img src={image} alt="image" width="100%" height="100%" />
      </Box>
      <Box
        style={{ display: "flex", flexDirection: "column" }}
        width="60%"
        mx={1}
        textOverflow={"inherit"}
      >
        <Typography variant="h5">Name of product</Typography>
        <Typography variant="h6">89338</Typography>
        <Typography>
          description of the product x sjhbxs csdcbsdhc s cdshdcsghdc sdc
          sdgcvsd csdcsvdgcsdc sdc sgc sdgc{" "}
        </Typography>
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
