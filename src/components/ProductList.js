import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const ProductListTemplate = (props) => {

  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <section className="section">
      <div className="container pb-6">
        <div className="columns">
          <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
            <p className="is-size-4 is-size-6-touch mb-5">Наші Вироби:</p>
            <div className="columns is-multiline has-text-centered">
              {posts && posts.map(({ node: post }) => (

                (() => {
                  if (post.frontmatter.isVisible){
                    return (
                      <div className="column is-3" key={post.id}>
                        <div className="mb-3">
                          <Link to={post.fields.slug}>
                            <PreviewCompatibleImage imageInfo={post.frontmatter.heroImage} />
                          </Link>
                        </div>
                        <div className="mb-4">
                          <div className="mb-2 is-size-5">{post.frontmatter.heroTitle}</div>
                          <div className="heading mb-0">{post.frontmatter.heroSubtitle}</div>
                        </div>
                      </div>
                    )
                  }
                  return null;
                })()
              ))}
            </div>
          </div>      
        </div>
      </div>
    </section>
  )
}

ProductList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function ProductList() {
  return (
    <StaticQuery
      query={graphql`
        query ProductListQuery {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC} }
            filter: { frontmatter: { templateKey: { eq: "product-item" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 200)
                id
                fields {
                  slug
                }
                frontmatter {
                  isVisible
                  heroTitle
                  heroSubtitle
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  heroImage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 400
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                  tags
                  categories
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ProductListTemplate data={data} count={count} />}
    />
  );
}
