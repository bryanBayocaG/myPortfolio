import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ImageKo() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{
        duration: 1,
        delay: 0.75,
      }}
      className="flex-1 w-[150px] bg-black-200 rounded-l-full justify-items-end hidden md:flex"
    >
      <img className="absolute bottom-0 right-0 w-96 " src="/me.png" alt="" />
    </motion.div>
  );
}

export default ImageKo;
