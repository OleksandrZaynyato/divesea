import React from "react";
import Image from "next/image";

// Types
interface BaseItem {
    img: string;
    name: string;
    desc?: string;
}

interface PriceItem extends BaseItem {
    price: number;
    priceChange: string;
}

interface FollowItem extends BaseItem {
    isFollowed: boolean;
}

interface SingleItem {
    img: string;
    name: string;
    date: string;
}

interface SectionProps {
    title: string;
    type: "price" | "follow" | "single";
    list?: (PriceItem | FollowItem)[];
    singleItem?: SingleItem;
}

export default function MultiUseSection({title, type, list, singleItem}: SectionProps) {
    // const sizes = {
    //     sm: { li: "h-13.5", img: "w-10 h-10", name: "text-sm", title: "text-base", wrapper: "p-3 gap-3" },
    //     md: { li: "w-78.5 h-15", img: "w-11 h-11", name: "text-base", title: "text-lg", wrapper: "p-4 gap-4" },
    //     lg: { li: "h-17", img: "w-16 h-16", name: "text-lg", title: "text-xl", wrapper: "p-5 gap-5" },
    // };
    //
    // const sizeCfg = sizes[size];

    return (
        <section
            className="w-[365px] h-[246px] px-5.5 py-6.5 rounded-2xl border border-gray-200 bg-white shadow-[17.72px_11.76px_58.81px_0px_rgba(199,199,199,0.6)] flex flex-col absolute bottom-0 right-1/15 z-20">
            <h2 className="text-xl font-semibold tracking-wide mb-7">{title}</h2>

            {/* TYPE 1 & 2: LIST */}
            {type !== "single" && list && (
                <ul className="flex flex-col gap-5 pl-0.5">
                    {list.map((item, i) => (
                        <li key={i} className="w-78.5 h-15  flex items-center gap-4">
                            <div className="relative w-12 h-12">
                                <Image
                                    className="inline-block w-11 h-11 rounded-full object-cover"
                                    src={item.img}
                                    alt="Ethereum Icon"
                                    width={40}
                                    height={40}
                                />


                                <div className="absolute bottom-0 right-0 w-5 h-5 text-xs font-bold bg-white rounded-full flex items-center justify-center">
                                    {i+1}
                                </div>
                            </div>

                            <div className="h-full pt-1.5 pb-1 flex-1 flex flex-col justify-between">
                                <p className="text-base font-medium">{item.name}</p>
                                {"desc" in item && <p className="text-sm text-[#64748B]">{item.desc}</p>}
                            </div>

                            {/* Price type */}
                            {type === "price" && "price" in item && (
                                <div className="h-full pt-1.5 pb-1 text-right flex flex-col items-end justify-between">
                                    <p className="font-semibold text-base">
                                        <Image
                                            className="inline-block"
                                            src="/mdi_ethereum.png"
                                            alt="Ethereum Icon"
                                            width={18}
                                            height={18}
                                        />{item.price}
                                    </p>
                                    <p className={`text-sm ${item.priceChange.includes("+") ? "text-green-500" : "text-red-600"}`}>
                                        {item.priceChange}
                                    </p>
                                </div>
                            )}

                            {/* Follow type */}
                            {type === "follow" && "isFollowed" in item && (
                                <button
                                    className={`px-4 py-1.5 rounded-lg text-sm font-medium shadow ${
                                        item.isFollowed
                                            ? "bg-gray-200 text-gray-600"
                                            : "bg-blue-600 text-white"
                                    }`}
                                >
                                    {item.isFollowed ? "Following" : "Follow"}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}

            {/* TYPE 3: SINGLE */}
            {type === "single" && singleItem && (
                <div className="flex items-center gap-6 p-5 rounded-xl border bg-gray-50">
                    <img src={singleItem.img} alt={singleItem.name} className="w-16 h-16 rounded-xl object-cover"/>

                    <div className="flex flex-col">
                        <p className="text-xl font-semibold">{singleItem.name}</p>
                        <p className="text-sm text-gray-600">Created: {singleItem.date}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
