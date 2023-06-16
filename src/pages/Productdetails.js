import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Rating from "@mui/material/Rating";
import Plogo from "../assets/banner2.jpg";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function createData(feature, content) {
  return { feature, content };
}
const rows = [
  createData("Brand", "Apple"),
  createData("Model", "308 new model"),
  createData("Price", 7489),
  createData("Headphone type", "over ear"),
  createData("Connectivity", "wireless"),
];

const Product = (props) => {
  const [value, setValue] = React.useState(3);
  const [data, setData] = React.useState("");
  const [params] = useSearchParams();
  let url = "";
  const fetchdata = async () => {
    try {
      const resdata = await axios.get(
        `http://localhost:5000/prodid/${params.get("id")}`
      );

      setData(resdata.data.data[0]);
      url = resdata.data.data[0].image.url;
      console.log(url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  });

  return (
    <>
      <Box px={{ lg: 20, xs: 1 }} mt={10}>
        <Grid container>
          <Grid item lg={6} xs={12} display="flex" justifyContent={"center"}>
            <Box
              sx={
                {
                  // border: "1px solid black",
                  // position: "relative",
                  // width: "100%",
                  // height: "100%",
                }
              }
            >
              <img
                src={data.image.url}
                alt="BigCo Inc. logo"
                width="100%"
                height="100%"
                position="relative !important"
                object-fit="cover" // Optional
              />
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
            mt={{ xs: 5, lg: 0 }}
            px={{ lg: 10, xs: 3 }}
          >
            <Box fontFamily={"poppins"}>
              <Typography variant="h4" fontWeight={"bold"}>
                {data.name}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom mt={1}>
                {data.description}
              </Typography>
              <Rating
                name="read-only"
                value={value}
                readOnly
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "green",
                  },
                  "& .MuiRating-iconHover": {
                    color: "purple",
                  },
                }}
              />
              <hr />
              <Typography variant="h6" mt={3} fontWeight="bold">
                Prize {data.price} Ruppes
              </Typography>
              <Typography variant="caption">
                suggested payments with 6 months special financing
              </Typography>
              <Typography mt={2}>{data.description}</Typography>

              <Box
                mt={5}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                gap={{ lg: 8, xs: 2 }}
                width="100%"
              >
                <button className="w-48 bg-amber-800 text-white font-bold py-2 px-4 rounded-full">
                  Buy Now
                </button>

                <button className="w-48 border border-green-800 font-bold py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          // border={"1px solid black"}
          mt={{ lg: 4, xs: 2 }}
          mb={2}
          p={1}
          gap={{ lg: 3, xs: 2 }}
        >
          <Grid
            item
            lg={5.8}
            xs={12}
            p={{ lg: 4, xs: 2 }}
            sx={{ backgroundColor: "#e5e7eb", borderRadius: 2 }}
          >
            <Box>
              <Typography variant="h6" fontWeight={"bold"} mb={1}>
                General
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow
                        key={row.feature}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          "&:nth-of-type(odd)": {
                            backgroundColor: "white",
                          },
                          "&:nth-of-type(even)": {
                            backgroundColor: "#e5e7eb",
                          },
                          borderRadius: "10px",
                        }}
                      >
                        <TableCell>{row.feature}</TableCell>
                        <TableCell>{row.content}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid
            item
            lg={5.8}
            xs={12}
            p={{ lg: 4, xs: 2 }}
            sx={{ backgroundColor: "#e5e7eb", borderRadius: 2 }}
          >
            <Box>
              <Typography variant="h6" fontWeight={"bold"} mb={1}>
                Product Details
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow
                        key={row.feature}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          "&:nth-of-type(odd)": {
                            backgroundColor: "white",
                          },
                          "&:nth-of-type(even)": {
                            backgroundColor: "#e5e7eb",
                          },
                        }}
                      >
                        <TableCell>{row.feature}</TableCell>
                        <TableCell>{row.content}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Product;
