import { Send } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { TbMessage2Star } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='w-full bg-[#10161B] relative  text-white'>
            <div className=" lg:w-[90%] w-[96%] xxl:max-w-[1250px] grid sm:grid-cols-2 lg:grid-cols-4 pb-6  z-30 gap-4 md:gap-8 lg:gap-12 xl:gap-14 xxl:gap-16 xl:max-w-[1200px] mx-auto pt-10 ">
                <div className="">
                    <h2 className="text-[20px] font-bold">Newsletter</h2>
                    <p className="text-[13px] 2xl:text-[16px] my-3 mb-7 text-[#7A8B99]">Sign up to Meridian Ventures monthly newsletter to get the latest updates.</p>
                    <div className="flex rounded-tl-[20px] rounded-br-[20px] relative overflow-hidden items-center bg-[#1B2229] text-white px-4 py-4 rounded-md">
                        <TbMessage2Star className="w-5 h-5 text-gray-300 mr-2" />
                        <input type="text" placeholder="Enter your email" className="bg-transparent outline-none text-sm placeholder-gray-400" />
                        <div className="bg-[#924FF8] absolute right-0 text-white my-2.5 size-[40px] flex justify-center items-center rounded-tl-[20px] rounded-br-[20px]">
                            <Send className='size-4' />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[20px] font-bold">Products</h2>
                    <Link href={'/'} className="text-[16px] my-1 mt-5 text-[#7A8B99]">Stablecoin (Mint)</Link>
                    <Link href={'/'} className="text-[16px] my-1 text-[#924FF8] ">Lending (Lend)</Link>
                    <Link href={'/'} className="text-[16px] my-1 text-[#7A8B99]">Perpetuals (Trade)</Link>
                    
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[20px] font-bold">Quick Links</h2>
                    <Link href={'/'} className="text-[16px] my-1 mt-5 text-[#7A8B99]">Home</Link>
                    <Link href={'/'} className="text-[16px] my-1 text-[#924FF8] ">About US</Link>
                    <Link href={'/'} className="text-[16px] my-1 text-[#7A8B99]">Main Services</Link>
                    <Link href={'/'} className="text-[16px] my-1 text-[#7A8B99]">Pricing</Link>
                    <Link href={'/'} className="text-[16px] my-1 text-[#7A8B99]">Contact Us</Link>
                    
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[20px] font-bold marker:text-[#7A8B99]">Community</h2>
                    <ul className='list-disc mt-5 '>
                        <li className='ml-4'><Link href={'/'} className="text-[16px] my-1 mt-4 text-[#7A8B99]">Our Product</Link></li>
                        <li className='ml-4'><Link href={'/'} className="text-[16px] my-1 mt-4 text-[#7A8B99]">Documentation</Link></li>
                        <li className='ml-4'><Link href={'/'} className="text-[16px] my-1 mt-4 text-[#7A8B99]">Our Services</Link></li>
                        <li className='ml-4'><Link href={'/'} className="text-[16px] my-1 mt-4 text-[#7A8B99]">Company</Link></li>
                        <li className='ml-4'><Link href={'/'} className="text-[16px] my-1 mt-4 text-[#7A8B99]">What We Do?</Link></li>
                    </ul>
                    
                    
                </div>
            </div>
            <div className="lg:w-[90%] border-t-[1px] border-t-[#1B252D] w-[96%] py-5 text-[#7A8B99] xxl:max-w-[1250px] flex flex-col sm:flex-row justify-between z-30 items-center gap-4 md:gap-8 lg:gap-12 xl:gap-14 xxl:gap-16 xl:max-w-[1200px] mx-auto ">
                <p className="text-[12px] lg:text-[14px] ">Copyright © 2024 Meridian Ventures. All rights reserved.</p>
                <p className="text-[12px] lg:text-[14px] ">Terms of Use  .  Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;