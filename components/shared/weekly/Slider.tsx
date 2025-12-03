"use client";

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

import {Card} from "@/components/ui/Card";
import Image from "next/image";
import {SliderButtons} from "@/components/ui/SliderButtons";

export const Slider: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {

    return (
        <div className="w-full relative bg-[#F1F1F1] overflow-hidden mt-2 py-15">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                centeredSlides={true}
                loop
                spaceBetween={40}
                breakpoints={{
                    320: { slidesPerView: 1.1, slidesOffsetBefore: 70, slidesOffsetAfter: 70 },
                    576: { slidesPerView: 1.4, slidesOffsetBefore: 100, slidesOffsetAfter: 100 },
                    768: { slidesPerView: 1.8, slidesOffsetBefore: 120, slidesOffsetAfter: 120 },
                    896: { slidesPerView: 2.2, slidesOffsetBefore: 140, slidesOffsetAfter: 140 },
                    1074: { slidesPerView: 2.6, slidesOffsetBefore: 160, slidesOffsetAfter: 160 },
                    1380: { slidesPerView: 3, slidesOffsetBefore: 280, slidesOffsetAfter: 240 }
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
            <div className="w-full flex justify-center mt-29 mb-19 overflow-visible">
                <SliderButtons />
            </div>

        </div>

    );
}