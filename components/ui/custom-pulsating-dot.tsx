'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CustomPulsatingDotProps {
    colorClass?: string; // Prop to specify the color class
    className?: string; // Allow additional classes
    delay?: number; // Allow custom delay
}

export const CustomPulsatingDot: React.FC<CustomPulsatingDotProps> = ({
    colorClass = 'bg-[#22C55E]', // Default to green
    className,
    delay = 0.8 // Default delay
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            className={cn("relative flex h-2 w-2", className)} // Combine classes
        >
            {/* Ping animation div */}
            <div className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                colorClass // Apply color class
            )}></div>
            {/* Static dot div */}
            <div className={cn(
                "relative inline-flex h-2 w-2 rounded-full",
                colorClass // Apply color class
            )}></div>
        </motion.div>
    )
} 