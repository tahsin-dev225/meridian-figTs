"use client"
import Link from 'next/link';
import React from 'react';

const CAT = () => {
    return (
        <div className='lg:my-24 my-12 flex justify-center mx-auto items-center flex-col container '>
            <h1 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] xxl:text-[50px] my-3 leading-[60px]">Ready To Get Started?</h1>
            
            <Link className="md:max-w-[635px] w-[90%] sm:w-[80%] md:w-[60%] relative flex justify-center my-5 lg:text-[20px] sm:text-[17px] text-[14px] xxl:text-[24px] font-bold text-white items-center py-[22px] bg-cover  rounded-[70px] bg-[url('/img/btnbg.png')]" href={'/'}>
                <span className='z-30'> GET STARTED</span>
                <div className="absolute rounded-full w-full h-full top-0  bg-black/25"></div>
            </Link>
        </div>
    );
};

export default CAT;