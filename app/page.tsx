import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="bg-paper">
      <Navigation />
      <Intro />
      <Experience />
    </div>
  );
}
