import React from "react";
import Comp from "../assets/mi.jpeg";
import "../App.css";

const Comcard = (props) => {
  return (
    <div className="gallary">
      <img src={props.data.image.url} alt="ncs" className="gallary-img" />
      <div style={{ textAlign: "center", fontSize: "20px" }}>
        {props.data.name}
      </div>
      <div style={{ textAlign: "center", fontSize: "18px" }}>
        &#8377; {props.data.price}
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="bg-yellow-400 p-2 font-bold rounded-md text-base hover:outline outline-2 w-10/12 ">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Comcard;
