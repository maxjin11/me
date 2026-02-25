import Image from "next/image";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="bg-[#fdfffc]">
      <Navigation />
      <Intro />
      <Experience />
    </div>
  );
}
