"use client"
import {  Phone, PhoneCall, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { LuMessageSquareMore } from 'react-icons/lu';
import { RiMailSendLine } from 'react-icons/ri';
import { TbMessage2Star } from 'react-icons/tb';

const Contact = () => {
    return (
        <div className='w-full bg-[#1B252D] relative md:mt-32 mb- text-white'>
            <div className="lg:w-[90%] w-[96%] xxl:max-w-[1250px] flex flex-col md:flex-row z-30 items-center gap-4 md:gap-8 lg:gap-12 xl:gap-14 xxl:gap-16 xl:max-w-[1200px] mx-auto py-24 pt-[80px] md:items-center">
                <div className="xxl:w-[70%] lg:w-[80%] xl:w-[85%] w-full z-30">
                    <div className="">
                        <div className="">
                            <div className="flex w-max gap-2.5">
                                <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
                                <p className="text-[12px] text-whte">contact us</p>
                                <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
                            </div>
                        </div>
                        <h2 className="xxl:text-[50px] lg:text-[42px] md:text-[36px] sm:text-[32px] text-[26px] leading-[57px] -tracking-[2PX] font-bold">
                            Want Our Products? Lets chat.
                        </h2>
                    </div>
                    <div className="xxl:p-12 p-6 py-10 sm:p-10 rounded-tl-[80px] w-full rounded-br-[80px] bg-[#10161baa] mt-10 xxl:w-[90%]">
                        <h4 className="text-[22px] font-bold ">our Headquarters</h4>
                        <p className="text-[16px] text-[#7A8B99] my-5">Sunshine Business park, Floor No 05A,Sector-94,Poland</p>
                        <div className="flex items-center gap-1.5 ">
                             <div className="bg-[#924FF8] text-white my-2.5 size-[40px] flex justify-center items-center rounded-tl-[20px] rounded-br-[20px]">
                                <PhoneCall className='size-4' />
                            </div>
                            <p className="">+888 -8867 3333</p>
                        </div>
                        <div className="flex items-center gap-1.5 mb-5">
                             <div className="bg-[#924FF8] text-white my-2.5 size-[40px] flex justify-center items-center rounded-tl-[20px] rounded-br-[20px]">
                                <PhoneCall className='size-4' />
                            </div>
                            <p className="">+888 -8867 3333</p>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <div className=" size-[40px] flex justify-center items-center">
                                <FaFacebookF className='size-4' />
                            </div>
                            <div className=" size-[40px] flex justify-center items-center">
                                <BsTwitterX className='size-4' />
                            </div>
                            <div className=" size-[40px] flex justify-center items-center">
                                <FaLinkedinIn className='size-4 text-[#924FF8]' />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="xxl:p-12 p-6 smd:p-8 md:p-10 rounded-tl-[80px] z-30 rounded-br-[80px] bg-[#10161baa] mt-10 w-full">
                    <div className="z-40">
                        <h4 className="text-[22px] lg:w-[65%] font-bold ">If You Have Any Question, Fell Free to Contact With us.</h4>
                        <div className="grid grid-cols-1 smd:grid-cols-2 gap-5 my-5">
                            <div className="flex items-center overflow-hidden bg-[#1B2229] text-white px-4 py-4 rounded-md">
                                <User className="w-5 h-5 text-gray-300 mr-2" />
                                <input type="text" placeholder="Goladria Gomez" className="bg-transparent outline-none text-sm placeholder-gray-400" />
                            </div>
                            <div className="flex items-center overflow-hidden bg-[#1B2229] text-white px-4 py-4 rounded-md">
                                <RiMailSendLine  className="w-5 h-5 text-gray-300 mr-2" />
                                <input type="text" placeholder="Goladri@gmail.com" className="bg-transparent outline-none text-sm placeholder-gray-400" />
                            </div>
                            <div className="flex items-center overflow-hidden bg-[#1B2229] text-white px-4 py-4 rounded-md">
                                <Phone className="w-5 h-5 text-gray-300 mr-2" />
                                <input type="text" placeholder="+049358304" className="bg-transparent outline-none text-sm placeholder-gray-400" />
                            </div>
                            <div className="flex items-center overflow-hidden bg-[#1B2229] text-white px-4 py-4 rounded-md">
                                <TbMessage2Star className="w-5 h-5 text-gray-300 mr-2" />
                                <input type="text" placeholder="How can we help you?" className="bg-transparent outline-none text-sm placeholder-gray-400" />
                            </div>
                        </div>
                        <div className="flex items-start bg-[#1B2229] text-white px-4 py-4 rounded-md w-full">
                            <User className="w-5 h-5 text-gray-300 mr-2 mt-1" />
                            <textarea
                                placeholder="Write something..."
                                className="bg-transparent outline-none text-sm placeholder-gray-400 w-full resize-none"
                                rows={5}
                            />
                        </div>
                        <button className='flex z-30 items-center gap-4 my-8 text-[12px] font-bold py-4 px-8 rounded-full bg-[#924FF8]'>
                            START CONSULTING 
                            <LuMessageSquareMore></LuMessageSquareMore>
                        </button>
                    </div>

                </div>
            </div>
                    <Image src={'/img/conBgCen.png'} className='absolute hidden md:block max-w-[100px] smd:max-w-[120px] sm:max-w-[170px] lg:max-w-[230px] xxl:max-w-[241px] -z-0 bottom-8 right-[47%]' height={200} width={300} alt='bg' />
                    <Image src={'/img/conBgRit.png'} className='absolute hidden md:block max-w-[100px] smd:max-w-[120px] sm:max-w-[170px] lg:max-w-[200px] xxl:max-w-[231px] z-0 md:top-10 xxl:-top-5 md:right-8 xxl:right-16' height={200} width={200} alt='bg' />
        </div>
    );
};

export default Contact;