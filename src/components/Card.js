import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import banner from "../assets/banner1.jpg";

export default function ImgMediaCard() {
  return (
    <Card
      position={"relative"}
      sx={{ maxWidth: 345 }}
      className="drop-shadow-lg"
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={banner}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          textAlign={"center"}
          fontWeight={"bold"}
          component="div"
        >
          Lizard
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Price
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Product description
        </Typography>
      </CardContent>
      <CardActions className="flex justify-around">
        <button className="bg-yellow-400 p-2  rounded-md text-base hover:outline outline-2">
          View Product
        </button>
        <button className="bg-yellow-400 p-2  rounded-md text-base hover:outline outline-2">
          Add To Cart
        </button>
      </CardActions>
    </Card>
  );
}
