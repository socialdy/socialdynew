'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Compass, Video, Film, Upload } from 'lucide-react'

const services = [
    {
        title: "Strategie",
        description: "Wir entwickeln eine maßgeschneiderte Content-Strategie, die deine Marke authentisch präsentiert und messbare Ergebnisse liefert.",
        icon: Compass,
        className: "md:col-span-2 md:row-span-1"
    },
    {
        title: "Produktion",
        description: "Mit High-End Equipment und erfahrenen Videographen setzen wir deine Story perfekt in Szene - schnell und effizient vor Ort.",
        icon: Video,
        className: "md:col-span-1 md:row-span-2"
    },
    {
        title: "Post-Production",
        description: "Aus dem Rohmaterial entstehen fesselnde Kurzvideos, die durch cleveres Storytelling deine Zielgruppe begeistern.",
        icon: Film,
        className: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Distribution",
        description: "Wir kümmern uns um optimales Timing, Hashtags und Beschreibungen - damit dein Content die maximale Reichweite erzielt.",
        icon: Upload,
        className: "md:col-span-2 md:row-span-1"
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: { 
        opacity: 0,
        y: 20
    },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8
        }
    }
}

const BackgroundShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-r from-[#0033FF] to-[#4361EE]"
        />
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-r from-[#4361EE] to-[#0033FF]"
        />
        <motion.div 
            animate={{ 
                rotate: [0, 360],
                opacity: [0.02, 0.05, 0.02]
            }}
            transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        />
    </div>
)

export function ServicesGrid() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden">
            <BackgroundShapes />
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-semibold text-white mb-4"
                    >
                        Unser Workflow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white/60 text-lg"
                    >
                        Von der Strategie bis zum Upload - alles aus einer Hand
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`group relative overflow-hidden rounded-3xl bg-white/5 p-8 hover:bg-white/10 transition-colors duration-300 ${service.className}`}
                        >
                            <div className="relative z-10">
                                <service.icon className="w-10 h-10 text-[#0033FF] mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0033FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
} 