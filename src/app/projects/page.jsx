"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ProjectPage = () => {
    const [projects, setProjects] = useState([])


    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_LINK}/project`)
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })
    }, [])

    return (
        <div>
            <h1 className='text-2xl md:text-4xl lg:text-5xl mb-10 md:mb-20 text-center font-semibold'>Hare Is Our Projects</h1>
            <div className="divider"></div>
             <div className='grid  lg:grid-cols-2 mt-4 gap-8 md:mt-10 md:gap-16 md:mx-10 p-6'>
            {
                projects.map(project =><div key={project._id}>
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
        </div>
    );
};

export default ProjectPage;