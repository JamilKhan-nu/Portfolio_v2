import { Link } from "gatsby";
import React from "react";
// import * as headerStyle from "../styles/header.module.css"

function Header() {
  return (
    <header
      className="w-2/3 py-2 mt-4 font-medium flex items-center justify-between fixed z-50 backdrop-blur-sm bg-white/30 rounded-lg"
      data-aos="fade-down"
      data-aos-delay="500"
    >
      <Link to="/" className="text-4xl px-4 text-sky font-semibold font-Allura">
        Mr.Khan
      </Link>
      <nav>
        <Link to="/" className="mr-5 text-xl font-semibold text-sky nav">
          Home
        </Link>
        <Link to="/about" className="mr-5 text-xl font-semibold text-sky nav">
          About
        </Link>

        <Link to="/blog" className="mr-5 text-xl text-sky font-semibold nav">
          Blog
        </Link>

        <Link to="/book" className="mr-5 text-xl text-sky font-semibold nav">
          Book
        </Link>

        <Link
          to="/projects"
          className="mr-5 text-xl font-semibold text-sky nav"
        >
          Projects
        </Link>
        <Link
          href="/cv.pdf"
          target={"_blank"}
          className="text-xl font-semibold bg-sky text-white p-2.5 px-6 rounded-lg hover:bg-white hover:text-sky border-2 border-solid "
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}

export default Header;
