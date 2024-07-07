import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#F6F5F3] mt-24'>
            <div className='lg:mx-40 p-10'>
                <div className='flex text-center lg:text-start lg:flex-row flex-col justify-center lg:justify-between'>
                    <div>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl  font-bold'>Let’s Work <br /> Together</h1>
                    </div>
                    <div>
                        <p className='md:w-[600px] mx-auto mt-4 md:text-xl'>We are digital agency that helps businesses develop immersive and engaging user experiences</p>
                        <Link href='/contact'> <button className='bg-black text-gray-100 hover:text-gray-300 mt-8 text-xl p-4'>Let’s Talk With Us</button></Link>
                    </div>
                </div>


                <div className='my-7 md:mt-20 lg:mt-32'>
                    <hr className='border-2 border-black mb-9' />

                    <div className='flex text-center lg:flex-row flex-col md:gap-3 items-center lg:justify-between'>
                        <div className='flex flex-col md:flex-row  md:gap-10 font-semibold'>
                            <Link href='/about' className='hover:text-gray-400'>ABOUT COMPANY</Link>
                            <Link href='/services' className='hover:text-gray-400'>SERVICES</Link>
                            <Link href='/contact' className='hover:text-gray-400'>CONTACT</Link>
                        </div>
                        <div className='flex flex-col md:flex-row  md:gap-10 font-semibold'>
                            <Link href='/privacy-policy' className='hover:text-gray-400'>PRIVACY POLICY</Link>
                            <Link href='/terms&condition' className='hover:text-gray-400'>TERMS & CONDITIONS</Link>
                        </div>
                    </div>

                    <hr className='border-2 border-black mt-9' />
                </div>

                <div className='flex text-center lg:flex-row flex-col gap-3 items-center lg:justify-between mt-12'>
                    <div className='flex gap-10'>
                        <a href='#'> <FaFacebook className='text-4xl'></FaFacebook></a>
                        <a href='#'> <FaInstagram className='text-4xl'></FaInstagram></a>
                    </div>
                    <div>
                        <h1>Copyright © 2024 SPARKFILTER</h1>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;