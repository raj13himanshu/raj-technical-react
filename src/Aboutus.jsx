import React from "react";
import web from "../src/images/hero-img.png";
import Commom from "./Commom";

const Aboutus = () => {
  return (
    <>
      <Commom
        name="Welcome to About us page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default Aboutus;
