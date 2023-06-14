import React from "react";
import Carousel from "react-material-ui-carousel";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import Box from "@mui/material/Box";

export default function Slides(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: banner1,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: banner2,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
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
    <Box class="w-full px-8 py-1">
      <div
        class="w-full h-80 bg-cover  bg-no-repeat"
        style={{ backgroundImage: `url(${props.item.img})` }}
      ></div>
    </Box>
  );
}
