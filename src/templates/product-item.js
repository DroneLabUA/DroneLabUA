import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
// import { graphql } from "gatsby";
import { Link, graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
// import { faList } from '@fortawesome/free-solid-svg-icons'
// import { faIndustry } from '@fortawesome/free-solid-svg-icons'
// import { faDiceD6 } from '@fortawesome/free-solid-svg-icons'
// import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'


import Layout from "../components/Layout";
// import FullWidthImage from "../components/FullWidthImage";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";
// import ProductList from "../components/ProductList";
const _ = require('lodash')

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line
export const ProductItemTemplate = ({
  isVisible,
  heroImage,
  heroTitle,
  heroSubtitle,
  // title,
  // description,
  helmet,
  content,
  // tags,
  categories,
  contentComponent,
}) => {
  // const herroImage = getImage(heroImage) || heroImage;
  const PostContent = contentComponent || Content;
  const categoryLink = `/category/${_.kebabCase(categories)}/`;
  const categoryTitle = `${categories == 'Repeaters' ? 'Ретранслятори' : (
    `${categories == 'FPV Drones' ? 'FPV Дрони' : (
      `${categories == 'Ground Stations' ? 'Наземні Станції' : categories}`
    )}`
  )}`;

  return (
    <div>
      {helmet || ""}
        <section className="section">

          <div className="container mt-5 mb-5">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">

              <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">
                      <span className="mr-2">
                        <FontAwesomeIcon icon={faHouse} size="1x" />
                      </span>
                      <span>Головна</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/categories">
                      <span className="mr-2">
                        <FontAwesomeIcon icon={faDiceD20} size="1x" />
                      </span>
                      <span>Категорії</span>
                    </Link>
                  </li> */}
                  <li>
                    <Link to={categoryLink}>
                      <span>{ categoryTitle }</span>
                    </Link>
                  </li>
                  <li className="is-active">
                    <a href="#" aria-current="page">{ heroTitle }</a>
                  </li>
                </ul>
              </nav>

              {/* <hr/> */}

              {/* <div>
                <span>Головна / </span>
              {categories && categories.length ? (
                <span>
                    {categories.map((category) => (
                      <span key={category + `category`}>
                        <Link to={`/categories/${kebabCase(category)}/`}>{category}</Link>
                      </span>
                    ))}
                </span>
              ) : null}
                <span> / { heroTitle }</span>
              </div>
              <hr/> */}

            </div>
          </div>

          <div className="columns">
            <div className="column is-12 is-8-fullhd is-offset-2-fullhd">


              {isVisible ? <PostContent className="content mb-6" content={content} /> : <div class="notification is-danger"><FontAwesomeIcon icon={faTriangleExclamation} /> This product is <b>hiden</b>. <br/> Also it is hiden from <b>Navbar Menu</b> and from <b>Product List</b>.</div> }

              {/* <hr/>
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <span>Tags:</span>
                  &emsp;
                    {tags.map((tag) => (
                      <span key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </span>
                    ))}
                </div>
              ) : null} */}

            </div>
          </div>
        </div>
      </section>
      {/* <ProductList /> */}
      </div>

  );
};

ProductItemTemplate.propTypes = {
  isVisible: PropTypes.bool,
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
  helmet: PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

const ProductItem = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProductItemTemplate
        isVisible={post.frontmatter.isVisible}
        heroImage={post.frontmatter.heroImage}
        heroTitle={post.frontmatter.heroTitle}
        heroSubtitle={post.frontmatter.heroSubtitle}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | DroneLab">
            <title>{`${post.frontmatter.heroTitle}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.heroSubtitle}`}
            />
          </Helmet>
        }
        // tags={post.frontmatter.tags}
        categories={post.frontmatter.categories}
      />
    </Layout>
  );
};

ProductItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      // frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductItem;

export const ProductItemQuery = graphql`
  query ProductItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        isVisible
        date(formatString: "MMMM DD, YYYY")
        heroImage {
          childImageSharp {
            gatsbyImageData(
              quality: 100,
              layout: FULL_WIDTH
            )
          }
        }
        heroTitle
        heroSubtitle
        tags
        categories
      }
    }
  }
`;
