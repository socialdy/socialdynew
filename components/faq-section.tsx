'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Type for a single FAQ item
interface FaqItem {
    question: string;
    answer: string;
}

// Updated FAQs array with refined answers and removed platform question
const faqs: FaqItem[] = [
    {
        question: "Ich habe keine Zeit für aufwendige Dreharbeiten. Wie läuft das ab?",
        answer: "Wir wissen, Zeit ist Geld. Deshalb haben wir unseren Prozess so gebaut, dass er für dich maximal effizient ist. Nach einem initialen Strategiegespräch und dem Drehtermin übernehmen wir den kompletten Rest – von der Planung bis zum fertigen Reel."
    },
    {
        question: "Meine Zielgruppe ist nicht auf Social Media. Lohnt sich das überhaupt?",
        answer: "Gute Frage! Auch wenn deine direkten Kunden vielleicht nicht ständig auf TikTok scrollen, informieren sie sich online und werden von Trends beeinflusst. Wir sorgen dafür, dass deine Marke professionell und modern wahrgenommen wird – das erreicht auch Entscheider und Multiplikatoren, die für dein Business zählen."
    },
    {
        question: "Gibt es nicht schon genug Videos? Wie soll ich mich da abheben?",
        answer: "Stimmt, der Feed ist voll. Aber die meisten Videos sind 08/15. Unser Ansatz? Strategie statt Masse. Wir finden heraus, was deine Zielgruppe wirklich bewegt, und produzieren Content, der authentisch ist und genau auf ihre Bedürfnisse eingeht. So hebst du dich ab."
    },
    {
        question: "Wie schnell kann ich mit Ergebnissen rechnen?",
        answer: "Social Media ist kein Sprint, sondern ein Marathon. Erste positive Signale wie mehr Sichtbarkeit siehst du oft schon nach wenigen Wochen. Für handfeste Ergebnisse wie Leads oder neue Kunden brauchen wir meist 2-3 Monate kontinuierliche Arbeit. Aber keine Sorge, wir halten dich mit regelmäßigen Reportings immer auf dem Laufenden."
    },
    {
        question: "Was kostet die Zusammenarbeit mit euch?",
        answer: "Wir schnüren für jeden Kunden ein individuelles Paket, das genau zu seinen Zielen und seinem Budget passt. Eine Pauschalantwort gibt\'s daher nicht. Am besten, wir quatschen unverbindlich in einem Kennenlerngespräch – danach bekommst du ein klares Angebot von uns."
    }
]

// Props type for AccordionItem
interface AccordionItemProps {
    faq: FaqItem;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ faq, isOpen, onClick }) => {
    return (
        // Applying glassmorphism style to the item container
        <div className="mb-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg shadow-blue-500/10 overflow-hidden">
            <button
                className="flex justify-between items-center w-full px-5 py-4 md:px-6 md:py-5 text-left text-white transition-colors duration-200 cursor-pointer"
                onClick={onClick}
            >
                <span className="text-base md:text-lg font-medium pr-4">{faq.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                >
                    <ChevronDown className="w-5 h-5 text-white/70" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto', marginTop: '0px', marginBottom: '0px' }, // Removed margin
                            collapsed: { opacity: 0, height: 0, marginTop: '0px', marginBottom: '0px' }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        {/* Added padding to the answer paragraph */}
                        <p className="text-white/70 text-sm md:text-base px-5 pb-5 md:px-6 md:pb-6 pr-10">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-[#080808] py-24 md:py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16">
                    Häufig gestellte <span className="text-white">Fragen</span>
                </h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 