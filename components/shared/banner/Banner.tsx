import Image from "next/image";

export const Banner: React.FC = () => {
    return (
        <div
            className="w-full h-[311px] bg-[#141416] text-white p-8 my-20 rounded-4xl flex justify-between items-center font-['Poppins']">
            <div className="h-full flex flex-col justify-between p-4">
                <div>
                    <h1 className="text-5xl font-semibold mb-4">Create and Sell NFTs</h1>
                    <p className="text-lg text-[#D4D4D4]">World’s Largest NFT Place</p>
                </div>
            </div>
            <div className="w-[390px] h-[290px] rounded-2xl overflow-visible flex items-center justify-center relative">
                <Image
                    src="/Rectangle33.png"
                    alt="NFT Card"
                    width={390}
                    height={369}
                    className="w-[390px] opacity-70 blur-[58px] absolute top-7 object-cover z-10"
                />
                <Image
                    src="/Rectangle33.png"
                    alt="NFT Card"
                    width={369}
                    height={369}
                    className="relative z-20 object-cover"
                />

            </div>
        </div>
    );
}