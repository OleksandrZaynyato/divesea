import React from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/shared/';
import { Button } from '@/components/ui';

interface Props {
    className?: string;
}

export const Intro: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('bg-[#F9F9F9] px-[77px] h-fit pb-38', className)}>
            <Header className="pt-9 pb-24" />
            <div className="flex flex-col gap-5">
                <div>
                    <div className="w-1/6 bg-[#201F1F] h-px opacity-20 mb-2"></div>
                    <h1 className="text-[60px] font-semibold leading-[70px]">
                        Discover And <br /> Create NFTs
                    </h1>
                </div>
                <p className="text-[#676767] pb-4">
                    Discover, Create and Sell NFTs On Our NFT Marketplace <br /> With Over Thousands Of NFTs And Get a{' '}
                    <span className="font-semibold">$20 bonus</span>.
                </p>
                <div className="flex gap-5">
                    <Button>EXPLORE MORE</Button>
                    <Button type="outline">CREATE NFT</Button>
                </div>
                <div className="flex gap-16 mt-[55px]">
                    <div>
                        <h2 className="text-3xl font-medium mb-1">430K+</h2>
                        <p className="text-[#848586] text-[11px]">Art Works</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-medium mb-1">159K+</h2>
                        <p className="text-[#848586] text-[11px]">Creators</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-medium mb-1">87K+</h2>
                        <p className="text-[#848586] text-[11px]">Collections</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
