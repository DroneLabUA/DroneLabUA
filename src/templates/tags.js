import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

const TagsRoute = (props) =>  {

    const posts = props.data.allMarkdownRemark.edges;

    const postLinks = posts.map((post) => (
      <p key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <span className="">{post.node.frontmatter.heroTitle}</span>
        </Link>
      </p>
    ));

    const { tag } = props.pageContext;
    const { title } = props.data.site.siteMetadata;
    const { totalCount } = props.data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                <div className="content mb-6">

                  <p className="title is-size-5 is-bold-light">{tagHeader}</p>
                  <p className="">{postLinks}</p>
                  <p><Link className="button is-info" to="/tags/">Browse all tags</Link></p>

                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}

export default TagsRoute;

export const tagsPageQuery = graphql`
  query TagsPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC} }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            heroTitle
          }
        }
      }
    }
  }
`;
