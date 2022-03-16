import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer d-flex justify-content-between">
      <div className="col-md-3 p-4">
        <Link to="/">
          <h3 className="fw-bold">QPICK</h3>
        </Link>
      </div>
      <div className="col-md-3 d-flex flex-column py-3">
        <Link to="/selected1" className="my-2 footer__a">
          Избранное
        </Link>
        <Link to="/karzinka" className="my-2 footer__a">
          Корзина
        </Link>
        <Link to="/contacts" className="my-2 footer__a">
          Контакты
        </Link>
      </div>
      <div className="col-md-3 py-4 ">
        <Link to="/rervicerequirements" className="footer__a ">
          Условия сервиса
        </Link>
        <div className="d-flex mt-5 ">
          <LanguageIcon />
          <a href="link" className="footer__a mx-2  ">
            En
          </a>
          <a href="link" className="footer__a mx-2  ">
            Ru
          </a>
          <a href="link" className="footer__a mx-2  ">
            Uz
          </a>
        </div>
      </div>
      <div className="col-md-3 p-5">
        <div className="d-flex justify-content-evenly w-100">
          <InstagramIcon />
          <TelegramIcon />
          <WhatsAppIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
