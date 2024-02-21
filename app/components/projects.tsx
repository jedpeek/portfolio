import React from "react";
import ProjectCard from "./project-card";
const projectData = [
  {
    imageSrc: "/notflix.png",
    title: "Notflix",
    description:
      "Next.js Application that utilizes the youtube API for content.",
    lnk: "https://notflix-theta.vercel.app/",
    badges: ["HTML", "CSS", "Javascript", "Next.js"],
  },
  {
    imageSrc: "/Sonic-Library.jpg",
    title: "Sonic Library",
    description: "E-Commerce platform for digital goods built using react.",
    lnk: "https://visionary-banoffee-fda0d3.netlify.app/",
    badges: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    imageSrc: "/fifth-floor.png",
    title: "Fifth Floor",
    description: "Landing page for a wedding band that utilizes spotify API.",
    lnk: "https://fifth-floor.vercel.app/",
    badges: ["HTML", "CSS", "Javascript", "Next.js"],
  },
];
export const Projects = () => {
  return (
    <div>
      <div className="flex justify-end m-5">
        <h1 className="text-5xl">Projects</h1>
      </div>
      <div id="projects" className="grid grid-cols-3 p-5">
        {projectData.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              lnk={project.lnk}
              badges={project.badges}
            />
          );
        })}
      </div>
    </div>
  );
};
