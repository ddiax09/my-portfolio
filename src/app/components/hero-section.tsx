"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center text-center h-[80svh]  m-4 mt-20 lg:mx-20 rounded-2xl"
    >
      <h1 className="text-4xl lg:text-6xl pb-4 lg:font-bold">
        Let’s Build Something Great
      </h1>
      <h4 className="text-lg max-w-4xl">
        Hi, my name is Humbert and I am a 9th-semester ICT Engineering student
        passionate about front-end and mobile development, as well as IX / UI
        design. Scroll down to know more about me.
      </h4>
      <div className="flex justify-between max-w-md pt-8">
        <Button
          className="mr-4 h-full"
          variant="secondary"
          onClick={() =>
            window.open("./docs/HUMBERTO DIAZ - CV.pdf", "_blank")
          }
        >
          Descargar CV
        </Button>
        <Button
          className=""
          onClick={() =>
            window.open("./docs/HUMBERTO DIAZ - ENGLISH.pdf", "_blank")
          }
        >
          Download CV
        </Button>
      </div>
    </motion.div>
  );
};
