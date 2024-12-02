"use client";
import AllPageWrapper from "@/components/AllPageWrapper";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import PageTransitionStairs from "@/components/ui/PageTransitionStairs";
import React from "react";
import Content from "./components/Content";
import { navItems } from "@/data";

const page = () => {
  return (
    <PageTransitionStairs>
      <AllPageWrapper>
        <>
          <FloatingNav navItems={navItems} />
          <div className="h-20 " />
          <Content />
        </>
      </AllPageWrapper>
    </PageTransitionStairs>
  );
};

export default page;
