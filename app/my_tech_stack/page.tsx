"use client";
import AllPageWrapper from "@/components/AllPageWrapper";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import React from "react";
import Content from "./components/Content";
import { navItems } from "@/data";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import Header from "@/components/Header";


const page = () => {
  return (

    <>
      <AllPageWrapper>
        <>
          <FloatingNav navItems={navItems} />
          <BackgroundBeamsWithCollision>
            <Header />
            <Content />
          </BackgroundBeamsWithCollision>
        </>
      </AllPageWrapper>
    </>

  );
};

export default page;
