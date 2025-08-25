"use client"
import { ArrowUpRight, ChevronLeft, ChevronRight, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

type casesType ={
    id: number;
    title : string;
    subtitle : string;
    img: string;
}

const cases:casesType[] = [
  {
    id: 1,
    title: "Timothy Judge",
    subtitle: "CO-FOUNDER, DEVELOPER",
    img: "/img/team1.png",
  },
  {
    id: 2,
    title: "John Judge",
    subtitle: "CO-FOUNDER, DEVELOPER",
    img: "/img/team2.png",
  },
  {
    id: 3,
    title: "Yair Haimson",
    subtitle: "Business Development Manager ",
    img: "/img/team3.png",
  },
  {
    id: 4,
    title: "Andrew Brian",
    subtitle: "Account Executive",
    img: "/img/latestr.png",
  },
];

const Team = () => {
    return (
        <div className='w-full px-2 text-white bg-[#10161B] mt-32 pb-4 mb-8'>
            <div className="lg:w-[90%] xxl:max-w-[1250px] xl:max-w-[1200px] mx-auto py-14 pt-[80px] md:items-center">
                <div className="flex smd:items-center justify-between mb-10">
                    <div className="">
                        <div className="flex w-max gap-2.5">
                            <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
                            <p className="text-[12px] text-whte">Out Team</p>
                            <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
                        </div>
                        <h1 className="lg:text-[42px] md:text-[36px] sm:text-[32px] text-[26px] xxl:text-[50px] font-bold text-hite md:text-center mt-3 mx-auto">The Leadership Team</h1>
                    </div>

                    {/* Custom Navigation Buttons */}
                    <div className="flex gap-2 md:gap-3">
                        <button className="swiper-button-prev md:w-10 md:h-10 h-8 w-8 flex items-center justify-center rounded-full bg-black shadow border border-gray-700 hover:bg-gray-100">
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </button>
                        <button className="swiper-button-next md:w-10 md:h-10 h-8 w-8 flex items-center justify-center rounded-full bg-black  border border-gray-700 hover:bg-gray-800">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </button>
                    </div>
                </div>
                <Swiper
                spaceBetween={2}
                slidesPerView={1.2}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                    468: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3.5 },
                }}
                >
                {cases.map((item) => (
                    <SwiperSlide className='overflow-x-auto'  key={item.id}>
                        <div className="relative max-w-[250px] md:max-w-[270px] transition-all hover:rounded-tl-[80px] hover:rounded-br-[80px]  ease-out lg:max-w-[300px] max-h-[390px] md:h-w-[420px] lg:max-h-[500px] rounded-xl overflow-hidden shadow-lg group">
                            {
                                item?.img ? <Image
                            src={item.img}
                            alt={item.title}
                            height={400}
                            width={600}
                            className="w-full min-h-[400px] object-cover"
                            />:
                            <div className="w-full top-0 absolute z-20 h-full bg-gray-900"></div>
                            }
                            <div className="absolute bottom-6 left-4 right-4  rounded-xl p-4  shadow-md">
                                <h3 className="font-bold xxl:text-[20px] text-white">{item.title}</h3>
                                <p className="text-[12px] my-1.5 text-white">{item.subtitle}</p>
                                <div className="hidden group-hover:flex ease-out transition-all duration-1000 gap-2">
                                    <div className="bg-white text-black size-[40px] flex justify-center items-center rounded-tl-3xl rounded-br-3xl">
                                        <Facebook className='' />
                                    </div>
                                    <div className="bg-[#924FF8] text-gray-200 size-[40px] flex justify-center items-center rounded-tl-3xl rounded-br-3xl">
                                        <BsTwitterX />
                                    </div>
                                    <div className="bg-white text-black size-[40px] flex justify-center items-center rounded-tl-3xl rounded-br-3xl">
                                        <FaLinkedinIn />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            
        </div>
    );
};

export default Team;