"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Review = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_LINK}/review`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className='md:mx-[4%] lg:mx-[10%] mt-9 md:mt-16'>
            <div>
                <h1 className='text-3xl text-center mt-9 mb-20 md:mt-16 lg:mt-32 md:text-5xl lg:text-6xl  font-bold'>What Our Client <br /> Say</h1>
            </div>
            <div>
                <div className='grid mx-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mt-10'>
                    {
                        reviews.slice(0,9).map(review => <div key={review._id}>
                            <Image className='border-2 h-44 md:h-64' src={review.image} width={900} height={1000} alt="review" />
                        </div>)
                    }
                </div>
            </div>
            <div className='md:text-end flex justify-end mt-5 md:mt-16 text-2xl'>
               <Link href="/reviews"> <button className=' flex text-lime-800 font-bold hover:underline  justify-center items-center'>View More <MdArrowOutward className='font-bold text-3xl' /></button></Link>
            </div>
        </div>
    );
};

export default Review;
