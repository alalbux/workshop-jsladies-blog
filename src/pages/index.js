import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`blog`, `alalbux`, `react`]} />
    <h1>Coé rapazeada</h1>
    <p>Brota com noisss</p>
    <p>Vai sair alguma coisa disso</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
