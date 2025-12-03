import Image from "next/image";
import React from "react";

export const SliderButtons: React.FC = () => {
    return (
        <div
            className="w-41 h-17 bg-white rounded-2xl grid grid-cols-[2fr_1fr_2fr] justify-items-center items-center shadow-[0px_43.12px_34.49px_-0px_rgba(15,15,15,0.12)]">
            <div
                className="custom-prev w-full h-full text-gray-600 text-2xl flex items-center justify-center cursor-pointer z-10 group">
                <Image
                    src="/arrowLeftGray.svg"
                    alt="NFT Card"
                    width={16}
                    height={16}
                    className="w-4 group-hover:brightness-0"
                />
            </div>
            <div className="w-0.5 h-6 rounded-full bg-[#E6E8EC]"></div>
            <div
                className="custom-next w-full h-full text-gray-600 text-2xl flex items-center justify-center cursor-pointer z-10 group">
                <Image
                    src="/arrowLeftGray.svg"
                    alt="NFT Card"
                    width={16}
                    height={16}
                    className="w-4 rotate-180 group-hover:brightness-0"
                />
            </div>
        </div>
    );
}