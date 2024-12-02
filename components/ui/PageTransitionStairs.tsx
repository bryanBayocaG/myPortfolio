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
      slideControl.start("enter");
    } else {
      slideControl.start("initial");
    }
  }, [isInView]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOneSecond(true);
    }, 1000);
    return () => clearTimeout(timeOut);
  });

  return (

    <div ref={ref} className="relative">
      {children}

      <div
        className={`absolute flex top-0 left-0 w-full h-[100vh] ${oneSecond ? "-z-50" : "z-[6000]"
          }`}
      >
        {[...Array(5)].map((_, i) => {
          return (
            <>
              <motion.div
                key={i}
                // variants={{
                //   /* initial: { height: "100%" },
                //   enter: { height: 0 }, */
                //   initial: { top: 0 },
                //   enter: { top: "100%" },
                // }}
                initial={{ top: "100%" }}
                // animate={slideControl}
                animate={{ top: 0 }}
                // exit={{ height: "100%" }}
                transition={{ duration: 0.25, ease: "easeIn", delay: 0.10 * i }}
                exit={{ top: "100%" }}
                // className="relative z-20 bg-blue-700 w-10 flex-[1] h-full"
                className="relative z-20 bg-blue-700 flex-[1]"
              />
            </>


          );
        })}
      </div>
    </div>
  );
};

export default PageTransitionStairs;
