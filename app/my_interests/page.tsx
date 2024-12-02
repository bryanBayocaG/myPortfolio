"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React from "react";
import Content from "./components/Content";
import AllPageWrapper from "@/components/AllPageWrapper";


function Page() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (

    <AllPageWrapper>
      <>
        <FloatingNav navItems={navItems} />
        <div className="h-28 " />

        <div className="flex flex-col">
          {items.map((item, i) => (<Content key={i} text={item} index={i} />))}
        </div>
      </>
    </AllPageWrapper>

  );
}

export default Page;
