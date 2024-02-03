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
// import FullWidthImage from "../components/FullWidthImage";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";
import ProductList from "../components/ProductList";
const _ = require('lodash')



// eslint-disable-next-line
export const ArticleItemTemplate = ({
  isVisible,
  heroImage,
  wikiCategories,
  heroTitle,
  heroSubtitle,
  // title,
  // description,
  helmet,
  content,
  contentComponent,
}) => {
  const herroImage = getImage(heroImage) || heroImage;
  const PostContent = contentComponent || Content;

  const wikiCategoryLink = `/wiki/${_.kebabCase(wikiCategories)}/`;

  // const posts = props.data.allMarkdownRemark.edges;

  // const postLinks = posts.map((post) => (
  //   <p key={post.node.fields.slug}>
  //     <Link to={post.node.fields.slug}>
  //       <span className="">{post.node.frontmatter.heroTitle}</span>
  //     </Link>
  //   </p>
  // ));

  return (
    <div>
      {helmet || ""}
      <section className="section">
      <div className="container">
          <div className="columns">
            <div className="column is-12 is-8-fullhd is-offset-2-fullhd">

              <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                <ul>
                  <li><Link to="/wiki">База знань</Link></li>
                  <li><Link to={wikiCategoryLink}>{ wikiCategories }</Link></li>
                  <li class="is-active"><a href="#" aria-current="page">{ heroTitle }</a></li>
                </ul>
              </nav>

              {isVisible ? <PostContent className="content mb-6" content={content} /> : <div class="notification is-danger"><FontAwesomeIcon icon={faTriangleExclamation} /> This product is <b>hiden</b>. <br/> Also it is hiden from <b>Navbar Menu</b> and from <b>Product List</b>.</div> }
            </div>
          </div>
        </div>
      </section>
      <ProductList />
      </div>

  );
};

ArticleItemTemplate.propTypes = {
  isVisible: PropTypes.bool,
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  wikiCategories: PropTypes.string,
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
  helmet: PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

const ArticleItem = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ArticleItemTemplate
        isVisible={post.frontmatter.isVisible}
        heroImage={post.frontmatter.heroImage}
        wikiCategories={post.frontmatter.wikiCategories}
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
      />
    </Layout>
  );
};

ArticleItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      // frontmatter: PropTypes.object,
    }),
  }),
};

export default ArticleItem;

export const ArticleItemQuery = graphql`
  query ArticleItemByID($id: String!) {
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
        wikiCategories
        heroTitle
        heroSubtitle
        heroImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
