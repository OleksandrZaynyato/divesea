import Image from "next/image";

interface Props {
    imgSrc?: string;
    title?: string;
    currentBid?: number;
    timeLeft?: string;
}

export const Card: React.FC = () => {
    return (
        <div className="w-[281px] h-[402px] rounded-3xl border border-gray-200 bg-white p-3.5 shadow-[17.72px_11.76px_58.81px_0px_rgba(199,199,199,0.6)] dark:border-gray-700 dark:bg-gray-800 font-[Poppins] flex flex-col justify-between overflow-visible">

            <div className="bg-gradient-to-b from-gray-50 to-gray-50 relative w-[252px] h-[252px] mx-auto rounded-[18px]">
                {/* image */}
                <Image
                    src="/Rectangle32.png"
                    alt="NFT Card"
                    width={252}
                    height={252}
                    className="relative z-10 rounded-3xl w-full h-full object-cover
                    after:"
                />

                <div className="absolute top-3 right-3 bg-[#1C1D20]/40 border-2 border-[#1C1D20]/10 text-white items-center text-sm px-3.5 py-1.5 rounded-[9px] z-20">
                    07h 09m 12s
                </div>
            </div>



            <div className="mt-4.5 px-0.5 h-full flex items-center justify-between flex-col">
                <h3 className="text-[21px] font-semibold text-black dark:text-white text-left w-full tracking-wide">Sun-Glass</h3>
                <div className="grid grid-cols-2 [grid-template-areas:'a_c''b_c']  w-full [height:55px]">
                    <span className="text-[#94A3B8] text-sm [grid-area:a]">Current bid</span>
                    <span className="text-base font-medium [grid-area:b]">
                        <Image
                            className="inline-block  mr-1"
                            src="/mdi_ethereum.png"
                            alt="Ethereum Icon"
                            width={21}
                            height={21}
                    />1.75</span>
                    <button
                        className="[grid-area:c] w-30 h-13 rounded-xl bg-black text-sm px-4 p-2 text-white hover:bg-">
                        PLACE BID
                    </button>
                </div>
            </div>
        </div>
    );
}