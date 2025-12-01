"use client";

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

import {Card} from "@/components/ui/Card";
import Image from "next/image";

export const Slider: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {

    return (
        <div className="w-full relative bg-[#F1F1F1] overflow-hidden mt-2">
            <Swiper

                modules={[Navigation]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                centeredSlides={true}
                loop
                spaceBetween={40}
                // breakpoints={{
                //     320: {   // phones
                //         slidesPerView: 1.2,
                //         slidesOffsetBefore: 0,   // ~half of card
                //         slidesOffsetAfter: 0,
                //     },
                //     480: {  // small phones landscape
                //         slidesPerView: 1,
                //         slidesOffsetBefore: 80,
                //         slidesOffsetAfter: 80
                //     },
                //     768: {  // tablets
                //         slidesPerView: 2,
                //         slidesOffsetBefore: 80,
                //         slidesOffsetAfter: 80
                //     },
                //     960: { // large tablets / small desktops
                //         slidesPerView: 3,
                //         slidesOffsetBefore: 20,
                //         slidesOffsetAfter: 0
                //     },
                //     1300: { // full layout: you want 5 cards
                //         slidesPerView: 4,
                //         slidesOffsetBefore: 0,  // 280px / 2
                //         slidesOffsetAfter: -60
                //     },
                //     1400: { // full layout: you want 5 cards
                //         slidesPerView: 4.9,
                //         slidesOffsetBefore: -20,  // 280px / 2
                //         slidesOffsetAfter: 0
                //     },
                // }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.1,
                        slidesOffsetBefore: 70,
                        slidesOffsetAfter: 70,
                    },
                    576: {     // extra breakpoint between 480 and 768
                        slidesPerView: 1.4,
                        slidesOffsetBefore: 100,
                        slidesOffsetAfter: 100,
                    },
                    768: {
                        slidesPerView: 1.8,
                        slidesOffsetBefore: 120,
                        slidesOffsetAfter: 120,
                    },
                    896: {
                        slidesPerView: 2.2,
                        slidesOffsetBefore: 140,
                        slidesOffsetAfter: 140,
                    },
                    1074: {
                        slidesPerView: 2.6,
                        slidesOffsetBefore: 160,
                        slidesOffsetAfter: 160,
                    },
                    1380: {
                        slidesPerView: 3,
                        slidesOffsetBefore: 280,
                        slidesOffsetAfter: 240,
                    }
                }}
            >
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
            </Swiper>
            <div className="w-full flex justify-center mt-29 mb-4">
                <div
                    className="w-41 h-17 bg-white rounded-2xl grid grid-cols-[2fr_1fr_2fr] justify-items-center items-center shadow-[0_0_34px_-25px_rgba(15,15,15,0.12)]">
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
            </div>

        </div>

    );
}