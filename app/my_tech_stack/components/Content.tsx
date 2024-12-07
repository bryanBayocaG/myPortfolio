"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import { StickyScroll } from "@/components/ui/StickyScrollReveal";
import Rating from '@mui/material/Rating';
import { HoverEffect } from "@/components/ui/CardHoverEffect";




// interface Props {
//     emoji: string;

// }

const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
        color: '#ffffff',
    }
});

// const cardVariants: Variants = {
//     offscreen: {
//         top: 0
//     },
//     onscreen: {
//         top: 10,
//         rotate: -20,
//         transition: {
//             type: "spring",
//             bounce: 0.4,
//             duration: 0.8
//         }
//     }
// };

// function Card({ emoji }: Props) {
//     return (
//         <motion.div
//             className="card-container h-48 flex relative my-5 md:my-12 mx-5  bg-black border-slate-700 border rounded-xl"
//             initial="offscreen"
//             whileInView="onscreen"
//         >
//             <div className="absolute -top-2 md:-top-10 md:-left-2 ">
//                 <motion.div
//                     className="flex w-40 h-48 md:w-[200px] md:h-[230px] text-9xl items-center justify-center rounded-xl bg-white"

//                     variants={cardVariants}
//                 >
//                     {emoji}
//                 </motion.div>
//             </div>
//             <div className="flex-[1]"></div>
//             <div className="relative flex-[2] justify-items-center my-auto">
//                 <h1 className=" backdrop-blur-[18px]">Hello asdfasdf adsfasdf asdfasdf sdfaasdfasdf</h1>
//             </div>
//         </motion.div>
//     );
// }

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
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];



const Content = () => {
    // const food = [
    //     "🍅",
    //     "🍊",
    //     "🍋",
    //     "🍐",
    //     "🍏",
    //     "🫐",
    //     "🍆",
    //     "🍇"
    // ];

    return (
        <>
            <div className="hidden md:block">
                <StickyScroll content={content} />
            </div>

            <div className="grid md:hidden ">
                {/* {
                    food.map((emoji, i) => {
                        return <Card key={i} emoji={emoji} />
                    })
                } */}
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={projects} />
                </div>

            </div>
        </>
    )

};

export default Content;
