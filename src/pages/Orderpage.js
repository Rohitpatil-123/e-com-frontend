import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
const Orderpage = () => {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    const res = await axios.get("http://localhost:5000/orders", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    setdata(res.data.resdata);
  };

  const handleclick = async (id) => {
    const resdata = await axios.get(`http://localhost:5000/deleteorder/${id}`);
    if (resdata.data.success == true) {
      toast.success("Order Completed");
    } else {
      toast.error("error");
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <Box px={{ lg: "10px", xs: "3px" }} py={"3px"}>
      {data.map((item) => {
        return (
          <Box
            p={1}
            my={2}
            borderRadius={"8px"}
            className="shadow-md shadow-gray-400 imgtag"
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Customer Name:- {item.userid.name}
            </Typography>
            <Typography variant="overline">list of Items</Typography>
            <Box display={"flex"} width={"100%"}>
              <Box width={{ lg: "50%", xs: "40%" }}>
                <ol type="1">
                  {item.items.map((item) => {
                    return <li>&#9650; {item.name}</li>;
                  })}
                </ol>
              </Box>
              <Box width={{ lg: "30%", xs: "20%" }}>
                <Typography fontSize={"18px"} fontWeight={"bold"}>
                  Total :{item.total}
                </Typography>
              </Box>
              <Box width={{ lg: "20%", xs: "20%" }}>
                {/* <Typography>Order Status</Typography> */}
                <button
                  className="bg-yellow-400 p-2 font-bold rounded-md text-base hover:outline outline-2"
                  onClick={() => {
                    handleclick(item._id);
                  }}
                >
                  Complete order
                </button>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Orderpage;
