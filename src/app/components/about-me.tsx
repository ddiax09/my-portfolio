"use client";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AboutMe = () => {
  return (
    <div className="mx-8 lg:mx-20 w-auto my-10" id="AboutMe">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className=" text-4xl lg:text-6xl font-bold">My Background </h1>
            <p className=" py-10 text-md lg:pr-16">
            I am a 9th-semester student pursuing a degree in Information and Communication Technology Engineering, currently seeking an opportunity to complete my professional residency process. My main areas of interest include front-end and mobile development, as well as UI/UX design. I am 22 years old and study at the Instituto Tecnológico Superior de Ciudad Hidalgo.

            Throughout my academic journey, I have actively participated in various projects and activities that highlight my skills and dedication to continuous learning. Some of my most notable experiences include:
            </p>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl ">
                Web Developer for the IEEE Student Branch at ITSH
              </AccordionTrigger>
              <AccordionContent className="text-md text-muted-foreground">
                I collaborated as the main designer and developer within the
                IEEE Student Branch at the Instituto Tecnológico Superior de Huauchinango from June 2024 to December 2024. I developed the website for CIICTI 2024 and provided training to
                other students at the institute to ensure they could manage the
                site in the future.
              </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl ">
                  Research Activities
                </AccordionTrigger>
                <AccordionContent className="text-md text-muted-foreground">
                  During the August December 2024 semester, I served as the
                  primary author of the article titled “PROJECTION OF VISITS TO
                  CULTURAL SITES IN MEXICO USING THE ARIMA MODEL.” I
                  collaborated with junior students from my program, leading the
                  research process and presenting the article at the INGECO 2024
                  Congress.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">
                  Summer Internship
                </AccordionTrigger>
                <AccordionContent className="text-md text-muted-foreground">
                  From June to August 2024, I participated in the Delfín Program
                  2024, completing a research internship at ITSH. I contributed
                  to projects involving virtual and augmented reality, such as
                  an interactive VR tour of the institute.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl ">
                  Web Development Course Instructor
                </AccordionTrigger>
                <AccordionContent className="text-md text-muted-foreground">
                  During the January June 2024 semester, I was an instructor for
                  the “Development and Deployment of Websites with HTML and CSS
                  Course.” Along with other colleagues, I taught high school
                  students basic web development concepts as part of activities
                  promoting our academic program.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl ">
                  Lifelong Learning
                </AccordionTrigger>
                <AccordionContent className="text-md text-muted-foreground">
                  I always try to learn new things. I
                  continuously take courses beyond my academic curriculum, such
                  as the “Virtual and Augmented Reality Course” offered by
                  CIDESI in August 2024, the “Google UX Design Certificate
                  Program” provided by Google on Coursera, and I recently
                  started the “General English Certificate Program” offered by
                  The Anglo Academy to further improve my English proficiency.
                </AccordionContent>
              </AccordionItem>
          </Accordion>
        </div>
      </motion.div>
    </div>
  );
};
