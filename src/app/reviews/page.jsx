"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ReviewPage = () => {
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
             <h1 className='text-2xl md:text-5xl mb-10 md:mb-20 text-center font-semibold'>Our Clients Feedback</h1>
            </div>
            <div className="divider"></div>
            <div className='grid mx-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mt-10'>
           {
                reviews.map(review =>  <div key={review._id}>
                    <Image className='border-2 h-44 md:h-64' src={review.image} width={900} height={1000} alt="review" />
                </div>)
            }
           </div>
        </div>
    );
};

export default ReviewPage;