import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('', className)}>
            <Image src="/Image/WaveLogo.png" alt="Logo" width={53} height={53} />

            <Button>CONNECT WALLET</Button>
        </header>
    );
};
