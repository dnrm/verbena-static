import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Footer from "../components/Footer"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .map(edge => <Card key={edge.node.frontmatter.title} name={edge.node.frontmatter.title} />)

  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      <div className="home grid grid-cols-1 md:grid-cols-2 grid-rows-1">
        <div className="text flex justify-center flex-col items-start md:h-[42rem] pl-4 order-2 md:order-1 pb-6">
          <h1 className="text-6xl pt-8 md:text-8xl font-bold font-playfair tracking-tighter">
            Descubre tu nuevo accesorio favorito
          </h1>
          <h2 className="font-raleway text-xl md:text-3xl">Nueva colección</h2>
          <Link
            to="/productos"
            className="py-4 rounded-xl my-4 px-12 bg-gold text-white font-raleway"
          >
            Ir al catálogo
          </Link>
        </div>
        <div className="image relative order-1 md:order-2">
          <StaticImage
            src="../images/necklace.jpeg"
            className="object-cover h-48 md:h-[45rem]"
            alt=""
          />
        </div>
      </div>
      <div className="dark-bg bg-primary-dark crosses">
        <div className="catalog max-w-7xl mx-auto p-2">
          <div className="text flex justify-center flex-col items-start order-2 md:order-1 pt-16 pb-16">
            <h1 className="text-6xl md:text-7xl font-bold font-raleway tracking-tighter text-white">
              Catálogo
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 gap-4">
            {Posts}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`