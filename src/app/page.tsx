
import { AnimatedTestimonialsDemo } from "./components/about-me-section";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { MyWork } from "./components/my-work";
import { NavBar } from "./components/navbar";

export default function Home() {
  return (
    <div className="">
      <NavBar></NavBar>
      <HeroSection/>
      <MyWork/>
      <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
      <Footer/>
    </div>
  );
}
