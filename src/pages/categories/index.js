import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={`Categories | ${title}`} />
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
                <li className="is-active">
                  <a href="#" aria-current="page">
                    <span>Categories</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="content">

              <h1 className="">Categories</h1>
              
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
