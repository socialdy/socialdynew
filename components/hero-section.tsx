'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import { TextEffect } from './ui/text-effect'
import { AnimatedGroup } from './ui/animated-group'
import { HeroHeader } from './hero5-header'
import { IphoneShowcase } from './iphone-showcase'
import { CustomPulsatingDot } from './ui/custom-pulsating-dot'
import { Ticker } from './ui/ticker'
import { motion } from 'framer-motion'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="relative overflow-hidden bg-[#080808]">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.04)_0,hsla(0,0%,55%,.01)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.03)_0,hsla(0,0%,45%,.01)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.02)_0,hsla(0,0%,45%,.01)_80%,transparent_100%)]" />
                </div>
                <div 
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[-20rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-30rem]"
                >
                    <div 
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0033ff] to-[#4361ee] opacity-[0.03] sm:left-[calc(50%-40rem)] sm:w-[90.1875rem]"
                    />
                </div>
                
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <Image
                                src="https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605538/night-background_ni3vqb.jpg"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-4xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <div className="flex flex-col items-center gap-6 mb-12">
                                    <div className="flex flex-col items-center gap-1">
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="flex flex-row justify-center items-center"
                                        >
                                            {[...Array(5)].map((_, i) => (
                                                <Image
                                                    key={i}
                                                    alt="Star"
                                                    src="/star-solid.svg"
                                                    width={16}
                                                    height={16}
                                                    className="w-4 h-4 text-[#0033FF]"
                                                />
                                            ))}
                                        </motion.div>
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="font-normal text-[12px]"
                                            style={{ color: 'color-mix(in oklab, white 80%, transparent)' }}
                                        >
                                            +3 Projekte aktiv am betreuen
                                        </motion.div>
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            className="w-[180px]"
                                        >
                                            <div className="relative overflow-hidden">
                                                <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#080808] to-transparent pointer-events-none"></div>
                                                <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#080808] to-transparent pointer-events-none"></div>
                                                
                                                <motion.div 
                                                    className="flex"
                                                    animate={{ 
                                                        x: [0, "-20%", "-40%", "-60%", "-80%", "-100%"],
                                                    }}
                                                    transition={{
                                                        x: {
                                                            repeat: Infinity,
                                                            duration: 30,
                                                            ease: "linear",
                                                            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                                                        }
                                                    }}
                                                >
                                                    {[...Array(6)].map((_, setIndex) => (
                                                        <div key={setIndex} className="flex flex-shrink-0">
                                                            {[...Array(5)].map((_, imgIndex) => (
                                                                <div
                                                                    key={imgIndex} 
                                                                    className="mx-[5px] relative h-6 w-6 flex-shrink-0"
                                                                >
                                                                    <Image
                                                                        alt={`Kunde ${imgIndex + 1}`}
                                                                        src={`/customers/customer${imgIndex + 1}.${imgIndex === 0 || imgIndex === 4 ? 'avif' : imgIndex === 2 ? 'jfif' : 'jpg'}`}
                                                                        width={24}
                                                                        height={24}
                                                                        className="w-full h-full object-cover rounded-full"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="inline-flex items-center gap-2 mt-2 mb-2 md:mt-4 md:mb-4 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg shadow-blue-500/10"
                                >
                                    <CustomPulsatingDot colorClass="bg-[#4361EE]" delay={0.5} />
                                    <h5 className="text-sm md:text-base font-medium text-white/80">
                                        Content- & Recruiting-Agentur aus Salzburg
                                    </h5>
                                </motion.div>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-4 text-balance font-bold text-white text-5xl tracking-tight md:text-7xl xl:text-[5.25rem]">
                                    Mehr Reichweite durch Kurzvideos
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-6 max-w-2xl text-balance text-base font-normal text-white/80">
                                    Wir bei Social Dynamics, eine Social Media Marketing Agentur aus Salzburg, erstellen Content, der wirklich zu dir und deiner Zielgruppe passt und funktioniert.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="rounded-xl">
                                        <Link href="#link" className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all">
                                            <div className="relative flex flex-col py-[15px] px-[30px] w-fit h-fit rounded-[15px] bg-gradient-to-r from-[#0033FF] to-[#4361EE] border-2 border-white/10 hover:border-white/30 hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(0,51,255,0.4)]">
                                                <div className="relative font-medium text-[18px] leading-[1.2em] text-white">
                                                    Kontakt aufnehmen
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </AnimatedGroup>

                                <div className="mt-6 flex flex-row gap-3 items-center justify-center">
                                    <CustomPulsatingDot />
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.9 }}
                                        className="font-normal text-[14px] leading-[1em] text-white/60"
                                    >
                                        Aktuell verfügbar
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <AnimatedGroup variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                            <div className="mt-16 md:mt-24">
                                <IphoneShowcase />
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}
