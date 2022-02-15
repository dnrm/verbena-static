import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="bg-white py-16 max-w-4xl mx-auto px-4">
      <div className="flex justify-between items-center pb-10">
        <div className="text">
          <h1 className="font-raleway text-4xl tracking-tighter leading-none">
            <Link to="/">Verbena Joyería</Link>
          </h1>
          <p className="font-raleway text-xl tracking-tighter leading-none">
            © 2022
          </p>
        </div>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </div>
      </div>
      <hr className="border-1" />
      <div className="links py-10 font-raleway">
        <div className="text-lg grid place-items-start grid-cols-1 md:grid-cols-2 underline">
          <div className="links-col-1 flex flex-col">
            <Link to="/">Inicio</Link>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/acerca-de">Acerca De</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <div className="links-col-2 flex flex-col">
            <Link to="https://instagram.com">Instagram</Link>
            <Link to="https://www.facebook.com/Joyeriajessicamtz/">
              Facebook
            </Link>
            <Link to="https://messenger.com/">Messenger</Link>
            <a href="tel:8">Tel: 12-3456-7890</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
