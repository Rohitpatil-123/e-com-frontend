import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import Custcard from "./Custcard";

const Products = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1048, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-8">
      <div className="text-2xl p-2">T-Shirts</div>
      <Carousel responsive={responsive} className="py-4">
        <Custcard />
        <Custcard />
        <Custcard />
        <Custcard />
        <Custcard />
        <Custcard />
      </Carousel>
      <div className="text-2xl ">Jeans</div>
      <Carousel responsive={responsive} className="py-4">
        <Custcard />
        <Custcard />
        <Custcard />
        <Custcard />
        <Custcard />
        <Custcard />
      </Carousel>
    </div>
  );
};

export default Products;
