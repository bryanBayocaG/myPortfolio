"use client";

import { navItems } from "@/data";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";

const AllComponent = dynamic(() => import("@/components/AllComponent"), {
  loading: () => <Loading />,
});

const Home = () => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShown(true);
    }, 1750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* {!shown && <Loading />} */}
        {shown && <AllComponent />}
      </div>
    </main>
  );
};

export default Home;
