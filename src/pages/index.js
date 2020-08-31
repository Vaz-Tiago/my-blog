import React from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </Layout>
)

export default IndexPage
