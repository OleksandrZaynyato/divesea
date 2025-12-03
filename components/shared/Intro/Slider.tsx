'use client';

import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// 1. Справжні імпорти з бібліотеки (має бути встановлено: npm install swiper)
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';
import Image from 'next/image';

// 2. Імпорт стилів
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import './Slider.css';

export default function Slider() {
    // Дані слайдів
    const slides = [
        {
            id: 1,
            image: '/Image/NFT/NFT.jpg',
        },
        {
            id: 2,
            image: '/Image/NFT/NFT2.jpg',
        },
        {
            id: 3,
            image: '/Image/NFT/NFT3.jpg',
        },
        {
            id: 4,
            image: '/Image/NFT/NFT4.jpg',
        },
        {
            id: 5,
            image: '/Image/NFT/NFT5.jpg',
        },
    ];

    return (
        <div className="min-h-fit w-1/2 bg-slate-50 flex flex-col items-center justify-center relative  font-sans">
            {/* Головний контейнер */}
            <div className="w-full max-w-3xl flex flex-col ">
                {/* Swiper Component */}
                <Swiper
                    loop={true}
                    modules={[EffectCreative, Navigation]}
                    effect={'creative'}
                    grabCursor={true}
                    slidesPerView={'auto'}
                    speed={600}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    creativeEffect={{
                        limitProgress: 1, // Обмежуємо кількість видимих слайдів для чистоти
                        prev: {
                            shadow: true,
                            // Йде ВЛІВО (-120%) і ВГОРУ (-40%), зникає (opacity: 0)
                            translate: ['0%', '0%', -100],
                            rotate: [0, 0, 0],
                            opacity: 0.5,
                        },
                        next: {
                            shadow: false,
                            // Стоїть СПРАВА (55%) і ВНИЗУ (30%), трохи в глибині (-200)
                            translate: ['110%', '40%', -100],
                            rotate: [0, 0, 0], // Рівно, без повороту, як на фото
                            opacity: 1, // На фото його видно чітко
                            scale: 0.8, // Можна трохи зменшити, щоб підкреслити перспективу
                        },
                    }}
                    className="mySwiper">
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <Image
                                src={slide.image}
                                alt="Slide"
                                width={395}
                                height={395}
                                className="w-[395px] h-[395px] object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute top-0 right-0 z-10 flex items-end gap-16 transform translate-x-[30%]">
                    <Image
                        src="/Image/SliderArrow.png"
                        alt="Arrow"
                        width={125}
                        height={125}
                        className="w-[125px] h-[125px]"
                    />
                    <div className="dots-pattern w-[115px] h-[190px] "></div>
                </div>

                {/* Навігація */}
                <div className="flex gap-8 mt-15 z-50 nav-btn w-fit ml-28 mb-20 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                    <div className="custom-prev cursor-pointer">
                        <ArrowLeft size={20} color="#23262F" />
                    </div>
                    <div className="w-0.5 h-5 bg-slate-200 self-center rounded-full"></div>
                    <div className="custom-next cursor-pointer">
                        <ArrowRight size={20} color="#23262F" />
                    </div>
                </div>
            </div>
        </div>
    );
}
