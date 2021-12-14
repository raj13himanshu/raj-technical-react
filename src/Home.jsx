import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Service from "./Service";
import About from "./Aboutus";
import Contact from './Contact'
import Footer from "./Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
