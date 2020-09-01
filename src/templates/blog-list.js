import React from 'react';
import { graphql } from 'gatsby'

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from '../components/PostItem'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

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

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip    
    ) {
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



export default BlogList