import "./Home.css";
import { Link } from "react-router-dom";
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

export default function Home() {
  return (
    <div className="home">
      {/* HEADER */}
      <header className="home-header">
        <div className="logo">Pimp Your Grill</div>

        <nav>
          <Link to="/best-grills">Best grills</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

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
        Înregistrează-te pentru a intra și tu în cea mai mare rețea de grătaragii din lume!
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
