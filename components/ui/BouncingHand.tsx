import { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";
import dynamic from "next/dynamic";

const ICON = require("@/data/hover-swipe.json");

export default function PlayOnce() {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }
  const size = useWindowSize();
  const currentWidthScreen = size.width;

  let iconSize = currentWidthScreen >= 768 ? 80 : 0;

  return (
    <Player
      ref={playerRef}
      size={iconSize}
      icon={ICON}
      colorize="#ffffff"
      onComplete={() => playerRef.current?.playFromBeginning()}
    />
  );
}
