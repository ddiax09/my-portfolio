import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

export const Ciicti2024Card = () => {
  return (
    <Link href="https://ciicti-mx.org" target="_blank">
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
                src="./img/CIICTI/pic1.png"
                className="rounded-tl-lg rounded-tr-lg w-full h-auto mb-4"
                alt="CIICI website display"
              />
            </motion.div>
          </div>
          <div className="flex justify-between px-4">
            <h2 className=" text-xl font-bold">CIICTI 2024 Website</h2>
            <p className="text-gray-600 dark:text-gray-400">2024</p>
          </div>
          <p className="px-4 pt-2 text-sm">
            Developer of the official website for the International Congress of
            Engineering, Science, Technology, and Innovation (CIICTI) 2024.
          </p>
          <div className="flex px-4 pt-2 mb-4">
            <p>Technologies: </p>
            <svg
              className="mx-4"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 128 128"
            >
              <circle cx="64" cy="64" r="64" />
              <path
                fill="url(#IconifyId1939380516ed1d80d4)"
                d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"
              />
              <path
                fill="url(#IconifyId1939380516ed1d80d5)"
                d="M81.778 38.4h8.533v51.2h-8.533z"
              />
              <defs>
                <linearGradient
                  id="IconifyId1939380516ed1d80d4"
                  x1="109"
                  x2="144.5"
                  y1="116.5"
                  y2="160.5"
                  gradientTransform="scale(.71111)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="IconifyId1939380516ed1d80d5"
                  x1="121"
                  x2="120.799"
                  y1="54"
                  y2="106.875"
                  gradientTransform="scale(.71111)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="pr-4"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 256 154"
            >
              <defs>
                <linearGradient
                  id="IconifyId1939380516ed1d80d8"
                  x1="-2.778%"
                  x2="100%"
                  y1="32%"
                  y2="67.556%"
                >
                  <stop offset="0%" stopColor="#2298BD" />
                  <stop offset="100%" stopColor="#0ED7B5" />
                </linearGradient>
              </defs>
              <path
                fill="url(#IconifyId1939380516ed1d80d8)"
                d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 128 128"
              fill="currentcolor"
            >
              <path d="M22.684 0h84.253v42.667H64.81zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333z" />
            </svg>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={() => (window.location.href = "./")}
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
