import Image from "next/image";

export const Card: React.FC = () => {
    return (
        <div className="w-[281px] h-[402px] rounded-3xl border border-gray-200 bg-white p-3.5 shadow-md dark:border-gray-700 dark:bg-gray-800 font-[Poppins]">
            <Image
                className="dark:invert w-[252px] h-[252px] rounded-3xl"
                src="/Rectangle3.png"
                alt="NFT Card"
                width={252}
                height={252}
            />
            <div className="mt-5 px-1 flex items-center justify-between flex-col">
                <h3 className="text-[21px] font-semibold text-black dark:text-white text-left w-full tracking-wide">Sun-Glass</h3>
                <div className="grid grid-cols-2 gap-2 [grid-template-areas:'a_c''b_c']">
                    <span className="text-[#94A3B8] text-sm [grid-area:a]">Current Bid</span>
                    <span className="text-[#10B981] text-sm [grid-area:b]">
                        <Image
                            className="inline-block  mr-1"
                            src="/mdi_ethereum.png"
                            alt="Ethereum Icon"
                            width={21}
                            height={21}
                    />1.75</span>
                    <button
                        className="[grid-area:c] mt-2 rounded-lg bg-black px-4 p-2 text-white hover:bg-">
                        PLACE BID
                    </button>
                </div>
            </div>
        </div>
    );
}