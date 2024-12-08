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
          <div className="relative justify-items-center space-y-4 p-2">
            <p className="text-gray-300"><span className="font-bold text-teal-50">The Lewis College</span> - Bachelor of Science in Information Technology</p>
            <p className="text-gray-300"><span className="font-bold text-teal-50">Awards:</span>  Distinction Award, Departmental Logo contest 3rd placer</p>
            <p className="text-gray-300"><span className="font-bold text-teal-50">School Year:</span> 2020 – 2024</p>
          </div>
        )
      },
      {
        subTitle: "Secondary Education",
        subDescription: (
          <div className="relative justify-items-center space-y-4 p-2">
            <p className="text-gray-300"><span className="font-bold text-teal-50">The Lewis College</span> - TVL Programming</p>
            <p className="text-gray-300"><span className="font-bold text-teal-50">Awards:</span>  With Honor</p>
            <p className="text-gray-300"><span className="font-bold text-teal-50">School Year:</span> 2016 – 2018</p>
          </div>
        )
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
