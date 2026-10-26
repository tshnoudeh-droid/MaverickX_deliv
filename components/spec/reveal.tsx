"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Generic gentle fade+translate reveal-on-scroll, used throughout the
 * spec'd site per B3 ("content reveals gently on scroll"). Explicitly
 * checks prefers-reduced-motion (B1/Part C step 5) — framer-motion does
 * NOT disable transforms on its own, so under reduced motion this drops
 * the translate and fade entirely and just renders content in place. */
export default function Reveal({
    children,
    delay = 0,
    className = "",
    y = 16,
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
    y?: number;
}) {
    const reduce = useReducedMotion();

    if (reduce) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
