import React from "react";
import Comp from "../assets/mi.jpeg";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useContext } from "react";
import { Context } from "..";

const Comcard = (props) => {
  const { Authenticated, setAuthenticated, loading, setLoading } =
    useContext(Context);
  const navigate = useNavigate();
  const addcart = async () => {
    try {
      if (Authenticated) {
        const resdata = await axios.get(
          `http://localhost:5000/addcart/${props.data._id}`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (resdata.data.success == true) {
          toast.success("added to cart");
        } else {
          toast.error("error");
        }
      } else {
        toast.error("Login or Register first");
      }
    } catch (error) {}
  };

  const handleclick = () => {
    try {
      navigate(`/Product?id=${props.data._id}`);
    } catch (error) {}
  };
  return (
    <div className="gallary">
      <img
        src={props.data.image.url}
        alt="ncs"
        className="gallary-img"
        onClick={handleclick}
      />
      <div style={{ textAlign: "center", fontSize: "20px" }}>
        {props.data.name}
      </div>
      <div style={{ textAlign: "center", fontSize: "18px" }}>
        &#8377; {props.data.price}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className="bg-yellow-400 p-2 font-bold rounded-md text-base hover:outline outline-2 w-10/12 "
          onClick={addcart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Comcard;
