import Image from "next/image";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import Features from "./components/features";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Gallery />
    </div>
  );
}
