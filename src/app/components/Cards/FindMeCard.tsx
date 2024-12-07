import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

export const FutChampionsCard = () => {
  return (
    <Link href="">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: 0.2 },
        }}
        whileHover={{ y: -20 }}
      >
        <div className=" mx-8 md:mx-0 rounded-2xl border shadow">
          <div className="overflow-hidden rounded-tl-lg rounded-tr-lg">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="w-full h-auto"
            >
              <img
                src="./img/FindMe/pic1.png"
                className="rounded-tl-lg rounded-tr-lg w-full h-auto mb-4"
                alt="FindMe Mobile App display"
              />
            </motion.div>
          </div>
          <div className="flex justify-between px-4">
            <h2 className=" text-xl font-bold">FindMe App</h2>
            <p className="text-gray-600 dark:text-gray-400">2023</p>
          </div>
          <p className="px-4 pt-2 text-sm text-gray-500 dark:text-neutral-300">
            UX/UI Designer for the prototype of the FindMe Mobile App to help
            users to find home services near them.
          </p>
          <div className="flex px-4 pt-2 mb-4">
            <p>Technologies: </p>

            <svg
              className="ml-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 128 128"
            >
              <path
                fill="#0acf83"
                d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"
              />
              <path
                fill="#a259ff"
                d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"
              />
              <path
                fill="#f24e1e"
                d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"
              />
              <path
                fill="#ff7262"
                d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
              />
              <path
                fill="#1abcfe"
                d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"
              />
            </svg>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => (window.location.href = "./")}
              variant="outline"
              className="mb-4 w-28 hidden"
            >
              Watch project
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
