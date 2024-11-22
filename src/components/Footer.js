import * as React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJetFighter } from '@fortawesome/free-solid-svg-icons'

import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'


import mainlogo from "../img/dronlab_logo_v1.svg";

import YouTubeIcon from "../img/svg-icons/youtube_v1.svg";
import FacebookIcon from "../img/svg-icons/facebook_v1.svg";
import InstagramIcon from "../img/svg-icons/instagram_v1.svg";
import TikTokIcon from "../img/svg-icons/tiktok_v1.svg";


const Footer = () => {

return (
  <footer className="footer has-background-black has-text-white-ter p-6">

    {/* <div className="content has-text-centered">
      <div className="container">
        <div className="columns">

          <div className="column is-3">
            <section className="menu">
              <div className="menu-list">
                <div>
                  <Link to="/" className="navbar-item">
                    Головна
                  </Link>
                </div>
                <div>
                  <Link className="navbar-item" to="/products">
                    Продукти
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div className="column is-3">
            <section>
              <div className="menu-list">
                <div>
                  <Link className="navbar-item" to="/products">
                    Контакти
                  </Link>
                </div>
                <div>
                  <Link className="navbar-item" to="/about">
                    Часті запитання
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div className="column is-3">
            <section>
              <div className="menu-list">
                <div>
                  <Link className="navbar-item" to="/blog">
                    Новини
                  </Link>
                </div>
                <div>
                  <a
                    className="navbar-item"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Адмінка
                  </a>
                </div>
              </div>
              </section>
            </div>

            <div className="column is-3">
              <section>
                <div className="menu-list">
                  <div>
                    <Link className="navbar-item" to="/">UA</Link>
                  </div>
                  <div>
                    <Link className="navbar-item" to="/en">EN</Link>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </div>
      </div> */}

    <div className="pt-6 pb-6">
        <div className="content has-text-centered">

          <p className="is-size-7 is-size-6-desktop"><small>Слідкуйте за нами</small></p>

          <div className="buttons has-addons is-centered">
            <a className="button is-dark is-responsive" href="https://www.youtube.com/@DroneLabUkraine" target="_blank" rel="noopener noreferrer">
              <span>
                {/* <img src={YouTubeIcon} alt="YouTube Icon" style={{ height: "22px", width: "auto", padding: "0px", marginRight: ".75rem" }} /> */}
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </span>
              <span className="ml-2">YouTube</span>
            </a>
            <a className="button is-dark is-responsive" href="https://www.facebook.com/p/dronelab-61559130505682" target="_blank" rel="noopener noreferrer">
              <span>
                {/* <img src={FacebookIcon} alt="Facebook Icon" style={{ height: "22px", width: "auto", padding: "0px", marginRight: ".75rem" }} /> */}
                <FontAwesomeIcon icon={faFacebookF} size="1x" />
              </span>
              <span className="ml-2">Facebook</span>
            </a>
            <a className="button is-dark is-responsive" href="https://www.instagram.com/dronelabukraine" target="_blank" rel="noopener noreferrer">
              <span>
                {/* <img src={InstagramIcon} alt="Instagram Icon" style={{ height: "22px", width: "auto", padding: "0px", marginRight: ".75rem" }} /> */}
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </span>
              <span className="ml-2">Instagram</span>
            </a>
            <a className="button is-dark is-responsive" href="https://www.tiktok.com/@dronelabukraine" target="_blank" rel="noopener noreferrer">
              <span>
                {/* <img src={TikTokIcon} alt="TikTok Icon" style={{ height: "22px", width: "auto", padding: "0px", marginRight: ".75rem" }} /> */}
                <FontAwesomeIcon icon={faTiktok} size="1x" />
              </span>
              <span className="ml-2">TikTok</span>
            </a>
          </div>
            
          <p>
            <Link to="/">
              <img src={mainlogo} alt="DroneLab Logo Footer" style={{ width: "70px" }} />
            </Link>
          </p>
          <p>
            <small>
              <FontAwesomeIcon 
                icon={faJetFighter} 
                // style={{ color: "#DFAC00" }} 
                rotation={180} 
              />
              &emsp;
              Борітеся - поборете!
              &emsp;
              <FontAwesomeIcon
                icon={faJetFighter}
                // style={{ color: "#DFAC00" }}
              />
              <br/>
              2022 - { new Date().getFullYear() } © DroneLab
              {/* <br/>
              <br/>
              <FontAwesomeIcon
                icon={faJetFighter}
                // style={{ color: "#DFAC00" }}
                rotation={90}
              /> */}
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
