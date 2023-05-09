import React from "react";
import "./Details.css";
import parmaImg from "../../img/dishes/parma.png";
import Tag from "../Tag/Tag";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Stepper from "../Stepper/Stepper";
import Button from "../Button/Button";

function Details() {
  return (
    <div className="details_container">
      <Navbar />
      <section className="img">
        <img src={parmaImg} alt="parma_img" />
      </section>

      <section className="main_content">
        <h1>Torradas de Parma</h1>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
          pão naan dá um toque especial. Rabanetes, folhas verdes e molho
          agridoce salpicados com gergelim. O pão naan dá um toque especial.
        </p>

        <div className="tags">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>

        <div className="order">
          <Stepper />
          <Button />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Details;