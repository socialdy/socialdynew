'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'; // Assuming you might want number animations

// Define your stats data here
const stats = [
    {
        value: 9,
        suffix: '+',
        title: 'Zufriedene Kunden',
        description: 'Langfristige Partnerschaften durch messbare Erfolge und transparente Zusammenarbeit.'
    },
    {
        value: 50,
        suffix: '+',
        title: 'Projekte umgesetzt',
        description: 'Von Content-Strategien bis zu Performance-Kampagnen – wir liefern Ergebnisse.'
    },
    {
        value: 250,
        suffix: 'K+',
        title: 'Reichweite generiert',
        description: 'Organisch und bezahlt erreichen wir deine Zielgruppe auf den richtigen Kanälen.'
    },
    {
        value: 100,
        suffix: '%',
        title: 'Kundenzufriedenheit',
        description: 'Unsere Kunden empfehlen uns weiter – weil Ergebnisse und Service stimmen.'
    }
]

export const ResultsSection = () => {
    return (
        // Changed section id to #ergebnisse
        <section id="ergebnisse" className="bg-[#080808] py-24 md:py-32">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-16 md:mb-20"
                >
                    Ergebnisse der letzten 12 Monate
                </motion.h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-3">
                                {/* Optional: Use CountUp for animation */}
                                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />{stat.suffix}
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{stat.title}</h3>
                            <p className="text-white/60 text-sm md:text-base max-w-xs mx-auto">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 