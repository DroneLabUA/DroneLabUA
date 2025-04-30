import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
// import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

const CategoryPageRoute = (props) =>  {

  const posts = props.data.allMarkdownRemark.edges;

  const postLinks = posts.map((post) => (
    
    (() => {
      if (post.node.frontmatter.isVisible){
        return (

          <div className="column is-3" key={post.node.id}>
            <div className="mb-3">
              <Link to={post.node.fields.slug}>
                {/* <span className="">{post.node.frontmatter.heroTitle}</span> */}
                <PreviewCompatibleImage imageInfo={post.node.frontmatter.heroImage} />
              </Link>
            </div>
            <div className="mb-4">
              <div className="mb-2 is-size-5">{post.node.frontmatter.heroTitle}</div>
              <div className="heading mb-0">{post.node.frontmatter.heroSubtitle}</div>
              {/* <div className="heading mb-0">{post.node.id}</div> */}
            </div>
          </div>

        )
      }
      return null;
    })()
    
  ));

  const { category } = props.pageContext;
  const { title } = props.data.site.siteMetadata;
  const { totalCount } = props.data.allMarkdownRemark;
  // const categoryTitle = `${totalCount} item${
  //   totalCount === 1 ? "" : "s"
  // } in “${category}” category`;
  const categoryTitle = `${category === 'Repeaters' ? 'Ретранслятори' : (
    `${category === 'FPV Drones' ? 'FPV Дрони' : (
      `${category === 'Ground Stations' ? 'Наземні Станції' : category}`
    )}`
  )}`;
  const categorySubTitle = `(${totalCount} ${
    totalCount === 1 ? "виріб" : (
      totalCount === 2 || totalCount === 3 || totalCount === 4 ? "вироби" : "виробів"
    )
  })`;

  return (
    <Layout>
      <Helmet title={`${category} | ${title}`} />
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
                  <li className="is-active">
                    <a href="#" aria-current="page">
                      <span>{categoryTitle}</span>
                    </a>
                  </li>
                </ul>
              </nav>
              
              <div className="content">
                <h1 className="">
                  <span>{categoryTitle}</span>
                  {/* <small> {categorySubTitle}</small> */}
                </h1>
                <div className="columns is-multiline has-text-centered">{postLinks}</div>
                {/* <p><Link className="button is-info" to="/categories/">Browse all categories</Link></p> */}
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CategoryPageRoute;

export const categoryPagePageQuery = graphql`
  query CategoryPagePage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC} }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
        id
          fields {
            slug
          }
          frontmatter {
            isVisible
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
