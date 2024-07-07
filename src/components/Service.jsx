"use client"
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Service = () => {
    return (
        <div className='md:mt-24 mt-10 text-center'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl  font-bold'>What We Can Do <br /> for Our Clients</h1>

            <div className='md:mx-[4%] lg:mx-[20%] mt-9 md:mt-16'>
                <div className="collapse collapse-plus border-t-2 border-l-2 border-r-2 border-gray-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl md:text-2xl lg:text-3xl font-semibold">Web Development</div>
                    <div className="collapse-content md:w-1/2 text-xs md:text-[17px] mx-auto">
                        <p>We develop high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                    </div>
                </div>

                <div className="collapse collapse-plus border-2 border-gray-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl md:text-2xl lg:text-3xl font-semibold">Web Design</div>
                    <div className="collapse-content md:w-1/2 text-xs md:text-[17px] mx-auto">
                        <p>We develop high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                    </div>
                </div>

                <div className="collapse collapse-plus border-2 border-gray-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl md:text-2xl lg:text-3xl font-semibold">Digital Marketing</div>
                    <div className="collapse-content md:w-1/2 text-xs md:text-[17px] mx-auto">
                        <p>Empower your brand with our innovative digital marketing solutions. From SEO to social media management, we elevate your online presence with strategic expertise and measurable results</p>
                    </div>
                </div>

                <div className="collapse collapse-plus border-2 border-gray-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl md:text-2xl lg:text-3xl font-semibold">Graphics Design</div>
                    <div className="collapse-content md:w-1/2 text-xs md:text-[17px] mx-auto">
                        <p>Transform your brand visuals with our bespoke graphic design solutions. From captivating logos to stunning visual identities, we craft designs that resonate and elevate your brand image.</p>
                    </div>
                </div>

                <div className='md:text-end flex justify-end mt-9 text-2xl'>
               <Link href="/services"> <button className=' flex text-lime-800 font-bold hover:underline  justify-center items-center'>View All<MdArrowOutward className='font-bold text-3xl' /></button></Link>
                </div>
            </div>

        </div>
    );
};

export default Service;