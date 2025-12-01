import React from "react";
import {Card} from "@/components/ui/Card";
import {Slider} from "@/components/shared/weekly/Slider";

export const Weekly: React.FC = () => {
    return (
        <div className="relative w-full h-[988px]">
            <div className="flex flex-col w-full h-[873px] bg-[#F1F1F1] py-15">
                <h2 className="text-5xl text-center text-[#C5C5C5] font-semibold mb-20">Weekly - Top NFT</h2>
                <Slider/>
            </div>
        </div>
    );
}
