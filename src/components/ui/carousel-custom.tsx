"use client";

import Autoplay from "embla-carousel-autoplay"
import { Carousel as ShadCnCarousel } from "./shadcn/carousel"
import React from "react";

export default function Carousel({children}: {children: React.ReactNode}) {
    return (
        <ShadCnCarousel plugins={[
            Autoplay({
                delay: 5000,
                jump: false,
            }),
        ]}> 
            {children}
        </ShadCnCarousel>
    )
}