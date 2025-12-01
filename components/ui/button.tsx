import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    children: React.ReactNode;
    type?: 'outline';
}

export const Button: React.FC<Props> = ({ className, children, type }) => {
    return (
        <button
            style={{
                backgroundColor: `${type === 'outline' ? 'transparent' : '#141416'}`,
                color: `${type === 'outline' ? '#141416' : 'white'}`,
                border: `${type === 'outline' ? '2px solid #141416' : 'none'}`,
            }}
            className={cn(
                'bg-[#141416] text-white font-normal h-[50px] px-5 rounded-xl text-[15px] tracking-wide hover:bg-black transition-colors duration-300 cursor-pointer',
                className
            )}>
            {children}
        </button>
    );
};
