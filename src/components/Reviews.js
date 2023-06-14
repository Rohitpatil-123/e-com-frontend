import React from "react";
import Box from "@mui/material/Box";
import "../App.css";
import Rating from "@mui/material/Rating";

const Reviews = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      flexDirection={{ lg: "row", xs: "column" }}
      px={{ lg: 10, xs: 2 }}
      py={{ lg: 4, xs: 1 }}
      gap={2}
    >
      <Box
        borderRadius="5px 40px 5px 40px"
        borderTop={"2px solid yellow"}
        borderRight={"2px solid yellow"}
        p={2}
        width="33%"
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        className="shadow-lg shadow-gray-400 review"
      >
        <Box>
          <Box
            borderRadius={"50%"}
            width={"120px"}
            height="120px"
            border={"1px solid grey"}
            sx={{ backgroundColor: "lightgray", overflow: "hidden" }}
          ></Box>
          <Box textAlign={"center"}>Dawood Khatri</Box>
          <Rating
            name="read-only"
            value={5}
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
        </Box>
        <Box>
          very good service provided by them cdbchsdc dchsbdcsd csdhcbsdhc
          dcshjdcs dcshdc sd{" "}
        </Box>
      </Box>
      <Box
        borderRadius="5px 40px 5px 40px"
        borderTop={"2px solid yellow"}
        borderRight={"2px solid yellow"}
        p={2}
        width="33%"
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        className="shadow-lg shadow-gray-400 review"
      >
        <Box>
          <Box
            borderRadius={"50%"}
            width={"120px"}
            height="120px"
            border={"1px solid grey"}
            sx={{ backgroundColor: "lightgray", overflow: "hidden" }}
          ></Box>
          <Box textAlign={"center"}>Dawood Khatri</Box>
          <Rating
            name="read-only"
            value={5}
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
        </Box>
        <Box>
          very good service provided by them cdbchsdc dchsbdcsd csdhcbsdhc
          dcshjdcs dcshdc sd{" "}
        </Box>
      </Box>
      <Box
        borderRadius="5px 40px 5px 40px"
        borderTop={"2px solid yellow"}
        borderRight={"2px solid yellow"}
        p={2}
        width="33%"
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        className="shadow-lg shadow-gray-400 review"
      >
        <Box>
          <Box
            borderRadius={"50%"}
            width={"120px"}
            height="120px"
            border={"1px solid grey"}
            sx={{ backgroundColor: "lightgray", overflow: "hidden" }}
          ></Box>
          <Box textAlign={"center"}>Dawood Khatri</Box>
          <Rating
            name="read-only"
            value={5}
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
        </Box>
        <Box>
          very good service provided by them cdbchsdc dchsbdcsd csdhcbsdhc
          dcshjdcs dcshdc sd{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
