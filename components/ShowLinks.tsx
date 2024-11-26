"use client";
import React, { Suspense, useEffect, useState } from "react";
import MagicButton from "./ui/MagicButton";
import { IoLinkSharp } from "react-icons/io5";
const Links = React.lazy(() => import("./ui/Links"));

const ShowLinks = () => {
  const [shown, setShown] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Ensure this component hydrates properly
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Avoid mismatched HTML during server-client rendering
    return null;
  }
  return (
    <>
      <button
        data-type="hero"
        onClick={() => setShown(!shown)}
        className={shown ? "hidden" : "visible"}
      >
        <MagicButton
          title="Show Links"
          icon={<IoLinkSharp className="w-5 h-5" />}
          position="right"
        />
      </button>
      {shown && (
        <Suspense>
          <Links />
        </Suspense>
      )}
    </>
  );
};

export default ShowLinks;
