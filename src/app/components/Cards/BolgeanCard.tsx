import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

export const BolgeanCard = () => {
  return (
    <Link href="./bolgean-app/" target="_blank">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 },
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
                src="./img/Bolgean/Bogean-Card.png"
                className="rounded-tl-lg rounded-tr-lg w-full h-auto mb-4"
                alt="Bolgean App"
              />
            </motion.div>
          </div>
          <div className="flex justify-between px-4">
            <h2 className=" text-xl font-bold">Bolgean Desktop  App</h2>
            <p className="text-gray-600 dark:text-gray-400">2023</p>
          </div>
          <p className="px-4 pt-2 text-sm text-gray-500 dark:text-neutral-300">
            UX / UI Designer and developer of the Bolgean software, a software system designed to provide information, calculate parameters, and recommend configurations for antennas in the telecommunications field.
          </p>
          <div className="flex px-4 pt-2 mb-4">
            <p>Technologies: </p>
            <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="#68217a" d="M29.821 4.321L24.023 2l-12.53 12.212l-7.66-5.827l-1.654.837V22.8l1.644.827l7.65-5.827L24.023 30l5.8-2.321V4.321ZM4.65 19.192v-6.374l3.55 3.167ZM16 15.985l7.082-5.3v10.639l-7.092-5.339Z"/><path fill="#fff" d="m15.995 15.985l7.082-5.299v10.638l-7.092-5.339zM4.65 19.192v-6.374l3.546 3.167z"/><path fill="#efeef0" d="M17.631 32.03H11.87l-4.359-16.5h6.705l.533 2.739l.533-2.739h6.703z"/><path fill="#efeef0" d="M27.556 32.03h-7.311v-16.5l7.37.011a4.52 4.52 0 0 1 3.24 2.115a5.03 5.03 0 0 1 .69 2.592a5.16 5.16 0 0 1-.643 2.471a5 5 0 0 1-.21.332a5 5 0 0 1 .6.771a5.04 5.04 0 0 1 .7 2.586a5.76 5.76 0 0 1-.623 2.89a5.33 5.33 0 0 1-3.7 2.713Z"/><path fill="#00519a" d="m13 17.153l1.749 8.993l1.751-8.993H20l-3.5 13.254H13L9.5 17.153Zm8.745 0h5.7a3.03 3.03 0 0 1 2.174 1.42a3.26 3.26 0 0 1 .428 1.656a3.44 3.44 0 0 1-.428 1.651a3.12 3.12 0 0 1-1.756 1.431a3.05 3.05 0 0 1 2.2 1.426a3.3 3.3 0 0 1 .435 1.7a4.04 4.04 0 0 1-.434 2.067a3.79 3.79 0 0 1-2.624 1.9h-5.69Zm3.5 5.207h.874a1.393 1.393 0 0 0 1.213-1.528a1.374 1.374 0 0 0-1.213-1.313h-.874Zm0 5.684h1.045a1.62 1.62 0 0 0 1.45-1.744a1.6 1.6 0 0 0-1.45-1.57h-1.045Z"/></svg>

            <svg
              className="ml-4"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
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
              onClick={() => (window.location.href = "./bolgean-app/")}
              variant="outline"
              className="mb-4 w-28"
            >
              Watch project
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
