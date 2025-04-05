"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			className="flex w-full flex-col py-10"
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ type: "spring", duration: 0.8 }}
		>
			{children}
		</motion.div>
	);
}
