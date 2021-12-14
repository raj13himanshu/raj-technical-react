import React from "react";

import web from "../src/images/img2.svg";
import Commom from "./Commom";


const Header = () => {
  return (
    <>
      
      <Commom
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Header;
