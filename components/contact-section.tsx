'use client'

import React, { useState, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Mail, Phone, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { submitContactForm } from '@/app/actions'
import { SubmissionPopup } from './submission-popup'

export const ContactSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupTitle, setPopupTitle] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);

        try {
            const result = await submitContactForm(formData);
            if (result.success) {
                setPopupTitle('Danke!');
                setPopupMessage(result.message || 'Wir melden uns bald bei Ihnen.');
                setIsPopupOpen(true);
                formRef.current?.reset();
            } else {
                console.error("Submission failed:", result.message);
                setPopupTitle('Fehler');
                setPopupMessage(result.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
                setIsPopupOpen(true);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setPopupTitle('Fehler');
            setPopupMessage('Ein unerwarteter Fehler ist aufgetreten.');
            setIsPopupOpen(true);
        }

        setIsSubmitting(false);
    };

    return (
        <>
            <section id="kontakt" className="py-24 md:py-32 bg-[#080808] text-white">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="max-w-3xl mx-auto text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            In Kontakt <span className="text-[#4361EE]">treten</span>
                        </h2>
                        <p className="text-white/70 md:text-lg">
                            Du möchtest mit uns zusammenarbeiten oder hast Fragen zu unseren Leistungen? 
                            Dann schreib uns – wir melden uns schnellstmöglich zurück und besprechen alles Weitere persönlich.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <motion.div 
                            className="space-y-8 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-lg shadow-blue-500/10"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
                            
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[#4361EE] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold mb-1">Standort</h4>
                                    <p className="text-white/70">
                                        Scheierlweg 14,<br /> 
                                        5303 Thalgau
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-[#4361EE] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold mb-1">Email</h4>
                                    <a href="mailto:office@socialdynamics.agency" className="text-white/70 hover:text-white transition-colors">
                                        office@socialdynamics.agency
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-[#4361EE] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold mb-1">Telefonnummer</h4>
                                    <a href="tel:+436604252271" className="text-white/70 hover:text-white transition-colors">
                                        +43 660 425 2271
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-lg shadow-blue-500/10"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                             <h3 className="text-2xl font-bold mb-6">Schreiben Sie uns</h3>
                            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name*</Label>
                                    <Input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        placeholder="Ihr Name"
                                        className="w-full bg-white/5 border-white/20 focus:border-[#4361EE] focus:ring-[#4361EE] rounded-md placeholder:text-white/40"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email*</Label>
                                    <Input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        placeholder="ihre.email@beispiel.com"
                                        className="w-full bg-white/5 border-white/20 focus:border-[#4361EE] focus:ring-[#4361EE] rounded-md placeholder:text-white/40" 
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Telefonnummer</Label>
                                    <Input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        placeholder="Ihre Telefonnummer (optional)"
                                        className="w-full bg-white/5 border-white/20 focus:border-[#4361EE] focus:ring-[#4361EE] rounded-md placeholder:text-white/40" 
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Nachricht*</Label>
                                    <Textarea 
                                        id="message" 
                                        name="message" 
                                        rows={4} 
                                        required 
                                        placeholder="Wobei können wir Ihnen helfen?"
                                        className="w-full bg-white/5 border-white/20 focus:border-[#4361EE] focus:ring-[#4361EE] rounded-md placeholder:text-white/40" 
                                    />
                                </div>
                                <div>
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center justify-center w-full text-sm font-medium transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <div className="relative flex flex-col py-[15px] px-[30px] w-full h-fit rounded-[15px] bg-gradient-to-r from-[#0033FF] to-[#4361EE] border-2 border-white/10 hover:border-white/30 hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(0,51,255,0.4)]">
                                            <div className="relative font-medium text-[18px] leading-[1.2em] text-white text-center flex items-center justify-center gap-2">
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="h-5 w-5 animate-spin" />
                                                        Senden...
                                                    </>
                                                ) : (
                                                    'Nachricht senden'
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <SubmissionPopup 
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                title={popupTitle}
                message={popupMessage}
            />
        </>
    )
} 