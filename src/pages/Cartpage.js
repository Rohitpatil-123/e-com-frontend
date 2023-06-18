import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Cartcomp from "../components/Cartcomp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Empty from "../components/Empty";
import Loader from "../components/Loader";

const Cartpage = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [action, setaction] = useState("");
  const [success, setsuccess] = useState(false);
  const navigate = useNavigate();
  const fetchcart = async () => {
    const resdata = await axios.get("http://localhost:5000/cartelem", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    if (resdata.data.success === true) {
      setData(resdata.data.cartdata);
      setTotal(resdata.data.total);
      setsuccess(resdata.data.success);
    } else {
      console.log("cart is empty");
    }
  };
  const proceed = async () => {
    const resdata = await axios.get("http://localhost:5000/placeorder", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    if (resdata.data.success) {
      toast.success("Your order has been placed");
      navigate("/");
    } else {
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    fetchcart();
  }, [data, total]);
  return (
    <>
      {data == [] ? (
        <Loader />
      ) : (
        <>
          {success ? (
            <Box mt={1} mx={{ lg: 6, xs: 2 }} minHeight={"78vh"}>
              <Typography
                variant="h5"
                textAlign={"center"}
                fontWeight={"bold"}
                fontFamily={"cursive"}
              >
                Cart Elements
              </Typography>
              <Box display={"flex"} flexDirection={{ lg: "row", xs: "column" }}>
                <Box
                  className="shadow-md shadow-gray-400"
                  width={{ lg: "72%", xs: "100%" }}
                  style={{ padding: "5px", borderRadius: "5px" }}
                >
                  {data.map((products) => {
                    return (
                      <Cartcomp
                        data={products}
                        key={products._id}
                        ac={action}
                      />
                    );
                  })}
                </Box>

                <Box
                  className="shadow-md shadow-gray-400"
                  mx={{ lg: 2 }}
                  width={{ lg: "25%", xs: "100%" }}
                  padding={{ lg: "18px", xs: "10px" }}
                  style={{ borderRadius: "5px" }}
                  position={{ lg: "fixed" }}
                  right={10}
                >
                  <Typography variant="h6" p={1} className="text-gray-400">
                    PRICE DETAILS
                  </Typography>
                  <hr />
                  <table width={"100%"}>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            fontSize: "18px",
                          }}
                        >
                          Total Items
                        </td>
                        <td
                          style={{
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            fontSize: "18px",
                          }}
                        >
                          222
                        </td>
                      </tr>
                      <tr>
                        {" "}
                        <td
                          style={{
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            fontSize: "18px",
                          }}
                        >
                          delivery charges{" "}
                        </td>
                        <td
                          style={{
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            fontSize: "18px",
                          }}
                        >
                          free
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <hr />
                  <table width={"100%"}>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            fontSize: "18px",
                          }}
                        >
                          Grand Total
                        </td>
                        <td
                          style={{
                            paddingTop: "15px",
                            paddingBottom: "15px",
                            fontSize: "18px",
                          }}
                        >
                          {total}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Box display={"flex"} justifyContent={"center"} p={2}>
                    <Button
                      style={{ backgroundColor: "orange", color: "black" }}
                      onClick={proceed}
                    >
                      PLACE ORDER
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Empty />
          )}
        </>
      )}
    </>
  );
};

export default Cartpage;
