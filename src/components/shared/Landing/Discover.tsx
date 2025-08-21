import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Discover = () => {
    return (
        <div className='w-full bg-[#10161B] mt-32 mb-8'>
            <div className="lg:w-[90%] xxl:max-w-[1250px] xl:max-w-[1200px] mx-auto py-14 pt-[80px] md:items-center">
                <div className="flex mx-auto w-max gap-2.5">
                    <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
                    <p className="text-[12px] text-white">Why Choose us</p>
                    <Image className='mx-0 size-[10px] ' src={'/img/star.png'} width={250} height={150} alt='star'/>
                </div>
                <h1 className="text-[50px] font-bold text-white text-center mt-3 mx-auto">Discover Our products</h1>
                <h1 className="text-[14px] text-white text-center mx-auto mb-10">
                    {"Three of DeFi's favorite products, carefully crafted into one unified solution"}
                </h1>
                <div className="lg:w-full mx-auto w-[96%] grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="flex flex-col rounded-xl justify-center items-center p-2 lg:p-5 bg-[#1B252D]">
                        <Image className='w-[80px] lg:mx-0 lg:w-[150px] ' src={'/img/bitcoins.png'} width={250} height={150} alt='icon'/>
                        <h3 className="text-[15px] lg:text-[18px] my-2 lg:my-4 font-bold text-white">Stablecoin</h3>
                        <p className="text-[11px] lg:text-[14px] text-center mx-auto xxl:max-w-[199px] w-[80%] text-[#7A8B99] mb-5 lg:mb-8">
                            Over-collateralized and fully decentralized stablecoin that leverages a networks’ 
                            native token to bring non-custodial, secured lending based on Liquity codebase.
                        </p>
                        <p className="text-[11px] lg:text-[14px] mb-3 font-medium flex gap-1.5 items-center text-white">
                            Learn more
                            <ArrowRight/>
                        </p>
                    </div>
                    <div className="flex flex-col sm:rounded-tr-[80px] sm:rounded-bl-[80px] justify-center items-center p-2 lg:p-5 bg-[#1B252D]">
                        <Image className='w-[80px] lg:mx-0 lg:w-[150px] ' src={'/img/Lend.png'} width={250} height={150} alt='icon'/>
                        <h3 className="text-[15px] lg:text-[18px] my-2 lg:my-4 font-bold text-white">Lending</h3>
                        <p className="text-[11px] lg:text-[14px] text-center mx-auto xxl:max-w-[199px] w-[80%] text-[#7A8B99] mb-5 lg:mb-8">
                            A decentralized platform connects lenders and borrowers. Depositors earn passive income by providing 
                            liquidity, while borrowers secure overcollateralized loans against their whitelisted assets.
                        </p>
                        <p className="text-[11px] lg:text-[14px] mb-3 font-medium flex gap-1.5 items-center text-white">
                            Learn more
                            <ArrowRight/>
                        </p>
                    </div>
                    <div className="flex flex-col rounded-xl justify-center items-center p-2 lg:p-5 bg-[#1B252D]">
                        <Image className='w-[80px] lg:mx-0 lg:w-[150px] ' src={'/img/trade.png'} width={250} height={150} alt='icon'/>
                        <h3 className="text-[15px] lg:text-[18px] my-2 lg:my-4 font-bold text-white">perpetuals trading</h3>
                        <p className="text-[11px] lg:text-[14px] text-center mx-auto xxl:max-w-[199px] w-[80%] text-[#7A8B99] mb-5 lg:mb-8">
                            Leveraged Trading is a popular form of derivative trading that enables investors to speculate on the price movements
                             of crypto assets, without owning the underlying asset.
                        </p>
                        <p className="text-[11px] lg:text-[14px] mb-3 font-medium flex gap-1.5 items-center text-white">
                            Learn more
                            <ArrowRight/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;