import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Categories | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
            
            <div className="content mb-6">

              <h1 className="title is-size-2 is-bold-light">Categories</h1>
              
              {group.map((category) => (
                <p key={category.fieldValue}>
                  <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                    {category.fieldValue} ({category.totalCount})
                  </Link>
                </p>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default CategoriesPage;

export const categoriesPageQuery = graphql`
  query CategoriesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group( field: { frontmatter: { categories: SELECT } } ) {
        fieldValue
        totalCount
      }
    }
  }
`;
