import { motion } from "framer-motion";
import Image from "next/image";
const Skills = () => {
  const skillLogos = [
    "/html-5.svg",
    "/css-3.svg",
    "/javascript.svg",
    "/react.svg",
    "/next.svg",
  ];
  return (
    <div>
      <div className="flex mx-auto p-5">
        <h1 className="text-5xl ">Languages and Frameworks</h1>
      </div>
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex mx-auto justify-between p-5">
          {skillLogos.map((logo) => {
            return (
              <Image
                key={logo}
                src={logo}
                height={100}
                width={100}
                className="m-5"
                alt={logo}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
