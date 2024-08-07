import React, { useState } from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from "gatsby";

import mainlogo from "../img/hornetlab_logo_v2.svg";
// import mainlogo from "../img/hornetlub_logo_v1.png";
import PreviewCompatibleImage from './PreviewCompatibleImage'

const NavbarTemplate = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main-navigation"
    >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" activeClassName="is-active" title="Logo" style={{ paddingTop: "0", paddingBottom: "0" }}>
            <img src={mainlogo} alt="DronLab" style={{ height: "120px", width: "auto", marginRight: ".75rem", padding: "0" }} />
            <span><b>DroneLab</b></span>
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
            {/* <Link className="navbar-item" activeClassName="is-active" to="/">Головна</Link> */}
            {/* <Link className="navbar-item" activeClassName="is-active" to="/feature">Напрямки діяльності</Link> */}

            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">Наші вироби</span>

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
            </div>
            {/* <Link className="navbar-item" activeClassName="is-active" to="/wiki">База знань</Link> */}
            {/* <Link className="navbar-item" activeClassName="is-active" to="/tags">Tags</Link> */}


          </div>
          <div className="navbar-end">
            {/* <Link className="navbar-item" activeClassName="is-active" to="/faq">Часті Запитання</Link> */}
            {/* <Link className="navbar-item" activeClassName="is-active" to="/blog">Хроніки</Link> */}
            {/* <Link className="navbar-item" activeClassName="is-active" to="/products">Ветеранка</Link> */}
            <div className="navbar-item">
              <div className="buttons has-addons is-centered">
                <Link className="button is-warning" to="/donate">Контакти</Link>
                <a className="button is-info is-light" href="https://forms.gle/Lmg3RGrfiRdavJpY7" target="_blank" rel="noopener noreferrer">Подати заявку</a>
              </div>
            </div>
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
            sort: { frontmatter: { date: DESC} }
            filter: { frontmatter: { templateKey: { eq: "product-item" } } }
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
