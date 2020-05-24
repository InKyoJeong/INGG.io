import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./hi.css"

class Mincho extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="mincho" />
        <br />
        <iframe
          class="video"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/guMCTWMD1iE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="mincho"
        ></iframe>
      </Layout>
    )
  }
}

export default Mincho

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`