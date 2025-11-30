import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
    return <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ', className)}>{children}</div>;
};
