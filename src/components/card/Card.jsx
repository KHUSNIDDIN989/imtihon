import React from "react";
import image from "../assets/img/Image.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink } from "react-router-dom";
import "./Card.css";
import { useState, useEffect } from "react";

function Attendance() {
  const [datas, setDatas] = useState({});

  useEffect(() => {
    fetch("https://jsonserver989.herokuapp.com/salom/")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
 
  return (
    <div className="container">
      <div className="main my-5 ">
        <div className="row">
          <p>Чехлы</p>
          <div className="col-md-12 mb-5 d-flex justify-content-between">
            {datas.chexol?.map((items) => {
              return (
                <div key={items.id} className="card h-100 card__card ">
                  <img
                    width="151"
                    height="292"
                    src={items.productImage}
                    alt="ew"
                  />
                  <p className="mt-2">{items.productTitle}</p>
                </div>
              );
            })}
          </div>
          <p>Наушники</p>
          <div className="col-md-12 mb-3 d-flex justify-content-between flex-wrap">
            {datas.naushnik?.map((items) => {
              return (
                <div className="card h-100 card__card" key={items.id}>
                  <div className="w-100 px-3">
                    <FavoriteBorderIcon className="fovarit" />
                  </div>
                  <NavLink onClick={() => console.log("ok")} to="/selected1">
                    <img
                      width="219"
                      height="237"
                      src={items.productImage}
                      alt="ew"
                    />
                  </NavLink>
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
              );
            })}
          </div>
          <div className="col-md-12 mb-5 d-flex justify-content-between flex-wrap">
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

          <p>Беспроводные наушники</p>
          <div className="col-md-12 mb-3 d-flex justify-content-between flex-wrap">
            {datas.kabelsiz?.map((items) => {
              return (
                <div className="card h-100 card__card " key={items.id}>
                  <div className="w-100 px-3">
                    <FavoriteBorderIcon className="fovarit" />
                  </div>
                  <img
                    width="219"
                    height="237"
                    src={items.productImage}
                    alt="ew"
                  />
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
