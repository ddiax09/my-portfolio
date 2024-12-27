import { NavBar } from "../components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <NavBar />
      <div className="mx-8 lg:max-w-4xl">
        <h1 className="text-4xl lg:text-6xl font-bold pt-28">
          Bolgean development process
        </h1>
        <div className="md:grid md:grid-cols-2 gap-8 items-start pt-10">
          <p className="text-lg text-gray-500 dark:text-neutral-300 mb-4 md:mb-0">
          The development of the Bolgean Project app will follow the Agile Scrum methodology, leveraging Figma for UI/UX design and Visual Basic for programming. The process will focus on iterative development and regular feedback to ensure functionality and user satisfaction.
          </p>

          <div className="max-w-sm justify-self-end space-y-4">
            <div className="flex border-b border-gray-300 dark:border-gray-700 pb-2">
              <p className="font-medium pr-20">Year:</p>
              <p className="text-gray-500 dark:text-neutral-300">2023</p>
            </div>
            <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-2">
              <p className="font-medium mr-4">Collaborators:</p>
              <p className="text-gray-500 dark:text-neutral-300">
                Luis Fernando Bautista, José Lino Miranda, Luis Miguel Valencia
              </p>
            </div>
          </div>
        </div>

        <Image
          src="/img/Bolgean/Bolgean-Page.png"
          alt="Bolgean App mockup"
          layout="responsive"
          width={16}
          height={9}
          className="rounded-lg shadow-lg mt-10"
        />

        <h2 className="py-10 text-lg">
        The Bolgean app is a specialized software tool designed for professionals and enthusiasts in the telecommunications field. It provides comprehensive information on various antenna types and their functionalities. Users can perform a guided test to receive personalized recommendations for antennas based on specific requirements and environmental factors. The app also includes robust tools to calculate key configuration parameters for optimal antenna performance. By combining user-friendly interfaces with powerful algorithms, the app simplifies complex decision-making processes. Developed using Visual Basic on the .NET Framework, it ensures reliability and efficiency. This tool is an invaluable resource for streamlining antenna-related tasks
        </h2>

        <div className="lg:flex pt-20">
          <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
          <div>
            <p className="text-md md:ml-20 text-gray-500 dark:text-neutral-300">
            In the field of telecommunications, users often struggle with accessing reliable information, optimizing antenna configurations, and choosing suitable antennas. The Bolgean app addresses these challenges by automating calculations and recommendations, thus simplifying complex technical decisions.
            </p>
          </div>
        </div>

        <div className="lg:flex pt-20">
          <h2 className="text-2xl font-bold mb-4 md:w-[130px]">Development process</h2>
          <div>
            <p className="text-md md:ml-16 text-gray-500 dark:text-neutral-300">
            The design process utilized Figma for creating intuitive and user-friendly UI/UX designs, ensuring accessibility and visual appeal. Each feature was carefully prototyped, tested with users, and refined iteratively. This collaborative and feedback-driven approach aligned with Scrum principles for optimal results. 
            </p>
          </div>
        </div>

        <div className="lg:flex pt-20">
          <h2 className="text-2xl  font-bold mb-4">Phase 1: Initiation</h2>
          <div className="md:ml-12 ">
            <p className=" text-md font-bold">Activities:</p>
            <ul className="list-disc pl-4 pt-4 text-gray-500 dark:text-neutral-300">
              <li>
              Define project vision and goals.
              </li>
              <li>
              Develop a product backlog with prioritized features: antenna information module, antenna recommendation test, parameter calculation functionality.
              </li>
              <li>
              Form the Scrum team (Product Owner, Scrum Master, Development Team).
              </li>
              <li>
              Establish technical requirements: Use Figma for design, and Visual Basic with .NET Framework 4.8 for development.
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:flex pt-20">
          <h2 className="text-2xl  font-bold mb-4 lg:w-[140px]">Phase 2: Design (Sprint 1)</h2>
          <div className="md:ml-12 ">
            <p className=" text-md font-bold">Activities:</p>
            <ul className="list-disc pl-4 pt-4 text-gray-500 dark:text-neutral-300">
              <li>
              Wireframing & Prototyping:
              </li>
              <li>
              Use Figma to design UI/UX for the main modules.
              </li>
              <li>
              Conduct user testing to refine designs.
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:flex pt-20">
          <h2 className="text-2xl  font-bold mb-4">Phase 3: Development</h2>
          <div className="md:ml-0 ">
            <p className=" text-md font-bold">Activities:</p>
            <ul className="list-disc pl-4 pt-4 text-gray-500 dark:text-neutral-300">
              <li>
              Sprint 2: Develop the Antenna Information Module, including UI development and content display.
              </li>
              <li>
              Sprint 3: Create the Antenna Recommendation Test, including logic implementation for recommendations, form UI, and result display.
              </li>
              <li>
              Sprint 4: Build the Parameter Calculation Module, including the algorithm development, UI for input/output, and testing calculations.
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:flex pt-20">
          <h2 className="text-2xl  font-bold mb-4 lg:w-[150px]">Phase 4: Testing (Sprint 5)</h2>
          <div className="md:ml-12 ">
            <p className=" text-md font-bold">Activities:</p>
            <ul className="list-disc pl-4 pt-4 text-gray-500 dark:text-neutral-300">
              <li>
              Conduct integration testing to ensure seamless module interaction.
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:flex pt-20">
          <h2 className="text-2xl  font-bold mb-4 lg:w-[150px]">Phase 5: Final Review (Sprint 6)</h2>
          <div className="md:ml-12 ">
            <p className=" text-md font-bold">Activities:</p>
            <ul className="list-disc pl-4 pt-4 text-gray-500 dark:text-neutral-300">
              <li>
              Deploy the app to the production environment.
              </li>
              <li>
              Host a sprint retrospective to review the development process and identify improvements.
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:flex pt-20">
            
        <iframe className="w-full h-[200px] md:h-[550px] mb-20"  src="https://www.youtube.com/embed/fx-L1FcnSwA" title="Bolgean Project   video"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </div>
  );
}
