import React, { useState, Fragment } from "react";
import { Link as ScrollLink } from "react-scroll";
import { header } from "../../content/data";

const Header = () => {
  const [showNav, setShowNav] = useState(true)

  return (
    <Fragment>
      <nav className="fixed min-w-full flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 z-10 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <ScrollLink to="hero" smooth={true} duration={2000}>
              <span className="cursor-pointer text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-black">
                Portfolio
              </span>
            </ScrollLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setShowNav(!showNav)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (showNav ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {header.map((item, i) => (
                <li className="nav-item" key={i}>
                  <ScrollLink to={item.link} smooth={true} duration={2000}>
                    <span className="cursor-pointer px-3 py-2 flex items-center text-lg text-white uppercase font-semibold leading-snug hover:text-black">
                      {item.name}
                    </span>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
