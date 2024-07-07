"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";

const Project = () => {
    const [projects, setProjects] = useState([])


    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_LINK}/project`)
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })
    }, [])

    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl text-center mt-9 md:mt-16 lg:mt-32 md:text-5xl lg:text-6xl  font-bold'>Discover Our <br /> Selected Projects</h2>


            <div className='grid lg:grid-cols-2 mt-4 md:mt-20 gap-16 p-6'>
            {
                projects.slice(0,4).map(project =><div key={project._id}>
                    <div>
                        <Image  className='border-2 lg:h-[450px] md:h-[300px]' src={project.image} alt='project' height={1500} width={1500} />
                    </div>
                    <div className='mt-5 md:space-y-4'>
                        <h1 className='text-xl md:text-4xl font-semibold'>{project.name}</h1>
                        <h2 className='text-xs md:text-xl'>{project.type}</h2>

                        <p className='text-gray-500 mt-2 md:text-[17px] text-[14px]'>{project.description}</p>
                    </div>

                </div>)
            }
            </div>

            <div className='md:text-end flex justify-end mt-5 md:mt-16 text-2xl'>
               <Link href="/projects"> <button className=' flex text-lime-800 font-bold hover:underline  justify-center items-center'>View More <MdArrowOutward className='font-bold text-3xl' /></button></Link>
            </div>

        </div>
    );
};

export default Project;