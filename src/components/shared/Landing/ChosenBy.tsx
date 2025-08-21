import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ChosenBy = () => {
    return (
        <div className=" container p-1.5 mx-auto">
            <div className='xxl:max-w-[1250px] xl:max-w-[1200px] mx-auto my-14 md:items-center grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 xsm:grid-cols-2 items-center">
                    <div className="p-5 py-7 w-full rounded-2xl bg-[#475BF1] text-[#FFFFFF]">
                        <h2 className='md:text-[32px] text-[22px] xl:text-[50px] font-bold'>13+</h2>
                        <p className="text-[14px] my-3.5">Financial dApps Deployed by Meridian Ventures for the MeridianDAO across multiple EVM-Compatible Networks</p>
                        <div className="flex gap-[-20px]">
                            <Image className='mx-0 w-[90px] ' src={'/img/chosenthree.png'} width={150} height={150} alt='coll'/>
                        </div>
                    </div>
                    <Image className='mx-0 w-full h-full rounded-2xl' src={'/img/chosen.png'} width={450} height={450} alt='coll'/>
                </div>

                <div className="">
                    <p className="text-[12px] mb-4 text-[#667687] font-bold">why choose us</p>
                    <h2 className="text-[40px] font-bold text-[#050C12] leading-[50px] -tracking-[3%]">chosen By <br />the Meridian Finance DAO</h2>
                    <p className="text-[16px] text-[#667687] mt-3">Meridian is a suite of decentralized financial services non-custodial, including stablecoin, lending and trading services all within one unified and user friendly application.</p>
                    <p className="text-[16px] text-[#667687] my-7">The MeridianDAO voted Meridian Ventures as the development company creating new integrations for Meridian and building business connections for its deployed products.</p>
                    <Link className='px-4 py-3 bg-[#475BF1] text-[#fff] text-[12px] font-bold rounded-xl' href={'/'}>LEARN MORE</Link>
                </div>
                
            </div>
        </div>
            
    );
};

export default ChosenBy;