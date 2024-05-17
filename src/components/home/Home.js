import React from "react";
import "./Home.css";
import mapa_wat from "./mapa_wat.png";
import { Link } from "react-router-dom";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top">
        <div className="home_top_about">O projekcie</div>
      </div>

      <div className="home_bottom">
        <div className="home_left">
          <img className="mapa_wat" src={mapa_wat} alt="logo" />
        </div>

        <div className="home_right">
          <div className="home_right_title">GEOPORTAL</div>

          <div className="home_right_subtitle">
            Strona internetowa z interaktywną mapą
          </div>
          <Link to="services">
            <button className="home_right_btn">START</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
