import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: JSX.Element;
}

const PageTransition = ({ children }: Props) => {
  // const anim = (variants: Variants) => {
  //   return {
  //     initial: "initial",
  //     animate: "enter",
  //     exit: "exit",
  //     variants,
  //   };
  // };
  // const expand = {
  //   initial: {
  //     top: 0,
  //   },
  //   enter: {
  //     top: "100%",
  //     transition: {
  //       duration: 0.4,
  //     },
  //   },
  // };
  const numOfColumn = 5;
  return (
    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }}>
      {/* <div className="transition-container h-screen w-screen fixed top-0 left-0 pointer-events-none flex">
        {[...Array(numOfColumn)].map((_, i) => {
          return (
            <motion.div
              // {...anim(expand)}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              // variants={{
              //   hidden: { top: 0 },
              //   visible: { top: "100%" },
              // }}
              transition={{ duration: 1 }}
              className="h-full w-full relative"
              key={i}
            />
          );
        })}
      </div> */}
      {children}
    </motion.div>
  );
};

export default PageTransition;
