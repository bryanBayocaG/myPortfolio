"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import PageTransitionStairs from "@/components/ui/PageTransitionStairs";
import React from "react";
import Content from "./components/Content";
import AllPageWrapper from "@/components/AllPageWrapper";

function Page() {
  return (
    <PageTransitionStairs>
      <AllPageWrapper>
        <>
          <FloatingNav navItems={navItems} />
          <div className="h-20" />
          <Content />
        </>
      </AllPageWrapper>
    </PageTransitionStairs>
  );
}

export default Page;
