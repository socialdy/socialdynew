import { Logo } from '@/components/logo'
import Link from 'next/link'

// Updated links to match header navigation + FAQ + Legal
const navLinks = [
    { title: 'Über uns', href: '#ueber-uns' },
    { title: 'Referenzen', href: '#referenzen' },
    { title: 'Prozess', href: '#leistungen' },
    { title: 'Kontakt', href: '#kontakt' },
]

const socialLinks = [
    { ariaLabel: 'LinkedIn', href: 'https://www.linkedin.com/company/socialdynamicsagency/', icon: <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path></svg> },
    { ariaLabel: 'Instagram', href: 'https://www.instagram.com/socialdynamics.agency', icon: <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg> },
    { ariaLabel: 'TikTok', href: 'https://www.tiktok.com/@socialdynamics.agency', icon: <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path></svg> },
    { ariaLabel: 'Facebook', href: 'https://www.facebook.com/socialdynamics.agency/', icon: <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4h-3.5v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3v9h4z"></path></svg> }
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32 bg-[#080808] text-white">
            <div className="container mx-auto px-4">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <Logo className="h-12 w-auto" /> {/* Ensure Logo component adapts or set color */} 
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-white/60 hover:text-white block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                     {socialLinks.map((link) => (
                        <Link
                            key={link.ariaLabel}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.ariaLabel}
                            className="text-white/60 hover:text-white block transition-colors duration-150">
                            {link.icon}
                        </Link>
                    ))}
                </div>
                {/* Updated Copyright/Legal block */}
                <div className="mt-8 text-center text-sm text-white/40 flex flex-col items-center space-y-1">
                    <span>© {new Date().getFullYear()} Social Dynamics, Alle Rechte vorbehalten</span>
                    <div className="flex space-x-4">
                        <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-white/50 pb-4">
                 Made with ❤️ by Social Dynamics
            </div>
        </footer>
    )
}
