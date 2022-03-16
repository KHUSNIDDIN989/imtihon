import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import {Link } from "react-router-dom"
import "./Header.css"
function Header() {
  return (
    <div className="nav__content">
      <div className="logo d-flex justify-content-between">
        <Link to="/">
          {" "}
          <h1>QPICK</h1>
        </Link>
        <PhoneAndroidIcon className="nav__phone" />
        <select className="nav__select">
          <option value="none">Выбрать модель телефона</option>
          <option value="1">Iphone</option>
          <option value="2">Galaxy</option>
          <option value="3">Xiomi</option>
          <option value="4">Oppo</option>
        </select>
      </div>
      <div className="icons d-flex ">
        <FavoriteIcon />
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Header;
