import { Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import Custcard from "./Custcard";
import Loader from "./Loader";
import axios from "axios";
import Deletecard from "./Deletecard";

const Delproduct = () => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const resdata = await axios.get("http://localhost:5000/getallproduct");
    setData(resdata.data.data);
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <Box>
      {data.length !== 0 ? (
        <Box
          marginY={2}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          gap={{ lg: 2, xs: 1 }}
        >
          {data.map((product) => {
            return <Deletecard data={product} name="Delete" />;
          })}
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Delproduct;
