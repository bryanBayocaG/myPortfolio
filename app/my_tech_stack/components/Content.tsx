"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import { StickyScroll } from "@/components/ui/StickyScrollReveal";
import Rating from '@mui/material/Rating';
import { HoverEffect } from "@/components/ui/CardHoverEffect";


const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
        color: '#ffffff',
    }
});


const content = [
    {
        title: "JavaScript",
        description:
            "I like how I can use this programming laguage for adding a behavior to my web applications, it makes interactions smooth and more dynamic, allowing me to create engaging user experiences effortlessly.",
        content: (
            <div className="grid grid-rows-3 h-full w-full my-2 items-center justify-center p-5">
                <div
                    style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                    className="flex relative items-center justify-center -mt-16 lg:-mt-16">
                    <div className="">
                        <Image
                            src="/javascript.svg"
                            alt="img"
                            width={0}
                            height={0}
                            className="w-5 h-5 lg:w-10 lg:h-10"
                        />
                    </div>
                    <div className="ml-1">
                        <h1>Javascript</h1>
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full  w-full space-x-4 items-center -mt-6 lg:-mt-0 mb-4 lg:mb-0">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h6 className="font-bold text-sm lg:text-lg">Proficiency</h6>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center lg:flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={7}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full space-x-4 items-center -mt-4 lg:-mt-0 mb-2 lg:mb-0">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h1 className="font-bold text-sm lg:text-lg">Frequency of Use</h1>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={9}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full space-x-4 items-center ">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h1 className="font-bold text-sm lg:text-lg">Interest Level</h1>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={10}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "PHP",
        description:
            "I started my programming career with PHP and appreciate how it simplifies server-side logic and database integration. While I don’t use it much now, it laid a solid foundation for my understanding of programming, and I can still adapt to it when needed.",
        content: (
            <div className="grid grid-rows-3 h-full w-full my-2 items-center justify-center p-5">
                <div
                    style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                    className="flex relative items-center justify-center -mt-16 lg:-mt-16">
                    <div className="">
                        <Image
                            src="/php.svg"
                            alt="img"
                            width={0}
                            height={0}
                            className="w-5 h-5 lg:w-10 lg:h-10"
                        />
                    </div>
                    <div className="ml-1">
                        <h1>PHP</h1>
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full  w-full space-x-4 items-center -mt-6 lg:-mt-0 mb-4 lg:mb-0">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h6 className="font-bold text-sm lg:text-lg">Proficiency</h6>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center lg:flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={6}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full space-x-4 items-center -mt-4 lg:-mt-0 mb-2 lg:mb-0">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h1 className="font-bold text-sm lg:text-lg">Frequency of Use</h1>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={5}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full space-x-4 items-center ">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h1 className="font-bold text-sm lg:text-lg">Interest Level</h1>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={7}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Typescript",
        description:
            "I enjoy using TypeScript for its strong typing and enhanced code clarity, which helps catch errors early. It combines the flexibility of JavaScript with the reliability of static typing, making development more efficient and enjoyable.",
        content: (
            <div className="grid grid-rows-3 h-full w-full my-2 items-center justify-center p-5">
                <div
                    style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                    className="flex relative items-center justify-center -mt-16 lg:-mt-16">
                    <div className="">
                        <Image
                            src="/ts.svg"
                            alt="img"
                            width={0}
                            height={0}
                            className="w-5 h-5 lg:w-10 lg:h-10"
                        />
                    </div>
                    <div className="ml-1">
                        <h1>Typescript</h1>
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full  w-full space-x-4 items-center -mt-6 lg:-mt-0 mb-4 lg:mb-0">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h6 className="font-bold text-sm lg:text-lg">Proficiency</h6>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center lg:flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={7}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full space-x-4 items-center -mt-4 lg:-mt-0 mb-2 lg:mb-0">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h1 className="font-bold text-sm lg:text-lg">Frequency of Use</h1>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={8}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full space-x-4 items-center ">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h1 className="font-bold text-sm lg:text-lg">Interest Level</h1>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={10}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Tailwind CSS",
        description:
            "I love using Tailwind CSS because its built-in responsive utilities make creating mobile-friendly web applications incredibly easy, also because of it's shorter, intuitive syntax, writing CSS is more faster equip with VS code extension for auto completing the code.",
        content: (
            <div className="grid grid-rows-3 h-full w-full my-2 items-center justify-center p-5">
                <div
                    style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                    className="flex relative items-center justify-center -mt-16 lg:-mt-16">
                    <div className="">
                        <Image
                            src="/tail.svg"
                            alt="img"
                            width={0}
                            height={0}
                            className="w-5 h-5 lg:w-10 lg:h-10"
                        />
                    </div>
                    <div className="ml-1">
                        <h1>Tailwind CSS</h1>
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full  w-full space-x-4 items-center -mt-6 lg:-mt-0 mb-4 lg:mb-0">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h6 className="font-bold text-sm lg:text-lg">Proficiency</h6>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center lg:flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={9}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full space-x-4 items-center -mt-4 lg:-mt-0 mb-2 lg:mb-0">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h1 className="font-bold text-sm lg:text-lg">Frequency of Use</h1>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={9}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
                <div className="grid grid-row-2 lg:flex h-full space-x-4 items-center ">
                    <div className="w-full flex lg:justify-start justify-center lg:flex-[1]">
                        <h1 className="font-bold text-sm lg:text-lg">Interest Level</h1>
                    </div>
                    <div style={{
                        background: "rgb(18, 22, 42)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                        className=" flex justify-center items-center flex-[2] h-fit rounded-full p-2 text-white">
                        <StyledRating
                            name="read-only"
                            value={10}
                            max={10}
                            size={"large"}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        ),
    },
];



export const projects = [
    {
        title: "Javascript",
        iconImg: "/javascript.svg",
        proficiency: 7,
        frequencyOfUse: 9,
        interestLevel: 10,

    },
    {
        title: "PHP",
        iconImg: "/php.svg",
        proficiency: 6,
        frequencyOfUse: 5,
        interestLevel: 7,

    },
    {
        title: "Typescript",
        iconImg: "/ts.svg",
        proficiency: 7,
        frequencyOfUse: 8,
        interestLevel: 10,

    },
    {
        title: "Tailwind CSS",
        iconImg: "/tail.svg",
        proficiency: 9,
        frequencyOfUse: 9,
        interestLevel: 10,

    },
    {
        title: "React",
        iconImg: "re.svg",
        proficiency: 8,
        frequencyOfUse: 9,
        interestLevel: 10,

    },
    {
        title: "NextJS",
        iconImg: "next.svg",
        proficiency: 8,
        frequencyOfUse: 9,
        interestLevel: 10,

    },
    {
        title: "Laravel",
        iconImg: "laravel-2.svg",
        proficiency: 7,
        frequencyOfUse: 7,
        interestLevel: 8,

    },
    {
        title: "Mysql",
        iconImg: "mysql.svg",
        proficiency: 7,
        frequencyOfUse: 7,
        interestLevel: 10,

    },
];



const Content = () => {


    return (
        <>
            <div className="hidden md:block">
                <StickyScroll content={content} />
            </div>
            <div className="grid md:hidden ">
                <HoverEffect items={projects} />
            </div>
        </>
    )

};

export default Content;
