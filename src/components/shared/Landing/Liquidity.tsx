"use client"
import Image from 'next/image';
import React from 'react';

type dataType = {
    name : string;
    title : string;
    des: string;
}

const data =[
    {
        name : "Lee Erswell",
        title : "Telos foundation ceo",
        des : "Rtech was a game-changer. Their marketing strategies boosted online visibility and engagement. They understand startups and exceeded my expectations. Highly recommended!",
    },
    {
        name : "Mark Smargson",
        title : "fuse labs ceo",
        des : "As a tech startup, we needed a digital-savvy partner, and Rtech delivered. Their SEO, content, and social media expertise fueled remarkable user growth and brand recognition."
    },
    {
        name : "Xiaohan Zhu",
        title : "meter foundation ceo",
        des : "Rtech transformed our online store with creative marketing and data-driven campaigns that increased traffic and sales. Their dedication and responsiveness on the path to success."
    },
    {
        name : "Joseph Charles",
        title : "Nonprofit Director",
        des : "Our nonprofit needed cost-effective outreach. Rtech delivered a budget-friendly plan that boosted support and engagement. A trusted partner for mission-driven organizations."
    },
]

const Liquidity = () => {
    return (
        <div className='container p-1.5 mx-auto'>
            <div className='xxl:max-w-[1250px] xl:max-w-[1200px] mx-auto my-14 md:items-center grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className="flex flex-col h-full md:h-[88%] justify-between">
                    <div className="">
                        <div className="">
                            <div className="flex w-max gap-2.5">
                                <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
                                <p className="text-[12px] text-whte">Testimonial</p>
                                <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
                            </div>
                        </div>
                    <h2 className="xxl:text-[50px] lg:text-[42px] md:text-[36px] sm:text-[32px] text-[26px] leading-[57px] -tracking-[2PX] font-bold">Liquidity And User Growth Flywheel Strategy</h2>
                    </div>
                    <div className="relative hidden md:block">
                        <Image src={'/img/liquidity.png'} className='absolute -left-8 -z-10 xxl:max-w-[640px] md:bottom-17 lg:bottom-14 xl:bottom-[70px] xxl:bottom-[99px]' height={650} width={950} alt='asdf'/>
                        <div className="max-w-[430px] z-40 mx-auto py-5 text-[#10161B] bg-white text-center">
                            <h5 className="text-[18px] font-bold">Fueled By USDM</h5>
                            <p className="text-[16px] font-medium text-[#667687]">Integrate USDM in all products</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    {
                        data?.map((info, idx)=> <div key={idx} className="bg-white rounded-2xl flex gap-3.5 p-6">
                            <div className="w-[40px] mt-2 shrink-0 h-[40px] flex justify-center items-center rounded-full bg-[#D1D1D1]"></div>
                            <div className="">
                                <h3 className="text-[] md:text-[] lg:text-[18px] xl:text-[20px] font-bold">{info?.name}</h3>
                                <h5 className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-[#667687] mb-4 font-medium">{info?.title}</h5>
                                <p  className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#667687] font-medium">{info?.des}</p>
                            </div>
                        </div> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Liquidity;