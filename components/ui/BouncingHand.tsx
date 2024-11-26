import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

const ICON = require("@/data/hover-swipe.json");

export default function PlayOnce() {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <Player
      ref={playerRef}
      size={96}
      icon={ICON}
      colorize="#ffffff"
      onComplete={() => playerRef.current?.playFromBeginning()}
    />
  );
}
