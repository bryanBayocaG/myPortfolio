import React, { useEffect, useRef, useState } from "react";
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

const PageTransitionStairs = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  const [oneSecond, setOneSecond] = useState(false);

  useEffect(() => {
    if (isInView) {
      slideControl.start("visible");
    } else {
      slideControl.start("hidden");
    }
  }, [isInView]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOneSecond(true);
    }, 1000);
    return () => clearTimeout(timeOut);
  });

  return (
    <div ref={ref} className="relative  ">
      {children}

      <div
        className={`absolute flex top-0 left-0 w-full h-full ${oneSecond ? "-z-50" : "z-[6000]"
          }`}
      >
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
              transition={{ duration: 0.75, ease: "easeIn", delay: 0.10 * i }}
              className=" z-20 bg-blue-700 w-10 flex-[1]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default PageTransitionStairs;
