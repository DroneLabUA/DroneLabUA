import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
// import { graphql } from "gatsby";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";
import ProductList from "../components/ProductList";
import Options from "../components/Options";

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
  contentComponent,
  options,
  imageexperiment,
}) => {
  const herroImage = getImage(heroImage) || heroImage;
  const PostContent = contentComponent || Content;

  return (
    <div>
      {helmet || ""}

      <FullWidthImage img={herroImage} heading={heroTitle} subheading={heroSubtitle} />
      <hr/>


      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
              <Options options={options} />
              {isVisible ? <PostContent className="mb-6" content={content} /> : <div class="notification is-danger"><FontAwesomeIcon icon={faTriangleExclamation} /> This product is <b>hiden</b>. <br/> Also it is hiden from <b>Navbar Menu</b> and from <b>Product List</b>.</div> }
            </div>
          </div>
        </div>
      </section>
      <ProductList />
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
  options: PropTypes.array,
  // imageexperiment: PropTypes.object,
  imageexperiment: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

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
        options={post.frontmatter.options}
        imageexperiment={post.frontmatter.imageexperiment}
        helmet={
          <Helmet titleTemplate="%s | DroneLab">
            <title>{`${post.frontmatter.heroTitle}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.heroSubtitle}`}
            />
          </Helmet>
        }
      />
    </Layout>
  );
};

ProductItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
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
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heroTitle
        heroSubtitle
        options {
          optionTitle
          price
        }
        imageexperiment {
          alt
          image {
            childImageSharp {
              gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
