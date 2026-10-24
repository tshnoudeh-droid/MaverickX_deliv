"use client";

import { ReactLenis } from "lenis/react";
import type { PropsWithChildren } from "react";

/**
 * Global smooth-scroll wrapper. Lenis eases native wheel/touch scroll
 * (no scroll-jacking — the browser scroll position still moves normally,
 * Framer Motion's useScroll reads it the same way) so section transitions
 * feel inertial instead of stepped.
 */
export default function LenisProvider({ children }: PropsWithChildren) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.2,
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}
