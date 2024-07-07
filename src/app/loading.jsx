import React from 'react';
import { TbFidgetSpinner } from "react-icons/tb";
const loading = () => {
    return (
        <div
            className='h-[70vh] flex flex-col  justify-center items-center '>
            <div class="flex items-center justify-center h-screen">
                <div class="relative">
                    <div class="h-24 w-24 border-black  rounded-full border-t-8 border-b-8 "></div>
                    <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-[#E3FF04] border-b-8 animate-spin">
                    </div>
                </div>
            </div>

        </div>
    );
};

export default loading;  