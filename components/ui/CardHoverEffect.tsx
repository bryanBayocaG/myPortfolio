import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Rating from '@mui/material/Rating';
import { styled } from "@mui/material";
const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
        color: '#ffffff',
    }
});

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        proficiency: number,
        frequencyOfUse: number,
        interestLevel: number,
        iconImg: string,

    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div

                    key={idx}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
                        <div className="relative z-50 p-4">
                            <div className="flex  items-center space-x-1 mb-4">
                                <div>
                                    <Image src={item.iconImg} alt={item.iconImg} width={0} height={0} className="w-5 h-5" />
                                </div>
                                <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
                                    {item.title}
                                </h4>
                            </div>
                            <div >
                                <div className="flex">
                                    <div className="flex-[1]">
                                        <h6>Profeciency</h6>
                                    </div>
                                    <div className="flex-[2] w-full relative items-center justify-center justify-items-center bg-red-700">
                                        <StyledRating
                                            name="read-only"
                                            value={item.proficiency}
                                            max={10}
                                            size={"medium"}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-[1]">
                                        <h6>Frequency of Use</h6>
                                    </div>
                                    <div className="flex-[2]">
                                        <StyledRating
                                            name="read-only"
                                            value={item.frequencyOfUse}
                                            max={10}
                                            size={"medium"}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-[1]">
                                        <h6>Interest Level</h6>
                                    </div>
                                    <div className="flex-[2]">
                                        <StyledRating
                                            name="read-only"
                                            value={item.interestLevel}
                                            max={10}
                                            size={"medium"}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};




