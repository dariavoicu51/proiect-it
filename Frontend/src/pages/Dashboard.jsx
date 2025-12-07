import "./Dashboard.css";
import NavbarPrivate from "../components/NavbarPrivate";

import burger from "../assets/icons/burger.png";
import bucatarie from "../assets/icons/bucatarie.png";
import bucatari from "../assets/icons/bucatarie2.png";
import cutit from "../assets/icons/knife.png";
import sort from "../assets/icons/sort.png";
import ustensile from "../assets/icons/ustensile.png";

import grillImg from "../assets/opengrill.png";
import pimpLouisImg from "../assets/omulet.png";

import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import youtube from "../assets/icons/youtube.svg";
import twitch from "../assets/icons/twitch.svg";

export default function Dashboard() {
  return (
    <div className="home">

      <NavbarPrivate />

      {/* ⬇️ restul paginii este identic cu pagina principală */}

      {/* HERO */}
      <section className="hero">
        <div className="hero-icons top">
          <img src={cutit} />
          <img src={ustensile} />
        </div>

        <h1 className="hero-title">
          Pimp Your <span>Grill</span>
        </h1>

        <div className="hero-icons bottom">
          <img src={burger} />
          <img src={bucatari} />
          <img src={bucatarie} />
          <img src={sort} />
        </div>
      </section>

      {/* BANNER */}
      <section className="join-banner">
        Îți mulțumim că faci parte din cea mai mare rețea de grătaragii din lume!
      </section>

      {/* BBQ */}
      <section className="bbq-section">
        <div className="bbq-content">
          <div className="character-wrap">
            <img src={pimpLouisImg} alt="Pimp Louis" className="bbq-louis" />
          </div>

          <div className="grill-wrap">
            <img src={grillImg} alt="Grill" className="bbq-grill" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <span>Contact</span>

        <div className="socials">
          <img src={instagram} />
          <img src={facebook} />
          <img src={youtube} />
          <img src={twitch} />
        </div>
      </footer>
    </div>
  );
}
