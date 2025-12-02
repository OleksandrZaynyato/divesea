import { Button, Card } from '@/components/ui';
import { ArrowRight, AudioLines, BadgeDollarSign, Rows4 } from 'lucide-react';
import React from 'react';

export function Explore() {
    const cards = [
        {
            id: 1,
            image: 'Image/NFT/NTF.png',
        },
        {
            id: 2,
            image: 'Image/NFT/NTF2.png',
        },
        {
            id: 3,
            image: 'Image/NFT/NTF3.png',
        },
        {
            id: 4,
            image: 'Image/NFT/NTF4.png',
        },
        {
            id: 5,
            image: 'Image/NFT/NTF5.png',
        },
        {
            id: 6,
            image: 'Image/NFT/NTF4.png',
        },
        {
            id: 7,
            image: 'Image/NFT/NTF.png',
        },
        {
            id: 8,
            image: 'Image/NFT/NTF2.png',
        },
    ];

    return (
        <div className="px-24 flex flex-col items-center justify-center w-full gap-[66px] bg-[#F9F9F9]">
            <h1 className="text-[45px] font-semibold text-[#141416] w-fit">Explore Marketplace</h1>
            <div className="flex gap-[22px]">
                <Button type="outline">All</Button>
                <Button type="outline" className="flex justify-center items-center gap-2">
                    <Rows4 />
                    Category
                </Button>
                <Button type="outline" className="flex justify-center items-center gap-2">
                    <AudioLines />
                    Collections
                </Button>
                <Button type="outline" className="flex justify-center items-center gap-2">
                    <BadgeDollarSign size={20} />
                    Price
                </Button>
            </div>
            <div className="grid grid-cols-4 w-full mt-[35px] gap-y-[67px]">
                {cards.map((card) => (
                    <Card key={card.id} />
                ))}
            </div>
            <div className="text-[#ACADB9] flex gap-4 items-center group cursor-pointer w-full justify-end">
                <h2>Explore All</h2>
                <ArrowRight className="group-hover:translate-x-1 duration-200  group-hover:scale-x-120" size={16} />
            </div>
        </div>
    );
}
