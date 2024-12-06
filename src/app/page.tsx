import { AboutMe } from "./components/about-me";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { MyWork } from "./components/my-work";
import { NavBar } from "./components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection/>
      <MyWork/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}
