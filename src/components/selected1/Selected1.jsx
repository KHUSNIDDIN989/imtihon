import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import image from "../assets/img/Image.png";

function Selected1() {
  return (
    <div>
      <Header />
      <p>Наушники</p>
      <div className="col-md-12 mb-3 d-flex justify-content-between flex-wrap">
        <div to="/selected" className="card h-100 card__card ">
          <div className="w-100 px-3">
            <FavoriteBorderIcon
              onClick={(e) => console.log("Hello")}
              className="fovarit"
            />
          </div>
          <img width="219" height="237" src={image} alt="ew" />
          <div className="card__bady w-100 px-4 d-flex justify-content-between ">
            <p>Apple BYZ S852I</p>
            <p className="text-warning fw-bold">
              2927 ₸ <br />
              <span className="text-decoration-line-through fw-normal">
                3527 ₸
              </span>
            </p>
          </div>
          <div className="w-100 d-flex px-4">
            <h4 className="text-warning ">&#x2605;</h4>
            <h5 className="mx-2 mt-1 text-secondary">4.7</h5>
          </div>
        </div>
        <div className="card h-100 card__card ">
          <div className="w-100 px-3">
            <FavoriteBorderIcon className="fovarit" />
          </div>
          <img width="219" height="237" src={image} alt="ew" />
          <div className="card__bady w-100 px-4 d-flex justify-content-between ">
            <p>Apple BYZ S852I</p>
            <p className="text-warning fw-bold">
              2927 ₸ <br />
              <span className="text-decoration-line-through fw-normal">
                3527 ₸
              </span>
            </p>
          </div>
          <div className="w-100 d-flex px-4">
            <h4 className="text-warning ">&#x2605;</h4>
            <h5 className="mx-2 mt-1 text-secondary">4.7</h5>
          </div>
        </div>
        <div className="card h-100 card__card ">
          <div className="w-100 px-3">
            <FavoriteBorderIcon className="fovarit" />
          </div>
          <img width="219" height="237" src={image} alt="ew" />
          <div className="card__bady w-100 px-4 d-flex justify-content-between ">
            <p>Apple BYZ S852I</p>
            <p className="text-warning fw-bold">
              2927 ₸ <br />
              <span className="text-decoration-line-through fw-normal">
                3527 ₸
              </span>
            </p>
          </div>
          <div className="w-100 d-flex px-4">
            <h4 className="text-warning ">&#x2605;</h4>
            <h5 className="mx-2 mt-1 text-secondary">4.7</h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Selected1;
