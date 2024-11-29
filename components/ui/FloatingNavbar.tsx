"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import PulseEffect from "./PulseEffect";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // console.log("Scroll prog", scrollYProgress.get());
  const [visible, setVisible] = useState(true);

  const [itsZero, setitsZero] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } /* else {
          setVisible(false);
        } */
      }
      if (scrollYProgress.get() === 0 || scrollYProgress.get() === 1) {
        setitsZero(true);
      } else {
        setitsZero(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          scale: [1.2, 1],
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
        layout
        className={cn(
          `flex rounded-2xl fixed z-[5000] inset-x-0 mx-10 px-5 py-1 space-x-4  ${
            itsZero ? "bg-transparent" : " backdrop-blur-[16px] shadow-2xl"
          }`,
          // className={cn(
          //   `flex  rounded-2xl fixed z-[5000] inset-x-0 mx-10 px-10 py-5 space-x-4`,
          className
        )}
      >
        <Link href="/" className={cn("w-6/12 items-center flex")}>
          <PulseEffect>
            <Image
              width={28}
              height={0}
              unoptimized
              className=" w-28"
              src="/BryanLogo.png"
              alt="Logo"
            />
          </PulseEffect>
        </Link>
        <div className="invisible-space w-6/12"></div>
        <Link
          href="#"
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <FaGithub className="w-7 h-7" />
          <span className="hidden md:block text-sm !cursor-pointer">
            Github
          </span>
        </Link>
        <Link
          href="#"
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <CiLinkedin className="w-7 h-7" />
          <span className="hidden md:block text-sm !cursor-pointer">
            Linkedin
          </span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
