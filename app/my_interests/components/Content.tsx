import React from "react";
import { motion } from "framer-motion";



interface Props {
  text: string;
  index: number;

}

function Content({ text, index }: Props) {

  return (
    <motion.div
      className="flex w-[50vw] h-[50vh] items-center justify-center border border-slate-600 rounded-xl mb-10 odd:self-end"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
    // viewport={{ once: true }}
    >
      <p className="card-text">{text}</p>
    </motion.div>
  );
}




export default Content;
