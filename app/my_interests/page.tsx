"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import PageTransitionStairs from "@/components/ui/PageTransitionStairs";
// import { Reveal } from "@/components/ui/Reveal";
import React from "react";
import Content from "./components/Content";

function Page() {
  return (
    <PageTransitionStairs>
      <main className="relative bg-black-100 justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Content />
        </div>
      </main>
    </PageTransitionStairs>
  );
}

export default Page;
