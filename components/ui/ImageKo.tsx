import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

function ImageKo() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();
  const [isOptimized, setOptimized] = useState(false);

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
      className="flex-1 bg-black-200 rounded-l-full justify-items-end hidden md:flex"
    >
      {/* <img
        className="absolute bottom-0 right-0 w-0 md:w-52 lg:w-96"
        src="/me.png"
        alt=""
      /> */}
      <Image
        src="/me.png"
        alt="ako"
        width={0}
        height={0}
        unoptimized={isOptimized}
        onLoad={(e) => setOptimized(true)}
        className="absolute bottom-0 right-0 w-0 md:w-72 lg:w-96"
      />
    </motion.div>
  );
}

export default ImageKo;
