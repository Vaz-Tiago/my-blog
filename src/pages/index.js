import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from '../components/PostItem'

const IndexPage = () => {

  const {allMarkdownRemark} = useStaticQuery(
    graphql`
    query PostList {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              background
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              title
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
    `
  )

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({node: {
          frontmatter: { background, category, date, description, title },
          fields: { slug },
          timeToRead
        }
        }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
      
    </Layout>
  )
}

export default IndexPage
