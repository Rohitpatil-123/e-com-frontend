import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import toast from "react-hot-toast";
import axios from "axios";
import "../App.css";

const Addproduct = () => {
  const [productImg, setProductImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };
  const values = {
    name,
    price,
    description,
    category,
    image: productImg,
  };
  const handleclick = async () => {
    console.log(values);
    try {
      const { data } = await axios.post(
        "https://e-com-rksk.onrender.com/addproduct",
        {
          name,
          price,
          description,
          category,
          image: productImg,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error("some error");
      console.log(error);
    }
  };

  const handlereset = () => {
    setName("");
    setPrice("");
    setDescription("");
    setCategory("");
    setProductImg("");
  };

  return (
    <Box width={"100%"} mt={1} px={{ lg: 5, xs: 1 }}>
      <Box className="addproduct">
        <Typography variant="h5" marginBottom={2}>
          Add product details
        </Typography>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box m={{ lg: 2 }} width="90%">
            <TextField
              m={2}
              required
              fullWidth
              id="outlined-required"
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Box>

          <Box m={2} width="90%">
            <TextField
              m={2}
              required
              fullWidth
              id="outlined-required"
              label="Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </Box>
          <Box m={2} width="90%">
            <TextField
              m={2}
              required
              fullWidth
              id="outlined-required"
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Box>
          <Box m={2} width="90%">
            <Select
              value={category}
              placeholder="select the category"
              onChange={(event) => setCategory(event.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>select the category</em>
              </MenuItem>
              <MenuItem value={"mobile"}>Mobile</MenuItem>
              <MenuItem value={"electronics"}>Electronics</MenuItem>
              <MenuItem value={"grocery"}>Grocery</MenuItem>
            </Select>
          </Box>
          <Box m={2} width="90%">
            <input
              id="imgUpload"
              accept="image/*"
              type="file"
              onChange={handleProductImageUpload}
              required
            />
          </Box>
          <Box
            mt={5}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            gap={{ lg: 8, xs: 2 }}
            width="100%"
            marginBottom={2}
          >
            <button
              className="w-48 bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
              onClick={handleclick}
            >
              Add product
            </button>
            <button
              className="w-48 text-black border border-yellow-500 font-bold py-2 px-4 rounded-full"
              onClick={handlereset}
            >
              Reset
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Addproduct;
