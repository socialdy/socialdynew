import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const people = [
  '/images/person1.avif',
  '/images/person2.avif',
  '/images/person3.avif',
  '/images/person4.avif',
  '/images/person5.avif',
]

export const Ticker = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{
          x: [0, -340],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex"
      >
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex">
            {people.map((src, index) => (
              <div key={`${groupIndex}-${index}`} className="mx-[5px] relative h-6 w-6">
                <Image
                  alt={`Ticker image ${index + 1}`}
                  src={src}
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
  )
} 