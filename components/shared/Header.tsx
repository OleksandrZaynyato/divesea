import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('flex items-center justify-between ', className)}>
            <div className="flex items-center gap-[50px]">
                <Image src="/Image/WaveLogo.png" alt="Logo" width={50} height={50} className="cursor-pointer" />

                <nav className="flex gap-[45px] text-[#606060] font-medium">
                    <h2 className="cursor-pointer">DISCOVER</h2>
                    <h2 className="cursor-pointer">CREATORS</h2>
                    <h2 className="cursor-pointer">SELL</h2>
                    <h2 className="cursor-pointer">STATS</h2>
                </nav>
            </div>
            <div className="flex items-center gap-[30px]">
                <Input placeholder="Search Art Work / Creator" />
                <Button>CONNECT WALLET</Button>
            </div>
        </header>
    );
};
