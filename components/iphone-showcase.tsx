'use client'

import Iphone15Pro from "./iphone-15-pro"
import { useEffect, useState } from "react"

const youtubeShortIds = [
  'pfuHS-7GYKo',    // 1 Pongau, Salzburg
  '-zgXTXAUk6M',    // 2 Salzburg dreamy
  'r3YW9u_nohE',    // 3 Beautiful Salzburg
  '9QwLpCwaz8E',    // 4 Beautiful Salzburg #travel
  'AKHSczntiFw',    // 5 Salzburg Hidden Gems
  '_9Z0z7JyQjE',    // 6 Salzburg Old Town Charm (NEW)
  'LkZuR7xrFqE'     // 7 Picturesque Austria (NEW)
];

const iphoneConfig = [
  { id: 1, src: youtubeShortIds[0], bgVideo: '/videos/video1.mp4' },
  { id: 2, src: youtubeShortIds[1], bgVideo: '/videos/video2.mp4' },
  { id: 3, src: youtubeShortIds[2], bgVideo: '/videos/video3.mp4' },
  { id: 4, src: youtubeShortIds[3], bgVideo: '/videos/video4.mp4' },
  { id: 5, src: youtubeShortIds[4], bgVideo: '/videos/video5.mp4' },
  { id: 6, src: youtubeShortIds[5], bgVideo: '/videos/video6.mp4' }
];

export function IphoneShowcase() {
  const [phoneWidth, setPhoneWidth] = useState(420);
  const [gap, setGap] = useState(40);

  const items = [...iphoneConfig, ...iphoneConfig];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setPhoneWidth(mobile ? 320 : 420);
      setGap(mobile ? 16 : 40);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full fade-edges pt-8 md:pt-16 pb-8 md:pb-12">
        <div className="marquee-container flex overflow-hidden">
          <div 
            className="marquee-content-phones flex flex-none animate-phone-scroll"
            style={{ gap: `${gap}px` }}
          >
            {items.map((phone, index) => (
              <div
                key={`${phone.id}-${index < iphoneConfig.length ? 'original' : 'clone'}`}
                className="flex-shrink-0 relative"
                style={{ width: `${phoneWidth}px` }}
              >
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-[40px] md:rounded-[60px]"
                    src={phone.bgVideo}
                    key={phone.bgVideo}
                  />
                </div>
                <Iphone15Pro
                  className="size-full relative z-10"
                  videoSrc={phone.bgVideo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 