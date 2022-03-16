import * as React from "react";

import Banner from "../assets/img/banner.png";

import Attendance from "../card/Card";
import Header from "../header/Header"
import Footer from "../footer/Footer"
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="banner">
        <h1>Аксессуары для Iphone 13 Pro Max</h1>
        <img src={Banner} alt="banner" />
      </div>
      <Attendance />
      <Footer/>
    </>
  );  
}
