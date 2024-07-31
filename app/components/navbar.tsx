import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <span className="ml-3 text-xl hover:scale-110 duration-150 text-xl font-bold">
            JP
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-5 hover:text-gray-900 hover:scale-110 duration-150 text-xl font-bold"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="mr-5 hover:text-gray-900 hover:scale-110 duration-150 text-xl font-bold"
            href="/portfolio"
          >
            Portfolio
          </a>
          <a
            className="mr-5 hover:text-gray-900 hover:scale-110 duration-150 text-xl font-bold"
            href="/contact"
          >
            Contact
          </a>
        </nav>
        <a
          href="https://github.com/jedpeek"
          target="_blank"
          className="inline-flex items-center rounded-full border-0  focus:outline-none  rounded text-base mt-4 md:mt-0"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-12 h-12  mt-2.5 hover:scale-110 duration-150"
            viewBox="0 0 24 24"
          >
            <FaGithub />
          </svg>
        </a>
        <a className="inline-flex items-center rounded-full border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-12 h-12 ml-2 mt-2.5 hover:scale-110 duration-150"
            viewBox="0 0 24 24"
          >
            <FaLinkedin />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
