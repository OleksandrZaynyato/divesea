import React from "react";
import {Card} from "@/components/ui/Card";
import {Slider} from "@/components/shared/weekly/Slider";
import MultiUseSection from "@/components/ui/MultiUseSection";

export const Weekly: React.FC = () => {
    return (
        <div className="relative w-full h-[988px] font-[Poppins]">
            <div className="flex flex-col w-full h-[873px] bg-[#F1F1F1] pt-15">
                <h2 className="text-5xl text-center text-[#C5C5C5] font-semibold mb-5">Weekly - Top NFT</h2>
                <Slider/>
            </div>
            <MultiUseSection title="Recent Viewed" type="price" list={[
                { img: "/Rectangle3.png", name: "Alex Ca.", desc:"Alexy", price: 8.456, priceChange: "+23.00%" },
                { img: "/Rectangle32.png", name: "Juliya S.", desc:"JuliyaS", price: 5.327, priceChange: "-32.01%" },
            ]} />
        </div>
    );
}
