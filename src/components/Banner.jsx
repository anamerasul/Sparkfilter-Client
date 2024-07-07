"use client"
import React from 'react';

const Banner = () => {
    return (
        <div className='md:mt-9 lg:mt-32 ml-3 mr-3 mt-6'>
           <div className='md:text-center'>
           <h1 className='text-3xl md:text-6xl lg:text-8xl text-black font-bold  '>Next Generation</h1>
           <h1 className='text-3xl md:text-6xl lg:text-8xl text-black font-bold lg:ml-96 mt-2 md:mt-7'>Digital Agency</h1>
           </div>
           <p className='text-xs md:text-[16px] lg:text-xl lg:w-[800px]  md:ml-[40%] mt-2 md:mt-8'>We are digital agency that helps businesses develop immersive and  engaging user experiences that drive top level growth</p>
        </div>
    );
};

export default Banner;