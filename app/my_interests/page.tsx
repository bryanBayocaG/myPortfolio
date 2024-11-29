"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import PageTransition from "@/components/ui/PageTransition";
// import { Reveal } from "@/components/ui/Reveal";
import React from "react";

function Page() {
  return (
    <PageTransition>
      <>
        <FloatingNav navItems={navItems} />
        <div className="">
          <h1>interest</h1>
          <p>hshdkaksdhjfkljahsdljh ahsdkjfhajsdhl</p>
        </div>

        <div className="">
          <h1>interest</h1>
          <p>hshdkaksdhjfkljahsdljh ahsdkjfhajsdhl</p>
        </div>
      </>
    </PageTransition>
  );
}

export default Page;
