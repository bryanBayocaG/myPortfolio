import React from "react";
import ReactLoading from "react-loading";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Reveal } from "./ui/Reveal";
import { gridItems } from "@/data";
import dynamic from "next/dynamic";

const Loading = () => {
  return (
    <div className="flex relative flex-col w-full  bottom-40 justify-center items-center">
      <ReactLoading
        type={"bubbles"}
        color={"#ffffff"}
        height={300}
        width={375}
      />
      <h6 className="text-3xl">Loading...</h6>
    </div>
  );
};

export default Loading;
