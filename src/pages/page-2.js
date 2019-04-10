import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Acho que entendi" />
    <h1>Acho que entendi</h1>
    <p>aaaaaaaaaa</p>
    <Link to="/">Voltae</Link>
  </Layout>
)

export default SecondPage
