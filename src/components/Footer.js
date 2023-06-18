import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <div className="px-8 bg-amber-500 ">
      <div className="flex justify-center p-2">
        <div className="rounded-full p-1 bg-white">
          {" "}
          <InstagramIcon />
        </div>
        &nbsp; &nbsp;
        <div className="rounded-full p-1 bg-white">
          <FacebookIcon />
        </div>
        &nbsp; &nbsp;
        <div className="rounded-full p-1 bg-white">
          <TwitterIcon />
        </div>
      </div>
      <Box className="text-center" fontFamily={"cursive"}>
        This website is developed by RP_WEB
      </Box>
      <Box className="text-center" fontFamily={"cursive"}>
        Thankyou for visiting our website
      </Box>
      <Box className="text-center" fontFamily={"cursive"}>
        Do follow me on social media
      </Box>
    </div>
  );
};

export default Footer;
