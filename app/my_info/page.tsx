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
    subContent: [
      {
        subTitle: "Tertiary Education",
        subDescription: (
          <div>
            <h1>heyo</h1>
          </div>
        )
      },
      {
        subTitle: "Secondary Education",
        subDescription: "blahl lbablafsdf"
      }
    ],
  },
  {
    img: "/tools.svg",
    title: "Skills",
    subContent: [
      {
        subTitle: "Logo Making",
        subDescription: "blahl lbablafsdf"
      },
      {
        subTitle: "Photo Editing",
        subDescription: "blahl lbablafsdf"
      },
    ],
  },
  {
    img: "/valorant.svg",
    title: "Hobbies",
    subContent: [
      {
        subTitle: "Coding",
        subDescription: "blahl lbablafsdf"
      },
      {
        subTitle: "Online Games",
        subDescription: "blahl lbablafsdf"
      },
      {
        subTitle: "Anime",
        subDescription: "blahl lbablafsdf"
      },
    ],
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
