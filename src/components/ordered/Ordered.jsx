import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Korzinka from "../assets/img/Illustration.png";
function Ordered() {
  return (
    <div>
      <Header />
      <div className="col-md-12">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={Korzinka} alt="" />
          <h3>Корзина пуста</h3>
          <p>Но это никогда не поздно исправить :)</p>
          <button className="btn btn-dark mb-5 px-5">В каталог товаров</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ordered;
