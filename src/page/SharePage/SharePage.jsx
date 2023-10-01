import React from 'react';
import bg from '../../assets/bg1.jpg'
import { PiMusicNoteDuotone } from "react-icons/pi";
const SharePage = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className='bg-no-repeat pb-[303px]'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-2xl font-semibold font-poppins mt-5 ml-2 md:ml-0'>Share song</h1>
                <div className='pb-4'>
                    <div className='mt-4'>
                        <div className='flex bg-[#8A97DA] h-24 items-center rounded-md md:justify-between'>
                            <div className='flex items-center shrink-0'>
                                <div className='border-[5px] ml-1 md:ml-8 md:h-20 border-white flex items-center p-1  md:p-3 md:rounded-3xl rounded-2xl'>
                                    <PiMusicNoteDuotone className='text-[#d4d0d0] text-5xl md:text-5xl' />
                                </div>
                                <div className='ml-4'>
                                    <h3 className='text-white text-xl md:text-4xl font-bowlby'>First song</h3>
                                    <p className='text-white font-poppins text-sm'>Date</p>
                                </div>
                            </div>
                            <div className='md:mr-8 mx-auto'>
                                <button className='md:px-9 px-6 py-2 font-poppins text-white text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-3'>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 flex mr-2 justify-end'>
                        <button className='md:px-9 px-6 py-2 text-black text-lg md:text-xl font-poppins font-medium  hover:bg-[#8A97DA] hover:text-white rounded border-2 border-[#8A97DA] mx-3'>Shared</button>
                        <button className='md:px-4 px-2 py-2 text-black text-lg md:text-xl font-poppins font-medium hover:bg-[#8A97DA] hover:text-white rounded border-2 border-[#8A97DA] '>Not Shared</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SharePage;