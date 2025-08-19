"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type NavItem = {
  name: string;
  href: string;
};

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    return (
        <div className='grid py-2 grid-cols-2 items-center xl:grid-cols-3 gap-2 2xl:gap-5'>
            <div className="flex gap-3 items-center ">
                <Image className='w-[62px] xl:w-[86px]' src={'/img/logo.png'} height={300} width={300} alt='logo'/>
                <h4 className="text-[#DB352F] font-bold  md:text-[22px] lg:text-[24px] xl:text-[30px] xxl-[36px]">Meridian Ventures</h4>
            </div>
            <div className="mx-auto hidden md:block">
                {navItems?.map((item) => (
                    <Link
                    className={`px-3 items-center font-tight text-[12px]  font-bold text-[#10161B] py-2.5 h-max  ${
                        item.name === "HOME" && "bg-[#8FEF2F] text-black!"
                    } `}
                    key={item.name}
                    href={item.href}
                    >
                    {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;