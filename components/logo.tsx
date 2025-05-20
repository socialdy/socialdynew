import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image 
            src="/Logo_SD.png"
            alt="Social Dynamics Logo" 
            width={180}
            height={48}
            className={cn('h-12 w-auto', className)}
            priority
        />
    )
}
