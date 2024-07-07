"use client"
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';


const AboutPage = () => {
    return (
        <div>
            <div className="relative">
                <Image className="w-full h-auto max-h-[700px] object-cover" src="/about.jpg" height={1500} width={1500} alt="services" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">About Us</h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 container mx-auto mt-20 lg:mt-40 lg:mb-80'>
                <div className=' lg:border-r-2 border-black p-5 md:p-10'>
                    <p className='text-6xl font-bold'>5+</p>
                    <h1 className='text-[22px] md:text-3xl font-semibold mt-6'>Years of Experience</h1>
                    <h1 className='mt-6'>We are a creative agency brands building insightful strategy, creating unique designs helping</h1>
                </div>
                <div className=' lg:border-r-2 border-black p-5 md:p-10'>
                    <p className='text-6xl font-bold'>100+</p>
                    <h1 className='text-[22px] md:text-3xl font-semibold mt-6'>Successful Projects</h1>
                    <h1 className='mt-6'>We are a creative agency brands building insightful strategy, creating unique designs helping</h1>
                </div>
                <div className=' lg:border-r-2 border-black p-5 md:p-10'>
                    <p className='text-6xl font-bold'>90+</p>
                    <h1 className='text-[22px] md:text-3xl font-semibold mt-6'>Satisfied Customers</h1>
                    <h1 className='mt-6'>We are a creative agency brands building insightful strategy, creating unique designs helping</h1>
                </div>
            </div>


            <div className='flex flex-col-reverse lg:flex-row h-fit lg:h-[800px] bg-[#E3FF04] mt-14 md:mt-20 lg:mt-44'>

                <div className='flex-1 p-10 lg:p-32 '>
                    <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold '>Experiences About Creating Quality Design</h1>

                    <h2 className='text-xl md:text-3xl mt-12 mb-4 font-semibold'>We Love What We Do</h2>
                    <p>We are a creative agency working with brands building insightful strategy, creating unique designs and crafting value</p>

                    <h2 className='text-xl md:text-3xl mt-12 mb-4 font-semibold'>Why Work With Us</h2>
                    <p>If you ask our clients what it’s like working with 36, they’ll talk about how much we care about their success. For us, real relationships fuel real success. We love building brands</p>
                </div>
                <div className='lg:-mt-16'>
                    <Image src="/about02.webp" className='w-full lg:w-[800px] h-full md:h-[600px] lg:h-[750px]' width={1000} height={1000} alt="banner" />
                </div>
            </div>
            <div className='container mx-auto px-6 mt-10  lg:mt-32'>
                <h1 className='text-2xl md:text-3xl font-bold mb-4'>Our Mission</h1>
                <p>Our mission is simple yet ambitious: to deliver exceptional digital solutions that drive growth and exceed expectations. Whether you're a startup looking to establish your online presence or an established business aiming to enhance your digital footprint, we are here to help you achieve your goals.</p>
                <h1 className='text-2xl md:text-3xl font-bold mb-4 mt-7'>What Sets Us Apart</h1>
                <ol className="list-disc ">
                    <li className='ml-4'><span className='font-bold'>Expertise: </span>Our team consists of seasoned professionals with expertise across multiple disciplines, ensuring that every project benefits from diverse insights and skills.</li>
                    <li className='ml-4'><span className='font-bold'>Custom Solutions: </span>We understand that every business is unique. That's why we tailor our solutions to fit your specific needs, delivering results that are both impactful and sustainable.</li>
                    <li className='ml-4'><span className='font-bold'>Client-Centric Approach: </span>Your success is our priority. We collaborate closely with our clients, listening to your ideas and objectives to craft solutions that align perfectly with your vision.</li>
                </ol>
                <h1 className='text-2xl md:text-3xl font-bold mb-4 mt-7'>Services We Offer</h1>
                <ol className="list-disc ">
                    <li className='ml-4'><span className='font-bold'>Web Development: </span>From dynamic websites to robust web applications, we leverage the latest technologies to build digital experiences that engage and convert.</li>
                    <li className='ml-4'><span className='font-bold'>Digital Marketing: </span>Enhance your online presence and reach your target audience effectively with our comprehensive digital marketing strategies, including SEO, PPC, social media marketing, and more.</li>
                    <li className='ml-4'><span className='font-bold'>Web Design: </span>Our creative team combines aesthetics with usability to design websites that captivate visitors and deliver seamless user experiences.</li>
                    <li className='ml-4'><span className='font-bold'>Graphics Design: </span>Stand out in a crowded marketplace with captivating visuals and branding materials that reflect your brand identity and resonate with your audience.</li>


                </ol>


                <h1 className='text-2xl md:text-3xl font-bold mb-4 mt-7'>Let's Collaborate</h1>
                <p>Whether launching a new project or refining your digital strategy, SparkFilter is your trusted partner. Contact us today to explore how our expertise in web development, digital marketing, web design, and graphics design can propel your business forward. We specialize in crafting tailored solutions that resonate with your audience and drive measurable results. Let us help you achieve your digital goals effectively and efficiently. Reach out now to start the journey towards enhancing your online presence and maximizing your business potential with SparkFilter.</p>

            </div>
            <div className='container md:mt-16 mt-8 lg:mt-32 mx-auto md:flex gap-10 lg:gap-40'>
                <div className='flex justify-center'>
                    <Image className='rounded-xl w-full md:w-60 lg:w-full' height={300} width={300} src="/author.jpg" alt="author" />
                </div>
                <div className='flex-1 mx-3 md:mx-0'>
                    <h1 className='text-[15px] mt-4  md:text-2xl lg:text-3xl underline font-semibold  md:ml-0 ml-[40%]'>Author</h1>
                    <h1 className='text-[18px] lg:mt-16 md:text-3xl lg:text-[42px] md:mt-4 font-bold mt-2 '>Anam E Rasul Chowdhuray</h1>
                    <h2 className='text-xs md:text-xl md:mt-4'>Senior Full Stack Developer &</h2>
                    <h2 className='text-xs md:text-xl'>SEO Engineer</h2>
                    <div className='flex mt-5  lg:mt-10 gap-10'>
                        <a href='#'><FaFacebook className='text-2xl md:text-4xl' /> </a>
                        <a href='#'><FaLinkedin className='text-2xl md:text-4xl' /></a>
                        <a href='#'><TbBrandFiverr className='text-2xl md:text-4xl' /></a>
                    </div>
                </div>
            </div>

            <div className='container mx-auto'>
                <h2 className='text-3xl text-center mt-9 md:mt-16 lg:mt-32 md:text-5xl lg:text-6xl  font-bold'>Our Team Behind <br /> The Work</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mt-10'>
                    <div className='p-10'>
                        <Image className='rounded-xl h-[360px] md:h-[400px] w-full' height={1000} width={250} src="/sayem.jpg" alt="author" />
                        <h1 className='text-xl font-semibold mt-4'>Sayem Hossin</h1>
                        <h2 className='text-xs'>Junior Web Developer</h2>
                    </div>

                    <div className='p-10'>
                        <Image className='rounded-xl h-[360px] md:h-[400px] w-full' height={1000} width={1000} src="/user.png" alt="author" />
                        <h1 className='text-xl font-semibold mt-4'>Anam E Rasul</h1>
                        <h2 className='text-xs'>Junior Web Developer</h2>
                    </div>
                    <div className='p-10'>
                        <Image className='rounded-xl h-[360px] md:h-[400px] w-full' height={1000} width={1000} src="/user.png" alt="author" />
                        <h1 className='text-xl font-semibold mt-4'>Anam E Rasul</h1>
                        <h2 className='text-xs'>Junior Web Developer</h2>
                    </div>
                    <div className='p-10'>
                        <Image className='rounded-xl h-[360px] md:h-[400px] w-full' height={1000} width={1000} src="/user.png" alt="author" />
                        <h1 className='text-xl font-semibold mt-4'>Anam E Rasul</h1>
                        <h2 className='text-xs'>Junior Web Developer</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;