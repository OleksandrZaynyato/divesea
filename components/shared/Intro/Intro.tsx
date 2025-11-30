import React from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/shared/';

interface Props {
    className?: string;
}

export const Intro: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('bg-[#F9F9F9] px-[77px] h-fit', className)}>
            <Header />
        </div>
    );
};
