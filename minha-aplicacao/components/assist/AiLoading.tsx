"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AiLoading() {
  return (
    <div className="relative flex items-center justify-center w-10 h-10">
      <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-100 shadow-inner" />

      <motion.div
        className="absolute inset-0 rounded-full border-[2px] border-transparent border-t-blue-500 border-l-blue-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />

      <motion.div
        animate={{ scale: [0.8, 1, 0.8] }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/ai-sample.svg"
          width={30}
          height={30}
          alt="AI Icon"
          className="opacity-90"
        />
      </motion.div>
    </div>
  );
}
