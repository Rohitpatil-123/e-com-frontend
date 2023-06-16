import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Custcard from "../components/Custcard";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Reviews from "../components/Reviews";
import { Typography } from "@mui/material";
import axios from "axios";
import Slides from "../components/Slides";
import Loader from "../components/Loader";

const Searchdash = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);

  const getdata = async () => {
    const resdata = await axios.get("http://localhost:5000/getallproduct");
    setData(resdata.data.data);
  };

  useEffect(() => {
    getdata();
    console.log(data);
  }, [search, price]);
  return (
    <Box px={{ lg: 10, xs: 1 }} py={1}>
      <Slides />
      <Box p={2}>
        <Box borderBottom={"1px solid grey"} padding={2}>
          <FormControl
            sx={{
              m: 1,
              width: { lg: "70ch", md: "50ch", xs: "20ch" },
              color: "yellow",
              position: "relative",
            }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-amount">Search</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={<SearchIcon position="start">$</SearchIcon>}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </FormControl>
          <Select
            value={price}
            placeholder="select the category"
            onChange={(event) => setPrice(event.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            // sx={{ zIndex: -1 }}
          >
            <MenuItem value="">
              <em>Price Filters</em>
            </MenuItem>
            <MenuItem value={10}> less than 10k</MenuItem>
            <MenuItem value={20}> less than 20k</MenuItem>
            <MenuItem value={30}> less than 30k</MenuItem>
            <MenuItem value={30}>Greater Than 30k</MenuItem>
          </Select>
        </Box>
        {data.length !== 0 ? (
          <Box
            marginY={2}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            gap={{ lg: 2, xs: 1 }}
          >
            {data
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((product) => {
                return <Custcard data={product} name="Add To Cart" />;
              })}
          </Box>
        ) : (
          <Loader />
        )}
      </Box>
      <Typography
        variant="h4"
        textAlign={"center"}
        fontFamily={"Roboto"}
        fontWeight={"bold"}
      >
        Customer Reviews
      </Typography>
      <Reviews />
    </Box>
  );
};

export default Searchdash;
