import React from "react";
import PropTypes from "prop-types";
// import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
// import BlogRoll from "../components/BlogRoll";
// import PartnerList from "../components/PartnerList";
import FullWidthImage from "../components/FullWidthImage";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  helmet,
  content,
  contentComponent
}) => {
  const herroImage = getImage(heroImage) || heroImage;
  const PageContent = contentComponent || Content;

  return (
    <div>
      {helmet || ""}
      <FullWidthImage img={herroImage} heading={heroTitle} subheading={heroSubtitle} />
      <section className="section">
        <div className="pt-6 pb-6">
          <div className="container">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                <PageContent className="content is-size-5 is-size-6-touch" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductList />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
  // aboutImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string.isRequired,
  helmet: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  //   heading: PropTypes.string,
  // }),
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heroImage={frontmatter.heroImage}
        heroTitle={frontmatter.heroTitle}
        heroSubtitle={frontmatter.heroSubtitle}
        // aboutImage={frontmatter.aboutImage}
        // title={frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
        // intro={frontmatter.intro}
        helmet={
          <Helmet titleTemplate="%s">
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
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
