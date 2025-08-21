import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Collaborate = () => {
    return (
        <div className='my-12 container mx-auto flex'>
            <h3 className="text-[18px] font-bold text-[#050C12] mx-5">Collaborating <br />Closely With</h3>
            <Marquee pauseOnHover speed={90} className='flex items-center gap-[20px]'>
                <Image className='mx-0 w-[150px] ' src={'/img/bitcoin.png'} width={250} height={150} alt='coll'/>
                <Image className='mx-0 w-[150px] ' src={'/img/fuse.png'} width={250} height={150} alt='coll'/>
                <Image className='mx-0 w-[150px] ' src={'/img/master.png'} width={250} height={150} alt='coll'/>
                <Image className='mx-0 w-[150px] ' src={'/img/segment.png'} width={250} height={150} alt='coll'/>
                <Image className='mx-0 w-[150px] ' src={'/img/linear.png'} width={250} height={150} alt='coll'/>
                <Image className='mx-0 w-[150px] ' src={'/img/descript.png'} width={250} height={150} alt='coll'/>
                <Image className='mx-0 w-[150px] ' src={'/img/hubspot.png'} width={250} height={150} alt='coll'/>
                <Image className='mx-0 w-[150px] ' src={'/img/treehouse.png'} width={250} height={150} alt='coll'/>
                <Image className='mx-0 w-[150px] ' src={'/img/lattice.png'} width={250} height={150} alt='coll'/>
                <Image className='mx-0 w-[150px] ' src={'/img/bitrise.png'} width={250} height={150} alt='coll'/>
            </Marquee>
        </div>
    );
};

export default Collaborate;