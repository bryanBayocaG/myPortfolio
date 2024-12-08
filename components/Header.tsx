'use client';
import Link from 'next/link'
import React from 'react'


import { usePathname } from 'next/navigation'
import { FlipWords } from './ui/FlipWords';

const Header = () => {
    const pathname = usePathname();
    const formattedPathname = pathname.slice(1).replace(/_/g, " ");

    let words = [""];

    if (pathname === "/my_tech_stack") {
        words = ["My tech stack", "What I use", "What I love"];
    }
    if (pathname === "/my_interests") {
        words = ["My interests", "What's my hobby", "What I love"];
    }

    if (pathname === "/my_tools") {
        words = ["Software I also use", "what I do with it", "another side of me"];
    }

    return (
        <>
            <div className='h-32' />
            <div className='flex gap-2  z-50'>
                <Link
                    className='hover:text-violet-600'
                    href={"/"}>
                    Home
                </Link>
                <h1>/</h1>
                <Link
                    href={"#"}
                    className='font-bold text-xl capitalize text-blue-700 '
                >
                    {formattedPathname}
                </Link>

            </div>

            <div className="flex relative mt-10 items-center px-4 my-6 overflow-hidden pt-5 pb-5">
                <div className="-z-9 text-lg md:text-4xl font-normal text-neutral-600 dark:text-neutral-400">
                    See
                    <FlipWords words={words} duration={750} className="text-2xl md:text-6xl lg:text-7xl font-bold" /> <br />
                    below are detailed descriptions
                </div>
            </div>
        </>
    )
}

export default Header