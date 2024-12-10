import { NavBar } from "../components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <NavBar />
      <div className="mx-8 lg:max-w-4xl">
        <h1 className="text-4xl lg:text-6xl font-bold pt-28">
          FindMe Mobile App Design process
        </h1>
        <div className="md:grid md:grid-cols-2 gap-8 items-start pt-10">
          <p className="text-lg text-gray-500 dark:text-neutral-300 mb-4 md:mb-0">
            This case study details part of the design process used to create the mobile
            app prototype "FindMe" designed to help people hire local providers
            of home services.
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
          src="/img/FindMe/pic1.png"
          alt="FindMe App mockup"
          layout="responsive"
          width={16}
          height={9}
          className="rounded-lg shadow-lg mt-10"
        />

        <h2 className="py-10 text-lg">
          FindMe is a user-friendly mobile app concept designed to connect
          individuals with local providers of home services, such as
          electricians, doctors, plumbers, and cleaners. The app aims to
          simplify the process of finding and hiring professionals by providing
          a centralized platform where users can browse a diverse range of
          services, read reviews, compare prices, and contact providers
          directly.
        </h2>

        <div className="lg:flex pt-10">
          <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>
          <div>
            <p className="text-md md:ml-20 text-gray-500 dark:text-neutral-300">
              Finding quality home services has always been a challenge,
              particularly in non-urbanized areas where the variety of options
              is limited. The COVID-19 pandemic has made worse this
              issue by making it harder for local service providers to grow
              their client base. The lack of suitable platforms to advertise
              their services forces them to rely mainly on word-of-mouth
              recommendations, leading many to face significant challenges in
              sustaining their businesses.
            </p>
          </div>
        </div>

        <div className="lg:flex pt-10">
          <h2 className="text-2xl font-bold mb-4">Design Thinking Framework</h2>
          <div>
            <p className="text-md md:ml-16 text-gray-500 dark:text-neutral-300">
              We opted to follow the Design Thinking approach for the design process of this project, following each one of the five phases: empathize, define, ideate, prototype, and test. By following this structure we ensure that our building solution can solve the problems of real users. 
            </p>
          </div>
        </div>

        <Image
                src="/img/FindMe/Design Thinking.png"
                alt="Design Thinking Framework"
                layout="responsive"
                width={16}
                height={9}
                className="rounded-lg shadow-lg mt-10"
              />

        <div className="lg:flex pt-10">
          <h2 className="text-2xl  font-bold mb-4">Research</h2>
          <div className="md:ml-12 ">
            <p className=" text-md font-bold">Target group:</p>
            <ul className="list-disc pl-4 pt-4 text-gray-500 dark:text-neutral-300">
              <li>
                People living in rural or less urbanized areas who have limited
                access to home service providers.
              </li>
              <li>
                Individuals who prefer the convenience of finding and hiring
                professionals through a mobile app.
              </li>
              <li>
                People who need urgent home repairs or services but do not know
                where to find reliable professionals.
              </li>
              <li>
                Homeowners looking for affordable, local, and trustworthy
                service providers.
              </li>
              <li>
                Elderly people who struggle with finding home service providers
                through traditional means, like word-of-mouth.
              </li>
              <li>
                Small business owners and local professionals who need a
                platform to promote their services.
              </li>
            </ul>

            <p className=" text-md font-bold pt-10">Goals:</p>
            <ul className="list-disc pl-4 pt-4 text-gray-500 dark:text-neutral-300">
              <li>Find a simple solution for the target group.</li>
              <li>Evaluate the viability of the solution.</li>
            </ul>

            <p className=" text-md font-bold pt-10">Research process:</p>
            <p className="text-md pt-4 text-gray-500 dark:text-neutral-300">
              We decided to collect information about the target group by using
              surveys designed to collect and analyze the pain points the people
              have when hiring service providers and the problems the
              professionals have when they try to announce their services. We
              also explored other similar apps in the market to identify their
              focuses, UX/UI, key features and user flows.
            </p>
          </div>
        </div>

        <div className="lg:flex pt-10">
          <h2 className="text-2xl  font-bold mb-4">User Needs</h2>
          <div className="md:ml-20 ">
            <p className=" text-md font-bold">People searching for services:</p>
            <ul className="list-disc pl-4 pt-4 text-gray-500 dark:text-neutral-300">
              <li>The need to find professionals fast.</li>
              <li>An easy way to contact with them.</li>
              <li>The need to compare similar services.</li>
              <li>To know the opinion of other people about the services.</li>
            </ul>

            <p className=" text-md font-bold pt-10">
              People announcing their services:
            </p>
            <ul className="list-disc pl-4 pt-4 text-gray-500 dark:text-neutral-300">
              <li>A fast way to connect with customers.</li>
              <li>The need to show their work.</li>
            </ul>

            <p className=" text-md font-bold pt-10">Connecting all together:</p>
            <p className="text-md pt-4 text-gray-500 dark:text-neutral-300">
              After conducting our research, we identified two types of user
              personas. The first is Felipe, who is looking for a personal
              service but struggles to find the right person to address his
              problem, leading to frustration. The second is Luis, who is trying
              to promote his services to attract more clients. However, his
              efforts on traditional social media have not given him good
              results, and he needs a new platform to advertise his services.
            </p>
          </div>
        </div>

        <div className="lg:flex py-10">
          <h2 className="text-2xl  font-bold mb-4 md:pr-10">Design</h2>
          <div className="md:pl-8">
            <p className="text-md pb-4 text-gray-500 dark:text-neutral-300">
              Once we finished the research process, understood the user personas and created a solid user flow for all the key features of our app, we conducted a process of testing and validating our prototype. In the next picture we show some pictures of the last iteration of the prototype. 
            </p>
            <Image
              src="/img/FindMe/Design.png"
              alt="FindMe App Design Part 1"
              layout="responsive"
              width={16}
              height={9}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
