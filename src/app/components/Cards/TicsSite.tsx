import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

export const TicsSiteCard = () => {
  return (
    <Link href="https://tics.cdhidalgo.tecnm.mx/index.html" target="_blank">
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
                src="./img/TicWebsite/pic1.png"
                className="rounded-tl-lg rounded-tr-lg w-full h-auto mb-4"
                alt="CIICI website display"
              />
            </motion.div>
          </div>
          <div className="flex justify-between px-4">
            <h2 className=" text-xl font-bold">Ingeniería en TIC Website</h2>
            <p className="text-gray-600 dark:text-gray-400">2022</p>
          </div>
          <p className="px-4 pt-2 text-sm text-gray-500 dark:text-neutral-300">
            Designer and developer of the homepage for the Ingeniería en TIC official website.
          </p>
          <div className="flex px-4 pt-2 mb-4">
            <p>Technologies: </p>
            
            <svg className="mx-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"/><path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"/></svg>

            <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F0DB4F" rx="60"/><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g></svg>
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
