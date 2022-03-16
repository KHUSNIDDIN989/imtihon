import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Noushnik from "../assets/img/image12.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/Remove";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Karzinka.css";
function Karzinka() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-md-8">
          <div className="card p-4 my-4">
            <div className="delete d-flex justify-content-end">
              <DeleteOutlineIcon />
            </div>
            <div className="karzina d-flex align-items-center w-50 justify-content-between">
              <img src={Noushnik} alt="a" />
              <div className="">
                <h4>Apple BYZ S852I</h4>
                <p>2 927 ₸</p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex w-25 justify-content-evenly mt-3">
                <RemoveIcon className="cricle" />
                <p className="cricle-0">0</p>
                <AddCircleIcon className="cricle" />
              </div>
              <h4>2 927 ₸</h4>
            </div>
          </div>
          <div className="card p-4 mb-5">
            <h4>Доставка</h4>
            <div className="border rounded">
              <YMaps>
                <Map
                  width="500"
                  height={200}
                  defaultState={{
                    center: [41.283266, 69.204646],
                    zoom: 10,
                  }}
                >
                  <Placemark geometry={[41.283266, 69.204646]} />
                </Map>
              </YMaps>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex   w-50 justify-content-between ">
                <div className="d-flex w-50 justify-content-between">
                  <LocalShippingIcon />
                  <p>Доставка курьером</p>
                </div>
                <KeyboardArrowDownIcon />
              </div>
              <p> 499 ₸</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-4">
          <div className="card p-4">
            <div className="d-flex w-100 justify-content-between ">
              <p>ИТОГО</p>
              <p>₸ 2 927</p>
            </div>
            <button className="btn btn-dark">Перейти к оформлению</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Karzinka;
