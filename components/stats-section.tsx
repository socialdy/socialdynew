'use client'

import React from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

// Updated stats with specific values and shorter descriptions
const stats = [
    {
        value: 3,   // Updated value
        suffix: '+',
        title: "Aktive Kunden",
        description: "Aktive Kundenprojekte." // Shortened description
    },
    {
        value: 40,  // Updated value
        suffix: '+',
        title: "Erstellte Contents",
        description: "Reels, Ads & mehr." // Shortened description
    },
    {
        value: 100, // Updated value
        suffix: 'k+',
        title: "Generierte Reichweite (k)",
        description: "Nachweisbare Reichweite." // Shortened description
    },
    {
        value: 100,
        suffix: '%',
        title: "Kundenzufriedenheit",
        description: "100% Fokus auf Erfolg." // Shortened description
    }
]

export const StatsSection = () => {
    return (
        <section className="bg-[#080808] py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                    {stats.map((stat, index) => (
                        // Added Glassmorphism style to each stat block
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            // Added style classes + padding
                            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg shadow-blue-500/10 p-6 md:p-8"
                        >
                            <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                                <CountUp
                                    end={stat.value}
                                    duration={2.5}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />{stat.suffix}
                            </div>
                            <h3 className="text-lg font-bold text-white/90 mb-1">
                                {stat.title}
                            </h3>
                            <p className="text-sm text-white/60">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 