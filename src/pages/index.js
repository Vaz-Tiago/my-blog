import React from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <PostItem
      slug='/about'
      background='red'
      category='misc'
      date='31/08/2020'
      timeToRead='5'
      title='Say no to Medium'
      description='Some reasons to leave the medium and build your own platform'
    />
    
  </Layout>
)

export default IndexPage
