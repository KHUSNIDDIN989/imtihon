import Header from "../header/Header"
import Footer from '../footer/Footer';
import "./Ready.css"
function Ready() {
  return (
    <div>
      <Header />
      <div className="col-md-12 hvh">
        <div className="card p-5 my-5">
          <h3>
            Номер вашего заказа {Math.random() * 10}, с Вами свяжется наш
            менеджер.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ready;
