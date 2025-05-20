'use client'

import { motion } from 'framer-motion'

export const PulsatingDot = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="relative flex h-2 w-2"
    >
      <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75"></div>
      <div className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]"></div>
    </motion.div>
  )
} 