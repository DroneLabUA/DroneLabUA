import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJetFighter } from '@fortawesome/free-solid-svg-icons'
import mainlogo from "../img/hornetlab_logo_v2.svg";

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
          <p>
          <Link to="/">
            <img
              src={mainlogo}
              alt="Дронарня"
              style={{ width: "70px" }}
            />
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
              DroneLab © { new Date().getFullYear() }
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
