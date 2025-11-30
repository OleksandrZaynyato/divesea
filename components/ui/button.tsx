import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ className, children }) => {
    return (
        <button
            className={cn(
                'bg-[#111111] text-white font-semibold py-4 px-12 rounded-2xl text-lg tracking-wide hover:bg-black transition-colors duration-300',
                className
            )}>
            {children}
        </button>
    );
};
