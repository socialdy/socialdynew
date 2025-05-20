'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const AboutSection = () => {
    return (
        <section id="ueber-uns" className="bg-[#080808] py-24 md:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left Column: Headline & Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="mb-4 inline-block px-4 py-2 text-sm font-medium bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg shadow-blue-500/10 text-white/80">
                            Über uns
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            <span className="inline md:inline-block bg-gradient-to-r from-[#0033FF] to-[#4361EE] px-1.5 py-1 md:px-3 rounded-lg">Social Media Marketing</span> direkt aus Salzburg
                        </h2>
                    </motion.div>

                    {/* Right Column: Text Content - SEO Optimized & Natural Tone V3 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex flex-col h-full"
                    >
                        <div className="space-y-6 text-white/70 text-base md:text-lg mb-8">
                            <p>
                                Als Social Media Agentur hier in Salzburg sehen wir täglich, wie wichtig gutes Online Marketing für lokale Unternehmen ist. Nur wer online präsent ist, kann heute nachhaltig wachsen. Wir sorgen dafür, dass du nicht nur Sichtbarkeit gewinnst, sondern auch die richtigen Leute erreichst.
                            </p>
                            <p>
                                Unser Rezept dafür? Eine Mischung aus starkem Content Marketing – dazu gehört natürlich auch die Videoproduktion für Reels & Kurzvideos – und zielgerichteter Social Media Werbung (Paid Ads). Genauso wichtig ist uns, deine persönliche Marke (Personal Brand) authentisch aufzubauen. So steigerst du deine Reichweite und gewinnst neue Kunden.
                            </p>
                        </div>
                        
                        <div className="mt-auto">
                             <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all">
                                <div className="relative flex flex-col py-[15px] px-[30px] w-fit h-fit rounded-[15px] bg-gradient-to-r from-[#0033FF] to-[#4361EE] border-2 border-white/10 hover:border-white/30 hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(0,51,255,0.4)]">
                                    <div className="relative font-medium text-[18px] leading-[1.2em] text-white">
                                        Jetzt gemeinsam durchstarten
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 