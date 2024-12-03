import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/SpotLight";
import { Reveal } from "./ui/Reveal";
import ImageKo from "./ui/ImageKo";
import React from "react";
import { IoIosPaper } from "react-icons/io";
import dynamic from "next/dynamic";

const Hero = () => {
  const BouncingHand = dynamic(() => import("./ui/BouncingHand"), {
    ssr: false,
  });
  return (
    <>
      <div className="pb-20 pt-36">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
         absolute top-0 left-0 flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
           bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex relative my-20 z-10 justify-center">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-end">
            <TextGenerateEffect
              words=" Hi there! I'm Bryan."
              className="text-center text-[40px] md:text-4xl lg:text-6xl"
            />

            {/* show when screen is less than medium  */}
            <div className="block md:hidden">
              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                I&apos;m a{" "}
                <span className="text-blue-700 font-bold">web developer</span>,
                residing in <span className="text-blue-700 font-bold">Bacoor</span>.
              </p>

              <a target="_blank" href="./bayoca_bryan_resume.pdf">
                <MagicButton
                  title="My Resume"
                  icon={<IoIosPaper className="w-5 h-5" />}
                  position="right"
                />
              </a>
            </div>

            {/* show when screen is medium and up */}
            <div className="hidden md:block">
              <Reveal>
                <p
                  data-type="hero"
                  className="text-center mb-4 text-sm md:text-base lg:text-2xl"
                >
                  I&apos;m a{" "}
                  <span className="text-blue-700 font-bold">webs developer</span>,
                  residing in <span className="text-blue-700 font-bold">Bacoor</span>.
                </p>
              </Reveal>
              <Reveal>
                <a
                  data-type="hero"
                  target="_blank"
                  href="./BAYOCA_BRYAN_RESUME.pdf"
                >
                  <MagicButton
                    title="My Resume"
                    icon={<IoIosPaper className="w-5 h-5" />}
                    position="right"
                  />
                </a>
              </Reveal>
            </div>
          </div>
          <ImageKo />
        </div>
      </div>
      <Reveal>
        <div className="relative flex w-full" data-type="hero">
          <div>
            <h1 className="heading text-3xl md:text-6xl font-extrabold text-center">
              Things <span className="text-blue-700">About Me. </span>
            </h1>
          </div>
          <div className="text-white rotate-90 justify-items-end ">
            <BouncingHand />
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Hero;
