'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Utensils, Home, Wrench, Users } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" // Import Shadcn Tabs

// Updated data structure for target audience with Problem/Solution, added Berater/Coaches
const targetGroups = [
    {
        id: "gastronomen", // Added ID for TabsTrigger value
        icon: Utensils,
        title: "Gastronomen",
        problem: "Dein Laden ist top, aber online kaum sichtbar? Reservierungen über Social Media tröpfeln nur, obwohl die Qualität stimmt? Zeit, das zu ändern.",
        solution: "Wir bringen dein Ambiente und deine Gerichte auf die Screens potenzieller Gäste – mit authentischen Reels, die Appetit machen. Optional verstärken gezielte lokale Ads die Sichtbarkeit für Angebote oder Events. Einfache Online-Reservierungen runden das Paket ab."
    },
    {
        id: "immobilienmakler", // Added ID
        icon: Home, // Changed Icon
        title: "Immobilienmakler",
        problem: "Neue Objekte verkaufen sich schleppend? Gute Leads über Social Media zu finden, ist mühsam und teuer? Du brauchst einen Plan, der funktioniert.",
        solution: "Wir rücken deine Immobilien mit hochwertigen Reel-Touren ins Rampenlicht und bauen dich organisch als lokalen Experten auf. Für schnelle Vermarktung oder Lead-Generierung setzen wir gezielte Werbeanzeigen für spezifische Objekte oder Zielgruppen ein."
    },
    {
        id: "handwerksbetriebe", // Added ID
        icon: Wrench, // Added Icon
        title: "Handwerksbetriebe",
        problem: "Fachkräfte fehlen an allen Ecken? Deine Social Media Kanäle bringen keine Bewerbungen, obwohl du ein Top-Arbeitgeber bist? Das ändern wir.",
        solution: "Wir zeigen, was dein Unternehmen als Arbeitgeber besonders macht – mit authentischen Reels über dein Team und den Arbeitsalltag (Employer Branding). Bei Bedarf unterstützen gezielte Recruiting Ads dabei, die richtigen Talente auf dich aufmerksam zu machen."
    },
    {
        id: "berater-coaches", // Added ID
        icon: Users, // Added Berater & Coaches
        title: "Berater & Coaches",
        problem: "Deine Expertise ist gefragt, aber neue Klienten zu gewinnen, kostet zu viel Zeit und Kaltakquise nervt? Online sichtbar zu werden und Vertrauen aufzubauen, ist die Hürde?",
        solution: "Wir positionieren dich als gefragten Experten auf Social Media. Durch wertvollen, organischen Content (Reels, Fachbeiträge) baust du Vertrauen auf und ziehst deine Wunschkunden an. Gezielte Werbeanzeigen können diesen Prozess effektiv unterstützen und die Leadgenerierung beschleunigen."
    }
]

export const ProjectsSection = () => {
    return (
        <section id="zielgruppen" className="relative bg-transparent py-24 md:py-32 overflow-hidden"> 
             {/* Subtle background gradient - Improved transition */}
            <div aria-hidden="true" className="absolute inset-0 z-0">
                 <div className="absolute inset-0 bg-[#080808]"></div>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[60rem] rounded-full bg-[radial-gradient(closest-side,rgba(0,51,255,0.08),transparent)]"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16" // Reduced bottom margin slightly
                >
                    Wen können wir <span className="text-[#4361EE]">unterstützen?</span>
                </motion.h2>

                {/* Added motion wrapper around Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }} // Adjust amount if needed
                    transition={{ duration: 0.6, delay: 0.1 }} // Slight delay after title
                >
                    <Tabs defaultValue={targetGroups[0].id} className="w-full max-w-4xl mx-auto">
                        {/* Tab Buttons */}
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent p-0 mb-8 h-auto">
                            {targetGroups.map((group) => (
                                <TabsTrigger 
                                    key={group.id} 
                                    value={group.id}
                                    className="flex flex-col md:flex-row items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white/60 ring-offset-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361EE] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/5 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg md:border md:border-transparent data-[state=active]:md:border-white/10 h-full cursor-pointer"
                                >
                                    <group.icon className="w-5 h-5 flex-shrink-0" />
                                    <span>{group.title}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* Tab Content Panes */}
                        {targetGroups.map((group) => (
                            <TabsContent 
                                key={group.id} 
                                value={group.id}
                                // Apply glassmorphism style to content area
                                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg shadow-blue-500/10 p-6 md:p-8 mt-0 ring-offset-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361EE] focus-visible:ring-offset-2"
                            >
                                <div className="space-y-6">
                                    {/* Problem Block */}
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Problem</h4>
                                        <p className="text-white/70 text-base">
                                            {group.problem}
                                        </p>
                                    </div>
                                    {/* Solution Block */}
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Unsere Lösung</h4>
                                        <p className="text-white/70 text-base">
                                            {group.solution}
                                        </p>
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </motion.div>
            </div>
        </section>
    )
} 