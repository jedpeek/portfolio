// import { motion } from "framer-motion";
import Typewriter from "./typwriter";
import { useRef } from "react";

function Hero() {
  const ref = useRef(null);
  const handleClick = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
  return (
    <div className="hero min-h-screen bg-[url('/beach-01.jpg')]">
      {" "}
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase text-white">
            Hi My Name is Jed Peek
          </h1>
          <Typewriter text="Web developer from California" delay={100} />
          <div className="align-bottom">
            {/* <a
              href="#first-section"
              className="block text-2xl m-5 hover:scale-150 duration-150 text-white"
              onClick={handleClick}
            >
              V
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
