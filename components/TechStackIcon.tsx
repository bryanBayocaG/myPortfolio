"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedToolTip";
const people = [
    {
        id: 1,

        name: "Javascript",
        designation: "Programming Language",
        image:
            "javascript.svg",
    },
    {
        id: 2,

        name: "PHP",
        designation: "Programming Language",
        image:
            "php.svg",
    },
    {
        id: 3,

        name: "Type Script",
        designation: "Programming Language",
        image:
            "ts.svg",
    },
    {
        id: 4,
        name: "Tailwind",
        designation: "CSS Framework",
        image:
            "tail.svg",
    },
    {
        id: 5,
        name: "React",
        designation: "Javascript Library",
        image:
            "re.svg",

    },
    {
        id: 6,

        name: "NextJS",
        designation: "React Framework",
        image:
            "next.svg",
    },
    {
        id: 7,
        name: "Laravel",
        designation: "PHP Framework",
        image:
            "/laravel-2.svg",

    },
    {
        id: 8,
        name: "MySQL",
        designation: "RDBMS",
        image:
            "mysql.svg",


    },
];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-start md:justify-center justify-items-center h-full w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}