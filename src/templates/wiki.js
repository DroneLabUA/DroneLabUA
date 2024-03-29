import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const WikiRoute = (props) =>  {

    const posts = props.data.allMarkdownRemark.edges;

    const postLinks = posts.map((post) => (
      <div className="column is-3" key={post.node.fields.slug}>
        <div className="mb-3">
          <Link to={post.node.fields.slug}>
            <PreviewCompatibleImage imageInfo={post.node.frontmatter.heroImage} />
          </Link>
        </div>
        <div className="mb-4">
          <div className="mb-2 is-size-5">{post.node.frontmatter.heroTitle}</div>
          <div className="heading mb-0">{post.node.frontmatter.heroSubtitle}</div>
        </div>
      </div>
    ));

    const { wikiCategory } = props.pageContext;
    const { title } = props.data.site.siteMetadata;
    const { totalCount } = props.data.allMarkdownRemark;
    // const tagHeader = `${totalCount} artile${
    //   totalCount === 1 ? "" : "s"
    // } in category ${wikiCategory}`;
    const tagHeader2 = `Категорія ${wikiCategory}`;
    const tagHeader3 = `Кількість статей ${totalCount} шт.`;

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${wikiCategory} | ${title}`} />
          <div className="container">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">

                <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                  <ul>
                    <li><Link to="/wiki">База знань</Link></li>
                    {/* eslint-disable-next-line */}
                    <li class="is-active"><a href="#" aria-current="page">{ wikiCategory }</a></li>
                  </ul>
                </nav>
                <div className="content mb-6">

                  {/* <h1 className="">{tagHeader}</h1> */}
                  <h1 className="">{tagHeader2}</h1>
                  <p className="">{tagHeader3}</p>
                  {/* <h1 className="">{wikiCategory}</h1> */}

                </div>
              </div>
            </div>
          </div>

          <div className="container pb-6">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                <div className="columns is-multiline has-text-centered">{postLinks}</div>
                {/* <p><Link className="button is-info" to="/wiki/">Browse all wiki articles</Link></p> */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}

export default WikiRoute;

export const wikiPageQuery = graphql`
  query WikiPage($wikiCategory: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { wikiCategories: { in: [$wikiCategory] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            heroTitle
            heroSubtitle
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
`;
