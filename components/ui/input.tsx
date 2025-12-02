import React from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

interface Props {
    className?: string;
    placeholder?: string;
}

export const Input: React.FC<Props> = ({ className, placeholder }) => {
    return (
        <div
            className={cn(
                'bg-[#EDEDED] h-[60px] text-white font-normal py-4 px-5 rounded-2xl text-[15px] tracking-wide flex items-center gap-[25px]',
                className
            )}>
            <Search color={'#9D9D9D'} width={22} height={22} />
            <input
                type="text"
                placeholder={placeholder}
                className="placeholder:text-[#C2C3CB] text-[#C2C3CB] outline-none w-55"
            />
        </div>
    );
};
