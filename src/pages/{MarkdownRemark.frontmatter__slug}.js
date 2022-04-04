import React from "react"
import { graphql } from "gatsby"

import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="">
        <Navbar />
        <div className="max-w-6xl mx-auto">
            <Card name={frontmatter.title} price={frontmatter.price} src={frontmatter.image}></Card>
        </div>
    </div>
  )
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        price
        image
      }
    }
  }
`
