import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  items: {
    img: string,
    title: string,
    description: string,
  }[];

}

function Content({ items }: Props) {

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <motion.div
          key={index}
          /* items-center justify-center */
          className={`w-[90vw] md:w-[80vw] lg:w-[70vw] h-fit p-5 my-20 md:my-24 lg:my-36 relative border border-slate-600 mb-10 odd:self-end ${index % 2 === 0 ? "md:rounded-l-full" : "md:rounded-r-full"}`}
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: index % 2 === 0 ? 100 : -100
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1 // Animation duration
            }
          }}
          viewport={{ once: true }}
        >
          <div className={`absolute -top-28 md:-top-28 lg:-top-56 ${index % 2 === 0 ? "-left-8 md:-left-20" : "-right-8 md:-right-20"}`}>
            <Image
              src={item.img}
              width={0}
              height={0}
              alt={item.img}
              className="w-[290px] md:w-[350px] lg:w-[600px]"
            />

          </div>
          <div className={`w-full relative p-5 ${index % 2 === 0 ? "justify-items-end" : "justify-items-start"}`}>
            <h5 className="card-text text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              {item.title}
            </h5>
          </div>
          <div>
            <h1>desc</h1>
          </div>
        </motion.div>
      ))}

    </div>
  );
}




export default Content;
