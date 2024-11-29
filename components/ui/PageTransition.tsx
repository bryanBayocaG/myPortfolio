import React, { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useAnimation,
  useInView,
} from "framer-motion";

interface Props {
  children: JSX.Element;
}

const PageTransition = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      slideControl.start("visible");
    } else {
      mainControl.start("hidden");
      slideControl.start("hidden");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative h-screen ">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{
          duration: 0.75,
          delay: 0.5,
        }}
      >
        {children}
      </motion.div>

      <div className="absolute flex top-0 left-0 w-full h-full">
        {[...Array(5)].map((_, i) => {
          return (
            <motion.div
              key={i}
              variants={{
                hidden: { height: "100%" },
                visible: { height: 0 },
              }}
              initial="hidden"
              animate={slideControl}
              transition={{ duration: 1, ease: "easeIn" }}
              className=" z-20 bg-red-700  w-10 flex-[1]"
            >
              hey
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PageTransition;
