import React, { useState } from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from "gatsby";

import MainLogo from "../img/dronlab_logo_v1.svg";

// import YouTubeIcon from "../img/svg-icons/youtube_v1.svg";
// import FacebookIcon from "../img/svg-icons/facebook_v1.svg";
// import InstagramIcon from "../img/svg-icons/instagram_v1.svg";
// import TikTokIcon from "../img/svg-icons/tiktok_v1.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
// import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'

// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
// import { faBurst } from '@fortawesome/free-solid-svg-icons'
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons'
// import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { faMosquito } from '@fortawesome/free-solid-svg-icons'
// import { faJetFighter } from '@fortawesome/free-solid-svg-icons'
import { faTowerCell } from '@fortawesome/free-solid-svg-icons'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

// import PreviewCompatibleImage from './PreviewCompatibleImage'

// import { kebabCase } from "lodash";
const _ = require('lodash')


const NavbarTemplate = (props) => {
  const [isActive, setIsActive] = useState(false);
  // const { edges: posts } = props.data.allMarkdownRemark;
  const categoryLinkFPVDrones = `/category/${_.kebabCase('FPV Drones')}/`;
  const categoryLinkRepeaters = `/category/${_.kebabCase('Repeaters')}/`;
  const categoryLinkGroundStations = `/category/${_.kebabCase('Ground Stations')}/`;

  return (
    <nav
      className="navbar is-info is-fixed-top"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" activeClassName="is-active" title="Logo">
          <img src={MainLogo} alt="DroneLab Logo Header" style={{ height: "auto", width: "31px" }} />
          <span className="ml-3">
            <b>DroneLab</b>
          </span>
        </Link>
        {/* Hamburger menu */}
        <button
          className={`navbar-burger burger ${isActive && "is-active"}`}
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <span/>
          <span/>
          <span/>
          {/* &nbsp; */}
        </button>
      </div>
      <div id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
        <div className="navbar-start">

          <Link className="navbar-item is-hidden-desktop" to="/">
            <span className="mr-2">
              <FontAwesomeIcon icon={faHouse} size="1x" />
            </span>
            <span>Головна</span>
          </Link>

          {/* <Link className="navbar-item" activeClassName="is-active" to="/about-us">
            <span className="mr-2">
              <FontAwesomeIcon icon={faHouse} size="1x" />
            </span>
            <span>Про нас</span>
          </Link> */}

          {/* <Link className="navbar-item" activeClassName="is-active" to="/">Головна</Link> */}
          {/* <Link className="navbar-item" activeClassName="is-active" to="/feature">Напрямки діяльності</Link> */}

          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">
              <span className="mr-2">
                <FontAwesomeIcon icon={faDiceD20} size="1x" />
              </span>
              <span>Вироби</span>
            </span>
            <div className="navbar-dropdown">

              <Link className="navbar-item" activeClassName="is-active" to={categoryLinkRepeaters}>
                <span className="mr-2">
                  <FontAwesomeIcon icon={faSatelliteDish} size="1x" />
                </span>
                <span>Ретранслятори</span>
              </Link>

              <hr className="navbar-divider" />

              <Link className="navbar-item" activeClassName="is-active" to={categoryLinkGroundStations}>
                <span className="mr-2">
                  <FontAwesomeIcon icon={faTowerCell} size="1x" />
                </span>
                <span>Наземні Станції</span>
              </Link>

              <hr className="navbar-divider" />

              <Link className="navbar-item" activeClassName="is-active" to={categoryLinkFPVDrones}>
                <span className="mr-2">
                  <FontAwesomeIcon icon={faMosquito} size="1x" />
                </span>
                <span>FPV Дрони</span>
              </Link>

            </div>
          </div>

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Вироби</span>
            <div className="navbar-dropdown">
              {posts && posts.map(({ node: post }) => (
                (() => {
                  if (post.frontmatter.isVisible){
                    return (
                      <Link to={post.fields.slug} key={post.id} className="navbar-item" activeClassName="is-active">
                        <span style={{width: "30px", display: "inline-block"}}>
                          <PreviewCompatibleImage imageInfo={post.frontmatter.heroImage}/>
                        </span>
                        &nbsp;
                        {post.frontmatter.heroTitle}
                      </Link>
                    )
                  }
                  return null;
                })()
              ))}
            </div>
          </div> */}

          {/* <div className="navbar-item is-size-7 is-size-6-desktop">Вироби</div> */}

          {/* <Link className="navbar-item" activeClassName="is-active" to={categoryLinkRepeaters}>
            <span className="mr-2">
              <FontAwesomeIcon icon={faSatelliteDish} size="1x" />
            </span>
            <span>Ретранслятори</span>
          </Link> */}

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">
              <span className="mr-2">
                <FontAwesomeIcon icon={faSatelliteDish} size="1x" />
              </span>
              <span>Ретранслятори</span>
            </span>
            <div className="navbar-dropdown">
              {posts && posts.map(({ node: post }) => (
                (() => {
                  if (post.frontmatter.isVisible && post.frontmatter.categories == 'Repeaters'){
                    return (
                      <Link to={post.fields.slug} key={post.id} className="navbar-item" activeClassName="is-active">
                        <span style={{width: "30px", display: "inline-block"}}>
                          <PreviewCompatibleImage imageInfo={post.frontmatter.heroImage}/>
                        </span>
                        &nbsp;
                        <span>{post.frontmatter.heroTitle}</span>
                      </Link>
                    )
                  }
                  return null;
                })()
              ))}
            </div>
          </div> */}

          {/* <Link className="navbar-item" activeClassName="is-active" to={categoryLinkFPVDrones}>
            <span className="mr-2">
              <FontAwesomeIcon icon={faBomb} size="1x" />
            </span>
            <span>FPV дрони</span>
          </Link> */}

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">
              <span className="mr-2">
                <FontAwesomeIcon icon={faJetFighter} size="1x" />
              </span>
              <span>FPV дрони</span>
            </span>
            <div className="navbar-dropdown">
              {posts && posts.map(({ node: post }) => (
                (() => {
                  if (post.frontmatter.isVisible && post.frontmatter.categories == 'FPV Drones'){
                    return (
                      <Link to={post.fields.slug} key={post.id} className="navbar-item" activeClassName="is-active">
                        <span style={{width: "30px", display: "inline-block"}}>
                          <PreviewCompatibleImage imageInfo={post.frontmatter.heroImage}/>
                        </span>
                        &nbsp;
                        <span>{post.frontmatter.heroTitle}</span>
                      </Link>
                    )
                  }
                  return null;
                })()
              ))}
            </div>
          </div> */}

          {/* {group.map((category) => (
            <p key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </p>
          ))} */}

        </div>

        <div className="navbar-end">

          {/* <Link className="navbar-item" activeClassName="is-active" to="/wiki">База знань</Link> */}

          {/* <Link className="navbar-item" activeClassName="is-active" to="/tags">Tags</Link> */}

          <Link className="navbar-item" activeClassName="is-active" to="/donate">
            <span>
              <FontAwesomeIcon icon={faAddressBook} size="1x" />
            </span>
            <span className="ml-2">Контакти</span>
          </Link>

          <div className="navbar-item">
            <div className="buttons has-addons is-centered">
              {/* <Link className="button" to="/donate">Контакти</Link> */}
              <a className="button is-warning" href="https://forms.gle/Lmg3RGrfiRdavJpY7" target="_blank" rel="noopener noreferrer">
                <span>
                  <FontAwesomeIcon icon={faPenToSquare} size="1x" />
                </span>
                <span className="ml-2">Замовити</span>
                {/* <span className="ml-2">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
                </span> */}
              </a>
            </div>
          </div>

          {/* <hr className="navbar-divider" /> */}
          
          <div className="navbar-item is-size-7 is-hidden-desktop">Слідкуйте за нами</div>

          <div className="navbar-item">
            <div className="buttons has-addons is-centered">
              <a className="button is-info is-responsive" href="https://www.youtube.com/@DroneLabUkraine" target="_blank" rel="noopener noreferrer">
                <span>
                  {/* <img src={YouTubeIcon} alt="YouTube Icon" style={{ height: "22px", width: "auto", padding: "0px", marginRight: ".75rem" }} /> */}
                  <FontAwesomeIcon icon={faYoutube} size="1x" />
                </span>
                <span className="ml-2 is-hidden-desktop">YouTube</span>
              </a>
              <a className="button is-info is-responsive" href="https://www.facebook.com/p/dronelab-61559130505682" target="_blank" rel="noopener noreferrer">
                <span>
                  {/* <img src={FacebookIcon} alt="Facebook Icon" style={{ height: "22px", width: "auto", padding: "0px", marginRight: ".75rem" }} /> */}
                  <FontAwesomeIcon icon={faFacebookF} size="1x" />
                </span>
                <span className="ml-2 is-hidden-desktop">Facebook</span>
              </a>
              <a className="button is-info is-responsive" href="https://www.instagram.com/dronelabukraine" target="_blank" rel="noopener noreferrer">
                <span>
                  {/* <img src={InstagramIcon} alt="Instagram Icon" style={{ height: "22px", width: "auto", padding: "0px", marginRight: ".75rem" }} /> */}
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </span>
                <span className="ml-2 is-hidden-desktop">Instagram</span>
              </a>
              <a className="button is-info is-responsive" href="https://www.tiktok.com/@dronelabukraine" target="_blank" rel="noopener noreferrer">
                <span>
                  {/* <img src={TikTokIcon} alt="TikTok Icon" style={{ height: "22px", width: "auto", padding: "0px", marginRight: ".75rem" }} /> */}
                  <FontAwesomeIcon icon={faTiktok} size="1x" />
                </span>
                <span className="ml-2 is-hidden-desktop">TikTok</span>
              </a>
            </div>
          </div>

          {/* <Link className="navbar-item" activeClassName="is-active" to="/faq">
            <img src={YouTubeIcon} alt="YouTube Icon" style={{ height: "120px", width: "auto" }} />
            <span>YouTube</span>
          </Link>
          <Link className="navbar-item" activeClassName="is-active" to="/faq">
            <img src={FacebookIcon} alt="Facebook Icon" style={{ height: "120px", width: "auto" }} />
            <span>Facebook</span>
          </Link>
          <Link className="navbar-item" activeClassName="is-active" to="/faq">
            <img src={InstagramIcon} alt="Instagram Icon" style={{ height: "120px", width: "auto" }} />
            <span>Instagram</span>
          </Link>
          <Link className="navbar-item" activeClassName="is-active" to="/faq">
            <img src={TikTokIcon} alt="TikTok Icon" style={{ height: "120px", width: "auto" }} />
            <span>TikTok</span>
          </Link>

          <Link className="navbar-item" activeClassName="is-active" to="/faq">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </Link>
          <Link className="navbar-item" activeClassName="is-active" to="/faq">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </Link>
          <Link className="navbar-item" activeClassName="is-active" to="/faq">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
          <Link className="navbar-item" activeClassName="is-active" to="/faq">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </Link> */}

          {/* <Link className="navbar-item" activeClassName="is-active" to="/faq">Часті Запитання</Link> */}
          {/* <Link className="navbar-item" activeClassName="is-active" to="/blog">Хроніки</Link> */}
          {/* <Link className="navbar-item" activeClassName="is-active" to="/products">Ветеранка</Link> */}
          {/* <Link className="navbar-item" to="/">UA</Link>
          <Link className="navbar-item" to="/en">EN</Link> */}

        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

// export default Navbar;
export default function Navbar() {
  return (
    <StaticQuery
      query={graphql`
        query NavbarQuery {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { 
              templateKey: { eq: "product-item" }
            } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 200)
                id
                fields {
                  slug
                }
                frontmatter {
                  isVisible
                  heroTitle
                  heroSubtitle
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  heroImage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 400
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                  categories
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <NavbarTemplate data={data} count={count} />}
    />
  );
}
