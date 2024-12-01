import React from "react";
import { motion, Variants } from "framer-motion";


interface Props {
  emoji: string;

}

const cardVariants: Variants = {
  offscreen: {
    y: 0
  },
  onscreen: {
    y: 10,
    rotate: -20,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji }: Props) {

  return (
    <motion.div
      className="card-container h-48 flex relative my-16 mx-5 bg-red-700 border border-zinc-50 rounded-xl"
      // style={{ clipPath: 'inset(0px 0px 10px 0px)' }}
      initial="offscreen"
      whileInView="onscreen"
    // viewport={{ once: true, amount: 0.8 }}
    >
      <div className="absolute -top-10 -left-2">
        <motion.div
          className="flex w-32 h-52 md:w-[300px] md:h-[400px] text-9xl items-center justify-center rounded-xl bg-white"
          // style={{ transformOrigin: "3% 60%" }}
          variants={cardVariants}
        >
          {emoji}
        </motion.div>
      </div>
      <div className="flex-[1] ">
        <h1>Hello</h1>
      </div>
    </motion.div>
  );
}



const Content = () => {
  const food = [
    "🍅",
    "🍊",
    "🍋",
    "🍐",
    "🍏",
    "🫐",
    "🍆",
    "🍇"
  ];
  // const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  return food.map((emoji, i) => (


    <Card emoji={emoji} key={emoji} />


  ));
};

export default Content;
