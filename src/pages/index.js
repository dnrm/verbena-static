import * as React from "react"
import { Helmet } from "react-helmet"

import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../components/Navbar"

const IndexPage = () => (
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
      <div className="text flex justify-center flex-col items-start h-[48rem] pl-4 order-2 md:order-1">
        <h1 className="text-8xl font-bold font-playfair tracking-tighter">
          Descubre tu nuevo accesorio favorito
        </h1>
        <h2 className="font-raleway text-3xl">Nueva colección</h2>
        <button className="py-3 rounded-xl my-2 px-6 bg-gold text-white font-raleway">
          Ir al catálogo
        </button>
      </div>
      <div className="image relative order-1 md:order-2">
        <StaticImage
          src="../images/necklace.jpeg"
          className="object-cover h-48 md:h-[50rem]"
          alt=""
        />
      </div>
    </div>
  </div>
)

export default IndexPage
