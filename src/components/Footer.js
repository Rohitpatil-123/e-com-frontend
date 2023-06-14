import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="px-8 bg-amber-400 ">
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
      <div className="text-center">thankyou for visiting our website</div>
      <div className="text-center">do follow us on social media</div>
    </div>
  );
};

export default Footer;
