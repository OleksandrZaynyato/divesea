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
                'bg-[#141416] text-white font-medium h-[50px] px-5 rounded-2xl text-[15px] tracking-wide hover:bg-black transition-colors duration-300 cursor-pointer',
                className
            )}>
            {children}
        </button>
    );
};
