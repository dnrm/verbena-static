import React from "react"
import { Link } from "gatsby"

const Card = ({ name, price, description, src }) => {
  return (
    <div className="w-full bg-white p-4 flex flex-col gap-4">
      <img src={src} alt="" className="h-[18em] object-cover" />
      <div className="texts">
        <h1 className="underline p-0 text-4xl font-playfair font-bold tracking-tighter">
          <Link to={`/product/${name.toLowerCase().split(' ').join('-')}`}>{name}</Link>
        </h1>
        <p className="font-mono text-xl pt-2">${price}</p>
      </div>
    </div>
  )
}

export default Card
