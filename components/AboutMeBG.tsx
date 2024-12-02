import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
interface Props {
    children: JSX.Element;
}

export function BackgroundBeamsWithCollisionDemo({ children }: Props) {
    return (
        <BackgroundBeamsWithCollision>
            {children}
        </BackgroundBeamsWithCollision>
    );
}
