'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

// Updated steps for general businesses with keywords
const steps = [
    {
        id: 1,
        title: "1. Strategieentwicklung",
        description: "Gemeinsam finden wir heraus, was dein Unternehmen besonders macht und entwickeln eine Social-Media-Strategie, die dir mehr Sichtbarkeit und neue Kundenanfragen bringt.",
        icon: "✨"
    },
    {
        id: 2,
        title: "2. Aufnahme vor Ort in Salzburg",
        description: "Wir kommen mit professionellem Equipment vorbei und setzen dein Unternehmen und deine Leistungen gekonnt in Szene. Das dauert nur 2,5–4 Stunden pro Monat.",
        icon: "🎥"
    },
    {
        id: 3,
        title: "3. Schnitt & Bearbeitung",
        description: "Aus dem Rohmaterial schneiden wir 10–15 reichweitenstarke Kurzvideos pro Monat, die deine Zielgruppe ansprechen und deine Marke perfekt online repräsentieren.",
        icon: "🎬"
    },
    {
        id: 4,
        title: "4. Upload & Management",
        description: "Wir kümmern uns um den Upload und die Optimierung auf Instagram, TikTok und Facebook. Du kannst dich entspannt zurücklehnen, während dein Unternehmen online wächst.",
        icon: "🚀"
    }
]

export const RoadmapSection = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    return (
        <section id="leistungen" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#080808]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
            </div>

            {/* Title - Updated Sub-headline */}
            <div className="relative z-10 container mx-auto px-4 mb-16 md:mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
                    Unser <span className="inline-block bg-gradient-to-r from-[#0033FF] to-[#4361EE] px-1.5 py-1 md:px-3 rounded-lg">4-Schritte-Prozess</span> für dein Wachstum
                </h2>
                <p className="text-white/60 text-center max-w-xl md:max-w-2xl mx-auto">
                   So bringen wir dein Social Media Marketing zum Erfolg: Von der Strategie bis zu Reels, die wirklich Reichweite erzielen.
                </p>
            </div>

            {/* Timeline for Desktop */}
            <div className="relative z-10 container mx-auto px-4 hidden md:block">
                <div className="relative">
                    {/* Static Background Line */}
                    <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white/10" />

                    {/* Animated Line Overlay */}
                    <motion.div
                        className="absolute left-1/2 top-0 w-0.5 h-full"
                        style={{
                            background: 'linear-gradient(to bottom, #0033FF, #4361EE)',
                            transformOrigin: 'top',
                            scaleY: scrollYProgress,
                        }}
                    />

                    {/* Steps - Desktop Layout */}
                    <div className="relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                // Adjust margin for potentially fewer items
                                className={`relative flex items-center ${index === steps.length - 1 ? 'mb-0' : 'mb-24 md:mb-32'} ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Content Box */}
                                <div className={`md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg shadow-blue-500/10 p-6 md:p-8 min-h-[160px]">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/70 text-sm md:text-base">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon - Desktop */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#0033FF] to-[#4361EE] flex items-center justify-center border-4 border-[#080808] shadow-md">
                                    <span className="text-xl" role="img" aria-label={step.title}>
                                        {step.icon}
                                    </span>
                                </div>

                                {/* Spacer for opposite side - Desktop */}
                                <div className="md:w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline for Mobile */}
            <div className="relative z-10 container mx-auto px-4 md:hidden">
                <div className="relative">
                    {/* Mobile Static Line */}
                    <div className="absolute left-4 top-0 w-0.5 h-full bg-white/10" />
                    {/* Mobile Animated Line */}
                    <motion.div
                        className="absolute left-4 top-0 w-0.5 h-full"
                        style={{
                            background: 'linear-gradient(to bottom, #0033FF, #4361EE)',
                            transformOrigin: 'top',
                            scaleY: scrollYProgress,
                        }}
                    />

                    {/* Steps - Mobile Layout */}
                    <div className="relative space-y-12 pt-2">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5 }}
                                className="relative flex items-start gap-4 pl-10" 
                            >
                                {/* Mobile Icon connected to line */}
                                <div className="absolute left-4 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[#0033FF] to-[#4361EE] flex items-center justify-center border-2 border-[#080808] shadow-sm z-10">
                                    <span className="text-base" role="img" aria-label={step.title}>
                                        {step.icon}
                                    </span>
                                </div>

                                {/* Content Box - Mobile */}
                                <div className="w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg shadow-blue-500/10 p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/70 text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 