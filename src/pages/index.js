import * as React from "react"
import { Helmet } from "react-helmet"

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
    <div className="home grid grid-cols-2 h-screen">
      <div className="text flex justify-start items-center p-4">
        <h1 className="text-6xl font-bold font-playfair tracking-tighter">
          Descubre tu nuevo accesorio favorito
        </h1>
      </div>
        <div className="image">
          <img
            src="/necklace.jpeg"
            className="object-cover"
            alt=""
          />
        </div>
    </div>
  </div>
)

export default IndexPage
