"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React from "react";
import Content from "./components/Content";
import AllPageWrapper from "@/components/AllPageWrapper";
import Header from "@/components/Header";

const items = [
  {
    img: "/grad.svg",
    title: "Education",
    description: "Item 1 blab blab blab bla",
  },
  {
    img: "/tools.svg",
    title: "Skills",
    description: "Item 1 blab blab blab bla",
  },
  {
    img: "/valorant.svg",
    title: "Hobbies",
    description: "Item 1 blab blab blab bla",
  },

];


function Page() {

  return (

    <AllPageWrapper>
      <>
        <FloatingNav navItems={navItems} />
        <Header />
        <Content items={items} />
      </>
    </AllPageWrapper>

  );
}

export default Page;
