import { YMaps, Map, Placemark } from "react-yandex-maps";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Visa from "../assets/img/Vector.png";
import Vector1 from "../assets/img/Vector1.png";
import "./Ordering.css";
function Ordering() {
  return (
    <div>
      <Header />
      <div className="row m-5">
        <div className="col-md-6 ">
          <form>
            <h3>Оформление заказа</h3>
            <div className="card p-4">
              <div className="d-flex w-100 justify-content-between mb-2 fw-bold">
                <h4>Доставка курьером</h4>
                <h6 className="mt-1"> 499 ₸</h6>
              </div>
              <YMaps>
                <Map
                  width={"100%"}
                  defaultState={{
                    center: [41.283266, 69.204646],
                    zoom: 10,
                  }}
                >
                  <Placemark geometry={[41.283266, 69.204646]} />
                </Map>
              </YMaps>
              <div className="d-flex my-3">
                <AddLocationIcon />
                <h5>Адрес доставки</h5>
              </div>

              <select
                className="form-select bg__grey"
                aria-label="Default select example "
                defaultValue="11"
              >
                <option value="11">Город </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="position-relative">
                <input
                  className="form-control my-3 bg__grey"
                  type="text"
                  placeholder="Улица / Район"
                />
                <BorderColorIcon className="pen__1" />
              </div>
              <div className="d-flex ">
                <div className="position-relative w-100">
                  <input
                    className="form-control input__right bg__grey"
                    type="text"
                    placeholder="Дом"
                  />
                  <BorderColorIcon className="pen__2" />
                </div>

                <div className="position-relative w-100 input__right">
                  <input
                    className="form-control input__left bg__grey"
                    type="text"
                    placeholder="Подъезд"
                  />
                  <BorderColorIcon className="pen__3" />
                </div>
              </div>
              <div className="div__input  w-50 my-3">
                <div className="position-relative">
                  <input
                    className="form-control w-100 bg__grey"
                    type="text"
                    placeholder="Квартира"
                  />
                  <BorderColorIcon className="pen__2" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6 mt-5">
          <div className="card p-3">
            <h3>Ваш заказ</h3>
            <div className="d-flex w-100 justify-content-between fw-bold">
              <p>
                {" "}
                <span className="x1">1x</span>Наушники Apple BYZ S852I
              </p>
              <p>₸ 2 927</p>
            </div>
            <div className="d-flex w-100 justify-content-between fw-bold">
              <p>Наушники Apple BYZ S852I</p>
              <p>₸ 2 927</p>
            </div>
            <div className="d-flex w-100 justify-content-between fw-bold">
              <p>Наушники Apple BYZ S852I</p>
              <p>₸ 2 927</p>
            </div>
          </div>
          <div className="card p-3 my-4">
            <h3>Способ оплаты</h3>
            <div className="d-flex mx-2">
              <img src={Visa} alt="" />
              <select className="select__card w-100">
                <option value="1">Счет на visa</option>
                <option value="1">card</option>
              </select>
            </div>
            <div className="d-flex">
              <img
                width="20"
                height="20"
                className="mt-4 input__left "
                src={Vector1}
                alt=""
              />
              <input
                type="text"
                className="my-3 form-control promocode"
                placeholder="Есть промокод?"
              />
            </div>
          </div>
          <div className="card p-3 position-relative">
            <h3>Номер получателя</h3>
            <input
              type="text"
              className="form-control bg__grey"
              placeholder="+7 ___ ___ __ __"
            />
            <BorderColorIcon className="pen__5" />
          </div>
          <div className="w-100 mt-4 pt-3">
            <button className="btn-dark btn w-100">Закончить оформление</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ordering;
