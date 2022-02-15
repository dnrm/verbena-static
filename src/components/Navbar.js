import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="navbar w-full bg-primary-dark p-5 text-white flex justify-between items-center">
      <div className="w-1/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <h1 className="font-raleway font-bold text-2xl w-1/2 text-center">
        <Link to="/">Verbena Joyería</Link>
      </h1>
      <div className="options w-1/3">
        <ul className="flex items-center justify-end gap-6">
          <li>
            <Link href="/productos">Productos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
