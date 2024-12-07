"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const NavBar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };
  return (
    <nav className="fixed top-0 z-50 w-full bg-background">
      <div className="mx-auto px-4 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shink-0 flex justify-center items-center">
              <Avatar className=" w-10 h-10 mr-4 ">
                <AvatarImage src="./img/avatar.png" />
                <AvatarFallback>HD</AvatarFallback>
              </Avatar>
              <a className="font-bold" href="./">
                Humberto Diaz Nava
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items center space-x-4">
              <a className="pr-2 hover:text-muted-foreground" href="./">
                Home
              </a>
              <a className="pr-2 hover:text-muted-foreground" href="./#MyWork">
                Recent Works
              </a>
              <a className="pr-2 hover:text-muted-foreground" href="./#AboutMe">
                My Background
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="px-4 lg:px-0 flex">
              <Button
                className="mr-4 hidden md:block"
                onClick={() =>
                  window.open("./docs/HUMBERTO DIAZ - ENGLISH.pdf", "_blank")
                }
              >
                Download CV
              </Button>
              <ModeToggle></ModeToggle>
            </div>
            <div className=" md:hidden">
              <Button
                variant="outline"
                className="inline-flex items-center justify-center p-2 rounded-md"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g className="x-outline">
                      <g
                        fill="currentColor"
                        fillRule="evenodd"
                        className="Vector"
                        clipRule="evenodd"
                      >
                        <path d="M5.293 5.293a1 1 0 0 1 1.414 0L19.435 18.02a1 1 0 0 1-1.414 1.414L5.293 6.707a1 1 0 0 1 0-1.414" />
                        <path d="M19.707 5.293a1 1 0 0 1 0 1.414L6.979 19.435a1 1 0 1 1-1.414-1.414L18.293 5.293a1 1 0 0 1 1.414 0" />
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden ">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            <a className="block py-2" href="./">
              Home
            </a>
            <a className="block py-2" href="./#MyWork">
              Recent Works
            </a>
            <a className="block py-2" href="./#AboutMe">
              My Background
            </a>
            <a
              className="block py-2 bg-primary text-center text-background rounded-lg"
              href="./docs/HUMBERTO DIAZ - ENGLISH.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
      <Separator />
    </nav>
  );
};
