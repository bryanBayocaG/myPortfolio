"use client";

import { navItems } from "@/data";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import AllPageWrapper from "@/components/AllPageWrapper";


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

    <AllPageWrapper>
      <>
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* {!shown && <Loading />} */}
        {shown && <AllComponent />}
      </>
    </AllPageWrapper>




  );
};

export default Home;
