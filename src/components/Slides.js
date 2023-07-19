import React from "react";
import Carousel from "react-material-ui-carousel";
import banner1 from "../assets/bannernn1.png";
import banner2 from "../assets/bannernn3.png";
import banner3 from "../assets/bannern3.png";
import Box from "@mui/material/Box";

export default function Slides(props) {
  var items = [
    {
      img: banner1,
    },
    {
      img: banner2,
    },
    {
      img: banner3,
    },
  ];

  return (
    <Carousel sx={{ zIndex: -1 }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Box class="w-full  py-1">
      {/* <div
        style={{
          width: "100%",
          height: "450px",
          backgroundImage: `url(${props.item.img})`,
          objectFit: "fill",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div> */}
      <img src={props.item.img} alt="di" width={"100%"} height="100%" />
    </Box>
  );
}
