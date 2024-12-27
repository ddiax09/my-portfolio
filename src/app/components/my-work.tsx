"use client";
import { motion } from "motion/react";
import { Ciicti2024Card } from "./Cards/Ciicti2024Card";
import { FutChampionsCard } from "./Cards/FutChampions";
import { FindMeCard } from "./Cards/FindMeCard";
import { TicsSiteCard } from "./Cards/TicsSite";
import { BolgeanCard } from "./Cards/BolgeanCard";
export const MyWork = () => {
  return (
    <div className="" id="MyWork">
      <motion.div
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y:0, transition: { duration: 0.4}}}>
      <h1 className="mx-8 lg:mx-20 pt-20 text-4xl lg:text-6xl font-bold">Recent Works </h1>
      <p className="mx-8 lg:mx-20 pt-10 text-lg text-gray-500 dark:text-neutral-300">I’m excited to share some of my personal and academic projects that reflect my journey as a developer and designer. Whether it is building websites and mobile apps, conducting research, or exploring new technologies like virtual and augmented reality, each project represents a step forward in my growth. I hope they inspire collaboration, curiosity, and a deeper understanding of my work and aspirations.</p>
      </motion.div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-16 lg:mx-20 my-20">
      <Ciicti2024Card></Ciicti2024Card>
      <FutChampionsCard></FutChampionsCard>
      <FindMeCard></FindMeCard>
      <BolgeanCard/>
      <TicsSiteCard/>
    </div>
    </div>
  );
};
