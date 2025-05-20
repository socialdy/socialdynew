'use client'
import Link from 'next/link'
import { Logo } from './logo'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Über uns', href: '#ueber-uns' },
    { name: 'Referenzen', href: '#referenzen' },
    { name: 'Prozess', href: '#leistungen' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed top-0 left-0 right-0 z-20">
                <div className={cn(
                    'mx-auto mt-2 max-w-6xl px-8 lg:px-16 transition-all duration-300 rounded-2xl border border-white/10 bg-[#080808]/60 backdrop-blur-xl',
                    isScrolled && 'max-w-4xl lg:px-5'
                )}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto min-w-0">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 lg:scale-125 flex-shrink-0 flex-grow-0">
                                <Logo className="h-12 w-auto" />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 block cursor-pointer p-2.5 lg:hidden flex-shrink-0 flex-grow-0">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-base text-white/80">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white/80 hover:text-white block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#080808]/50 in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white/80 hover:text-white block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all">
                                    <div className="relative flex flex-col py-[15px] px-[30px] w-fit h-fit rounded-[15px] bg-gradient-to-r from-[#0033FF] to-[#4361EE] border-2 border-white/10 hover:border-white/30 hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(0,51,255,0.4)]">
                                        <div className="relative font-medium text-[18px] leading-[1.2em] text-white">
                                            Kontakt aufnehmen
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
