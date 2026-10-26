"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Generic gentle fade+translate reveal-on-scroll, used throughout the
 * spec'd site per B3 ("content reveals gently on scroll"). Framer-motion
 * respects prefers-reduced-motion automatically when a user has it set
 * (it reduces transforms), and whileInView only fires once by default
 * here via `once: true`. */
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
