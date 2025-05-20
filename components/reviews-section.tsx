'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const reviews = [
    {
        id: 1,
        name: 'Sabine Tischler',
        role: 'Kinesiologin',
        image: '/review-1.png',
        quote: '"In Markus findest du einen verlässlichen, kompetenten Partner bei deiner Web-Entwicklung. Durch gezielte Fragestellungen seinerseits entsteht rasch ein sichtbarer Vorentwurf. Sein Slogan "wir sind erst dann mit unserer Arbeit zufrieden, wenn Sie es sind" kann ich zu 100 % bestätigen. Hervorheben möchte ich noch seine erfrischende, ruhige, freundliche und humorvolle Art mit seinem netten Salzburger Dialekt. Danke Markus, für die angenehme Zusammenarbeit, deine Inspiration, die rasche Umsetzung und für das tolle Ergebnis. Für deine Zukunft wünsche ich dir das Beste!"'
    },
    {
        id: 2,
        name: 'Sophie Grill',
        role: 'Fahrzeugsattlerin',
        image: '/review-2.png',
        quote: '"Super tolle Agentur, kann ich nur weiterempfehlen. Der Geschäftsführer Markus hat sich immer persönlich um meine Anliegen gekümmert und mir alles sehr verständlich erklärt. Die Umsetzung erfolgte immer rasch und genau so wie ich es mir vorgestellt habe! Ich kann ihm nur weiterempfehlen."'
    },
    {
        id: 3,
        name: 'Martin Aicher',
        role: 'Geschäftsführer NUR CAFE GmbH',
        image: '/review-3.png',
        quote: '"Top Unternehmen, Top Beratung und reagiert absolut schnell."'
    },
    {
        id: 4,
        name: 'Miki Todorovic',
        role: 'Gastronom',
        image: '/review-4.png',
        quote: '"Hervorragender Service und professionelle Arbeit! Social Dynamics hat meine Website schnell und kompetent umgesetzt. Die Kommunikation war stets freundlich und effizient. Ich bin mit dem Ergebnis absolut zufrieden und kann das Team nur weiterempfehlen!"'
    }
]

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
    return (
        <div className="flex-shrink-0 w-[408px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg shadow-blue-500/10 p-6">
            <div className="flex items-center space-x-4 pb-4">
                <Image
                    src={review.image}
                    alt={review.name}
                    width={64}
                    height={64}
                    className="rounded-full w-16 h-16 object-cover"
                />
                <div>
                    <h3 className="text-[22px] leading-[28.8px] tracking-wide text-white">
                        {review.name}
                    </h3>
                    <p className="text-[15px] font-light leading-6 mt-[2px] text-white/60">
                        {review.role}
                    </p>
                </div>
            </div>
            <span className="w-full block">
                <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 362 2" fill="none" className="w-full">
                    <path className="stroke-white/10" d="M0 0.785156H362" strokeOpacity="1" strokeDasharray="6 6"></path>
                </svg>
            </span>
            <blockquote className="text-base md:text-xl md:leading-7 md:tracking-[0.4px] text-white/70 py-4 text-pretty">
                {review.quote}
            </blockquote>
            <span className="w-full block">
                <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 362 2" fill="none" className="w-full">
                    <path className="stroke-white/10" d="M0 0.785156H362" strokeOpacity="1" strokeDasharray="6 6"></path>
                </svg>
            </span>
        </div>
    )
}

export const ReviewsSection = () => {
    return (
        <section id="referenzen" className="bg-[#080808] py-24 md:py-32 overflow-hidden">
            {/* Centered content block */}
            <div className="container mx-auto px-4 mb-12 flex flex-col items-center text-center">
                {/* Updated badge style and text */}
                <div className="mb-4 inline-block px-4 py-2 text-sm font-medium bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg shadow-blue-500/10 text-white/80">
                    Referenzen
                </div>
                {/* Updated heading style */}
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Was unsere <span className="inline-block bg-gradient-to-r from-[#0033FF] to-[#4361EE] px-1.5 py-1 md:px-3 rounded-lg">Kunden sagen</span>
                </h2>
            </div>

            {/* Wrapper for marquee and fade effect */}
            <div className="relative w-full fade-edges">
                {/* Container to hide overflow */}
                <div className="marquee-container flex overflow-hidden">
                    {/* Single animated div containing duplicated content */}
                    <div className="marquee-content flex flex-none gap-7 animate-infinite-scroll">
                        {/* Render reviews twice for seamless loop */}
                        {reviews.concat(reviews).map((review, index) => (
                            <ReviewCard key={`${review.id}-${index < reviews.length ? 'original' : 'clone'}`} review={review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 