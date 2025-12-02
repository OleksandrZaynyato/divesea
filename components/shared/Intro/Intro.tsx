import React from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/shared/';
import { Button } from '@/components/ui';
import Slider from './Slider';

interface Props {
    className?: string;
}

export const Intro: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('bg-[#F9F9F9] px-24 h-fit pb-38', className)}>
            <Header className="pt-11 pb-25" />
            <div className="flex">
                <div className="flex flex-col gap-4 w-1/2">
                    <div>
                        <div className="w-1/3 bg-[#201F1F] h-px opacity-20 mb-2"></div>
                        <h1 className="text-[75px] text-[#141416] font-semibold leading-[120%] tracking-[-3px]">
                            Discover And <br /> Create NFTs
                        </h1>
                    </div>
                    <p className="text-[#676767] text-[18px] pb-[29px]">
                        Discover, Create and Sell NFTs On Our NFT Marketplace <br /> With Over Thousands Of NFTs And Get
                        a <span className="font-semibold">$20 bonus</span>.
                    </p>
                    <div className="flex gap-5">
                        <Button>EXPLORE MORE</Button>
                        <Button type="outline">CREATE NFT</Button>
                    </div>
                    <div className="flex gap-16 mt-[66px]">
                        <div>
                            <h2 className="text-4xl font-medium mb-1">430K+</h2>
                            <p className="text-[#848586] text-[12px]">Art Works</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-medium mb-1">159K+</h2>
                            <p className="text-[#848586] text-[12px]">Creators</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-medium mb-1">87K+</h2>
                            <p className="text-[#848586] text-[12px]">Collections</p>
                        </div>
                    </div>
                </div>
                <Slider />
            </div>
        </div>
    );
};
