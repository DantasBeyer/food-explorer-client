import React from "react";
import "./Details.css";
import parmaImg from "../../img/dishes/parma.png";
import Tag from "../Tag/Tag";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Stepper from "../Stepper/Stepper";
import Button from "../Button/Button";
import backImg from "../../img/icons/left.png";

function Details() {
  return (
    <div className="details_container">
      <nav className="nav">
        <Navbar />
      </nav>

    {/*   <button className="btn_back">
        <img src={backImg} alt="back_img" />
        back
      </button> */}

      <main>
        <img className="img" src={parmaImg} alt="parma_img" />

        <section className="content">
          <h1>Torradas de Parma</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
            pão naan dá um toque especial.
          </p>

          <div className="tags">
            <Tag />
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
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Details;