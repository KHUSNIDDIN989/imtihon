import * as React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "../assets/img/image8.png";
import ImgLogo from "../assets/img/image11.png";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Selected.css";
export default function Selected() {
  return (
    <>
      <Header />
      <div className="col-md-12">
        <div className=" d-flex flex-wrap img__card">
          <div className="w-100 d-flex justify-content-between">
            <FavoriteIcon />
            <img width="86" height="53" src={ImgLogo} alt="" />
          </div>
          <div>
            <img width="300" src={Image} alt="" />
            <img width="300" src={Image} alt="" />
            <img width="300" src={Image} alt="" />
            <img width="300" src={Image} alt="" />
            <img width="300" src={Image} alt="" />
          </div>
          <div className="w-100 d-flex justify-content-between mt-5">
            <h2>BOROFONE BH32</h2>
            <h4 className="text-warning">
              2 927 ₸ <span className="fw-normal fs-5">-20%</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 my-3">
          <div className="card ">
            <div className="borderr">
              <p>Описание и характеристики</p>
            </div>
            <div className="mx-5 my-3">
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
              <p>Активное шумоподавление: Нет</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column py-3">
          <button className="btn btn-dark m-2">Купить!</button>
          <button className="btn btn-dark m-2">
            <ShoppingCartIcon />
            Добавить в корзину
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
