
import { AnimatedTestimonialsDemo } from "./components/about-me-section";
import { HeroSection } from "./components/hero-section";
import { MyWork } from "./components/my-work";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <MyWork/>
      <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
    </div>
  );
}
