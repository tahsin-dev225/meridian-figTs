import { CirclePlay } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='rounded-tl-2xl overflow-hidden text-[#FFFFFF] py-6 px-5 flex justify-center items-center relative rounded-br-2xl bg-[#10161B]'>
            <div className="w-[98%] smd:w-[85%] md:w-[80%] z-20 lg:w-[70%] text-center py-[30px] md:py-[200px]">
                <h1 className="text-[22px] smd:text-[28px] md:text-[38px] xl:text-[80px] font-bold leading-[100%] mx-auto" >Pioneers of a Decentralized Future</h1>
                <p className="text-[12px] sm:text-[14px] lg:text-[18px] w-[95%] md:w-[55%] my-2.5 md:my-6 mx-auto font-medium ">Delivering decentralized, cross-chain, financial solutions for the blockchain industry. </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link href={'/'} className='px-3 py-1.5 rounded-4xl bg-[#10161B]'>Get Started now</Link>
                    <Link href={'/'} className='px-3 py-1.5 rounded-4xl flex items-center gap-2.5'>
                        <CirclePlay />
                        WHAT IS MERIDIAN
                    </Link>
                </div>
            </div>
            <div className="absolute w-full h-full flex justify-center items-center ">
                <Image className='max-w-[250px] xsm:max-w-[400px] smd:w-[500px] sm:min-w-[350px] md:w-[450px] lg:min-w-[600px]' src={'/img/bnrbg.png'} height={450} width={800} alt='banner bg' />
            </div>
        </div>
    );
};

export default Banner;