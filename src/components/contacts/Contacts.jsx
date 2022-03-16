import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";



import { YMaps, Map, Placemark } from "react-yandex-maps";
function Contacts() {
  return (
    <div>
      <Header />
      <div className="row mt-3 px-5">
        <div className="col-md-8">
          <div className="card p-4">
            <h3>Наш офис</h3>
            <YMaps>
              <Map
                width="500"
                height={400}
                defaultState={{
                  center: [41.283266, 69.204646],
                  zoom: 10,
                }}
              >
                <Placemark geometry={[41.283266, 69.204646]} />
              </Map>
            </YMaps>
            <div className="d-flex mt-2">
              <AddLocationIcon className="mt-3 mr-2" />
              <div>
                <h6>Аксай-3а, 62ф, Алматы, Казахстан</h6>
                <p>3 этаж 35 кабинет</p>
              </div>
            </div>
          </div>
          <div className="w-50 d-flex my-5 justify-content-evenly">
            <PhoneIcon className="fs-1" />
            <h2>+7 777 777 77 77</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card w-25 d-flex justify-content-center align-items-center p-4 m-3">
            <WhatsAppIcon className="fs-1" />
          </div>
          <div className="card w-25 d-flex justify-content-center align-items-center p-4 m-3">
            <InstagramIcon className="fs-1" />
          </div>
          <div className="card w-25 d-flex justify-content-center align-items-center p-4 m-3">
            <TelegramIcon className="fs-1" />
          </div>
          <div className="card w-25 d-flex justify-content-center align-items-center p-4 m-3">
            <WhatsAppIcon className="fs-1" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
