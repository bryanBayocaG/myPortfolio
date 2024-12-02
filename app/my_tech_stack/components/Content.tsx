import React from "react";
import { motion, Variants } from "framer-motion";
import { div } from "framer-motion/client";


interface Props {
    emoji: string;

}

const cardVariants: Variants = {
    offscreen: {
        top: 0
    },
    onscreen: {
        top: 10,
        rotate: -20,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji }: Props) {

    return (
        <motion.div
            className="card-container h-48 flex relative my-5 md:my-12 mx-5  bg-black border-slate-700 border rounded-xl"
            // style={{ clipPath: 'inset(0px 0px 10px 0px)' }}
            initial="offscreen"
            whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        >
            <div className="absolute -top-2 md:-top-10 md:-left-2 ">
                <motion.div
                    className="flex w-40 h-48 md:w-[200px] md:h-[230px] text-9xl items-center justify-center rounded-xl bg-white"
                    // style={{ transformOrigin: "3% 60%" }}
                    variants={cardVariants}
                >
                    {emoji}
                </motion.div>
            </div>
            <div className="flex-[1]"></div>
            <div className="relative flex-[2] justify-items-center my-auto">
                <h1 className=" backdrop-blur-[18px]">Hello asdfasdf adsfasdf asdfasdf sdfaasdfasdf</h1>
            </div>
        </motion.div>
    );
}



const Content = () => {
    const food = [
        "🍅",
        "🍊",
        "🍋",
        "🍐",
        "🍏",
        "🫐",
        "🍆",
        "🍇"
    ];

    return (
        <div className="grid md:grid-cols-2">
            {
                food.map((emoji, i) => {
                    return <Card key={i} emoji={emoji} />
                })
            }

        </div>
    )
};

export default Content;
