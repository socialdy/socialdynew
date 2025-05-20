import React from 'react'

export const PulsatingDot = () => {
  return (
    <div className="relative flex h-2 w-2">
      <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75"></div>
      <div className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]"></div>
    </div>
  )
} 