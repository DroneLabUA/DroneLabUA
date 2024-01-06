import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
// import { graphql } from "gatsby";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import Content, { HTMLContent } from "../components/Content";
import ProductList from "../components/ProductList";

// eslint-disable-next-line
export const PartnerItemTemplate = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  helmet,
  content,
  contentComponent,
}) => {
  const herroImage = getImage(heroImage) || heroImage;
  const PostContent = contentComponent || Content;

  return (
    <div>
      {helmet || ""}
      <FullWidthImage img={herroImage} heading={heroTitle} subheading={heroSubtitle} imgPosition={"50% center"} />
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
              <PostContent className="mb-6" content={content} />
                <div className="pt-6 pb-6 has-text-centered">
                  <Link className="button is-warning is-large is-responsive" to="/donate">Контакти</Link>
                </div>
            </div>
          </div>
        </div>
      </section>
      <ProductList />
    </div>
  );
};

PartnerItemTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
  helmet: PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

const PartnerItem = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PartnerItemTemplate
        heroImage={post.frontmatter.heroImage}
        heroTitle={post.frontmatter.heroTitle}
        heroSubtitle={post.frontmatter.heroSubtitle}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | DroneLab">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  );
};

PartnerItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      // frontmatter: PropTypes.object,
    }),
  }),
};

export default PartnerItem;

export const PartnerItemQuery = graphql`
  query PartnerItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        heroImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heroTitle
        heroSubtitle
      }
    }
  }
`;
