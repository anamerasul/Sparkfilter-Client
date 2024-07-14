import Image from 'next/image';
import React from 'react';
import { FaCodepen } from 'react-icons/fa';
import { MdDeveloperMode } from "react-icons/md";
import { SiTaichigraphics, SiWebcomponentsdotorg } from "react-icons/si";

const ServicesPage = () => {
    return (
        <div>
            <div className="relative">
                <Image className="w-full h-auto max-h-[700px] object-cover" src="/servicesbanner.jpg" height={1500} width={1500} alt="services"/>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">Services</h1>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-3 lg:mx-40 mt-24'>
                <div className='bg-gray-100 p-5 md:p-10'>
                    <p><MdDeveloperMode className='md:text-5xl text-4xl md:mb-8 mb-3 lg:mb-10' /></p>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Web Development</h1>
                    <ol class="ml-10 mt-5 list-disc md:text-2xl ">
                        <li className='ml-4'>Front-End Development</li>
                        <li className='ml-4'>Back-End Development</li>
                        <li className='ml-4'>Full Stack Development</li>

                    </ol>
                </div>
                <div className='bg-gray-100 p-5 md:p-10'>
                    <p><FaCodepen className='md:text-5xl text-4xl md:mb-8 mb-3 lg:mb-10' /></p>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Digital Marketing</h1>
                    <ol class="ml-10 mt-5 list-disc md:text-2xl ">
                        <li className='ml-4'>On-page SEO</li>
                        <li className='ml-4'>Social Media Advertising</li>
                        <li className='ml-4'>Content Strategy and Planning</li>

                    </ol>
                </div>
                <div className='bg-gray-100 p-5 md:p-10'>
                    <p><SiTaichigraphics className='md:text-5xl text-4xl md:mb-8 mb-3 lg:mb-10'/></p>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Graphics Design</h1>
                    <ol class="ml-10 mt-5 list-disc md:text-2xl ">
                        <li className='ml-4'>Custom logo creation</li>
                        <li className='ml-4'>Posters and banners</li>
                        <li className='ml-4'>Corporate stationery (business cards, letterheads)</li>

                    </ol>
                </div>
                <div className='bg-gray-100 p-5 md:p-10'>
                    <p><SiWebcomponentsdotorg className='md:text-5xl text-4xl md:mb-8 mb-3 lg:mb-10'/></p>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Web Design</h1>
                    <ol class="ml-10 mt-5 list-disc md:text-2xl ">
                        <li className='ml-4'>Custom Website Design</li>
                        <li className='ml-4'>UI/UX Design</li>
                        <li className='ml-4'>Responsive Web Design</li>

                    </ol>
                </div>




            </div>


            <div className='lg:flex h-fit bg-[#E3FF04] mt-14 md:mt-20 lg:mt-44'>
                <div className='lg:-mt-16'>
                    <Image src="/help.jpg" className='w-full lg:w-[800px] h-[400px] md:h-[800px]' width={1000} height={1000} alt="banner" />
                </div>
                <div className='flex-1 p-10 lg:p-10 space-y-4 md:space-y-10'>
                    <h1 className='text-2xl md:text-6xl font-bold '>Have Any Project on Your Mind?</h1>
                    <p>Great! We are excited to hear from you and Let's  start something</p>
                    <form>
                        <div className='md:flex gap-10 justify-between'>
                            <input className='border-b-2 w-full md:text-xl p-2 text-black bg-[#E3FF04] border-black focus:outline-none placeholder-black' placeholder='Your Name*' type="text" />
                            <input className='border-b-2 w-full md:text-xl p-2 text-black bg-[#E3FF04] border-black focus:outline-none placeholder-black' placeholder='Email address*' type="email" />
                        </div>
                        <input className='border-b-2 mt-4 md:mt-10 w-full md:text-xl p-2 text-black bg-[#E3FF04] border-black focus:outline-none placeholder-black' placeholder='Service Name/Website Link' type="text" />
                        <textarea className='border-b-2 mt-4 md:mt-10 h-40 w-full md:text-xl p-2 text-black bg-[#E3FF04] border-black focus:outline-none placeholder-black' placeholder='How Can We Help You*' type="text" />
                       <div className='text-end mt-9'>
                       <button className='p-4 hover:bg-gray-800 px-6 bg-black text-xl text-white ' type='submit'>Submit</button>
                       </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default ServicesPage;
