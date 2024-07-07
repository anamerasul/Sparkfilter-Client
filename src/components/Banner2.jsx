"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Banner2 = () => {
    return (
        <div className='lg:flex h-fit bg-[#E3FF04] mt-14 md:mt-20 lg:mt-44'>
            <div className='lg:-mt-16'>
                <Image src="/about01.webp" className='w-full h-full md:h-[600px]' width={800} height={100} alt="banner" />
            </div>
            <div className='flex-1 p-10 lg:p-32 space-y-4 md:space-y-10'>
                <h1 className='text-2xl md:text-6xl font-bold md:w-[600px]'>Unlock Revenue Growth for Your Business</h1>
                <p>If you ask our clients what it’s like working with 36, they’ll talk about how much we care about their success. For us, real relationships fuel real success. We love building brands</p>
                <p>We are a creative agency working with brands building insightful strategy, creating unique designs and crafting value</p>
                <Link href='/about'><button className='flex justify-center items-center mt-8 font-semibold hover:underline  text-black text-xl md:text-2xl'>About Us <MdArrowOutward className='font-bold text-3xl' /></button></Link>
            </div>
        </div>
    );
};

export default Banner2;