import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Cartcomp from "../components/Cartcomp";

const Cartpage = () => {
  return (
    <Box mt={1} mx={{ lg: 6, xs: 2 }}>
      {/* <Typography variant="h5">Cart Elements</Typography> */}
      <Box display={"flex"} flexDirection={{ lg: "row", xs: "column" }}>
        <Box
          className="shadow-md shadow-gray-400"
          width={{ lg: "72%", xs: "100%" }}
          style={{ padding: "5px", borderRadius: "5px" }}
        >
          <Cartcomp />
          <Cartcomp />
          <Cartcomp />
          <Cartcomp />
          <Cartcomp />
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
                  47
                </td>
              </tr>
            </tbody>
          </table>
          <Box display={"flex"} justifyContent={"center"} p={2}>
            <Button style={{ backgroundColor: "orange", color: "black" }}>
              PLACE ORDER
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cartpage;
