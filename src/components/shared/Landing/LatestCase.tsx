"use client"
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from 'swiper/modules';

type casesType ={
    id: number;
    title : string;
    subtitle : string;
    img: string;
}

const cases:casesType[] = [
  
  {
    id: 0,
    title: "Our Deployment On Fuse",
    subtitle: "COLLAB WITH FUSE LABS",
    img: "/img/latestr.png",
  },
  {
    id: 1,
    title: "Our Deployment On Fuse",
    subtitle: "COLLAB WITH FUSE LABS",
    img: "/img/latest1.png",
  },
  {
    id: 2,
    title: "Our Deployment On TelosEVM",
    subtitle: "COLLAB WITH TELOS FOUNDATION",
    img: "/img/latest2.png",
  },
  {
    id: 3,
    title: "Our Deployment On Meter",
    subtitle: "COLLAB WITH METER FOUNDATION",
    img: "/img/latest3.png",
  },
];


const LatestCase = () => {
    return (
        // <div className='w-full'>
        //     <div className="flex justify-between lg:w-[90%] xxl:max-w-[1250px] xl:max-w-[1200px] mx-auto py-5 items-center">
        //         <div className="">
        //             <div className="flex w-max gap-2.5">
        //                 <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
        //                 <p className="text-[12px] text-whte">Why Choose us</p>
        //                 <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
        //             </div>
        //             <h1 className="text-[50px] font-bold text-hite text-center mt-3 mx-auto">Our Latest Cases</h1>
        //         </div>
        //     </div>
        //     <Swiper slidesPerView={4} className="mySwiper">
        //         <SwiperSlide>Slide 1</SwiperSlide>
        //         <SwiperSlide>Slide 2</SwiperSlide>
        //         <SwiperSlide>Slide 3</SwiperSlide>
        //         <SwiperSlide>Slide 4</SwiperSlide>
        //         <SwiperSlide>Slide 5</SwiperSlide>
        //         <SwiperSlide>Slide 6</SwiperSlide>
        //         <SwiperSlide>Slide 7</SwiperSlide>
        //         <SwiperSlide>Slide 8</SwiperSlide>
        //         <SwiperSlide>Slide 9</SwiperSlide>
        //     </Swiper>
        // </div>
         <section className="w-full py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex smd:items-center justify-between mb-10">
            <div className="">
                <div className="flex w-max gap-2.5">
                    <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
                    <p className="text-[12px] text-whte">Why Choose us</p>
                    <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
                </div>
                <h1 className="lg:text-[42px] md:text-[36px] sm:text-[32px] text-[26px] xxl:text-[50px] font-bold text-hite md:text-center mt-3 mx-auto">Our Latest Cases</h1>
            </div>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-2 md:gap-3">
            <button className="swiper-button-prev md:w-10 md:h-10 h-8 w-8 flex items-center justify-center rounded-full bg-white shadow border hover:bg-gray-100">
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-black" />
            </button>
            <button className="swiper-button-next md:w-10 md:h-10 h-8 w-8 flex items-center justify-center rounded-full bg-black hover:bg-gray-800">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={24}
          slidesPerView={1.2}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {cases.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                {
                    item?.img ? <Image
                  src={item.img}
                  alt={item.title}
                  height={400}
                  width={400}
                  className="w-full h-64 object-cover"
                />:
                <div className="w-full min-w-[500px] min-h-[300px] top-0 absolute z-20 h-full bg-gray-900"></div>
                }
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 flex items-center justify-between shadow-md">
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    );
};

export default LatestCase;