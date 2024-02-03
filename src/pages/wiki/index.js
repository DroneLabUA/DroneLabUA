import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const WikiPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`База знань | ${title}`} />
      <div className="container">
        <div className="columns">
          <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
            
            <div className="content mb-6">

              <h1 className="">База знань</h1>
              <p className="">Скористайтесь нашою базою знань по дронозборці.</p>
              <p className="">Виберіть категорію:</p>
              {group.map((wikiCategory) => (
                <p key={wikiCategory.fieldValue}>
                  <Link to={`/wiki/${kebabCase(wikiCategory.fieldValue)}/`}>
                    {wikiCategory.fieldValue} ({wikiCategory.totalCount})
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

export default WikiPage;

export const wikiCategoryQuery = graphql`
  query WikiCategory {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
    ) {
      group(field: frontmatter___wikiCategories) {  
        fieldValue
        totalCount
      }
    }
  }
`;

// export const wikiPageQuery = graphql`
//   query WikiPage($wikiCategory: String) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       limit: 1000
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { wikiCategories: { in: [$wikiCategory] } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             heroTitle
//             heroSubtitle
//             heroImage {
//               childImageSharp {
//                 gatsbyImageData(
//                   width: 400
//                   quality: 100
//                   layout: CONSTRAINED
//                 )
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
