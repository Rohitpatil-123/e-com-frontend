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
  const [total, setTotal] = useState(0);
  const [state, setState] = useState("");
  const [success, setsuccess] = useState(false);
  const [count, setCount] = useState({});

  const navigate = useNavigate();
  const fetchcart = async () => {
    const resdata = await axios.get("http://localhost:5000/cartelem", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    if (resdata.data.success === true) {
      setCount(resdata.data);
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
    console.log(resdata.data);

    paymentfun(resdata.data.data);
    // if (resdata.data.success) {
    //   toast.success("Your order has been placed");
    //   navigate("/");
    // } else {
    //   toast.error("something went wrong");
    // }
  };

  const paymentfun = async (data) => {
    var options = {
      key: "rzp_test_g7U49db3NjnkdM", // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      name: "Rcom Store",
      order_id: data.id,
      handler: function (response) {
        completepayment();
      },
      theme: {
        color: "rgb(241, 217, 81)",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const completepayment = async () => {
    const res = await axios.get("http://localhost:5000/orderpay", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    if (res.data.success) {
      toast.success("Your order has been placed");
      navigate("/");
    }
  };
  useEffect(() => {
    fetchcart();
  }, [count, total]);
  if (total == 0) return <Empty />;
  return (
    <>
      {count === {} ? (
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
                  {count.cartdata.map((products, index) => {
                    return (
                      <Cartcomp
                        data={products}
                        list={count.list}
                        index={index}
                        pagest={state}
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
                          {count.cartdata.length}
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
                            fontSize: "25px",
                            fontWeight: "bold",
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
