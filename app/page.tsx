"use client";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
// import Contact from "./components/contact";
import Footer from "./components/footer";
import { Projects } from "./components/projects";
import Skills from "./components/skills.component";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Projects />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
