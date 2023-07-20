import React from "react";
import "../App.css";
import Comcard from "./Comcard";
import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Slider = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const res = await axios.get(
      "https://e-com-rksk.onrender.com/product/mobile"
    );
    setData(res.data.data);
    console.log(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <Typography variant="h4">Popular mobiles</Typography>
      <div className="gall">
        {data.map((item) => (
          <Comcard data={item} />
        ))}
      </div>
    </>
  );
};

export default Slider;
