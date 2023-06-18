import React from "react";
import Box from "@mui/material/Box";
import "../App.css";
import Rating from "@mui/material/Rating";
import dawood from "../assets/dawood.png";
import sahil from "../assets/sahil.png";
import nouman from "../assets/nouman.png";

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
        width={{ lg: "33%", xs: "100%" }}
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        className="shadow-lg shadow-gray-400 review"
      >
        <Box>
          <Box
            borderRadius={"50%"}
            border={"1px solid grey"}
            sx={{
              width: "200px",
              height: "150px",
              backgroundImage: `url(${dawood})`,
              // objectFit: "fill"
              alignContent: "center",
              backgroundRepeat: "no-repeat",
              // backgroundSize: "contain",
            }}
          ></Box>
          <Box textAlign={"center"} fontWeight={"bold"} fontSize={"20px"}>
            Dawood Khatri
          </Box>
          <Rating
            name="read-only"
            value={4}
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
          very good service provided by them website is very smooth and user
          friendly
        </Box>
      </Box>
      <Box
        borderRadius="5px 40px 5px 40px"
        borderTop={"2px solid yellow"}
        borderRight={"2px solid yellow"}
        p={2}
        width={{ lg: "33%", xs: "100%" }}
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        className="shadow-lg shadow-gray-400 review"
      >
        <Box>
          <Box
            borderRadius={"50%"}
            border={"1px solid grey"}
            sx={{
              width: "200px",
              height: "150px",
              backgroundImage: `url(${nouman})`,
              // objectFit: "fill"
              alignContent: "center",
              backgroundRepeat: "no-repeat",
              // backgroundSize: "contain",
            }}
          ></Box>
          <Box textAlign={"center"} fontWeight={"bold"} fontSize={"20px"}>
            Nouman
          </Box>
          <Rating
            name="read-only"
            value={4}
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
          very good service provided by them website is very smooth and user
          friendly
        </Box>
      </Box>
      <Box
        borderRadius="5px 40px 5px 40px"
        borderTop={"2px solid yellow"}
        borderRight={"2px solid yellow"}
        p={2}
        width={{ lg: "33%", xs: "100%" }}
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        className="shadow-lg shadow-gray-400 review"
      >
        <Box>
          <Box
            borderRadius={"50%"}
            border={"1px solid grey"}
            sx={{
              width: "200px",
              height: "150px",
              backgroundImage: `url(${sahil})`,
              // objectFit: "fill"
              alignContent: "center",
              backgroundRepeat: "no-repeat",
              // backgroundSize: "contain",
            }}
          ></Box>
          <Box textAlign={"center"} fontWeight={"bold"} fontSize={"20px"}>
            Sahil
          </Box>
          <Rating
            name="read-only"
            value={4}
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
          very good service provided by them website is very smooth and user
          friendly
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
