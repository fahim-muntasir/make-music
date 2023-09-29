import React from 'react';
import bg from '../../assets/bg1.jpg'
import { PiMusicNoteDuotone } from "react-icons/pi";
const SharePage = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className='bg-no-repeat pb-[303px]'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-2xl font-semibold font-poppins mt-5'>Share song</h1>
                <div className='pb-4'>
                    <div className='mt-4'>
                        <div className='flex bg-[#8A97DA] h-24 items-center rounded-md justify-between'>
                            <div className='flex items-center'>
                                <div className='border-[5px] ml-8 h-20 border-white flex items-center p-3 rounded-3xl'>
                                    <PiMusicNoteDuotone size={50} className='text-[#d4d0d0]' />
                                </div>
                                <div className='ml-4'>
                                    <h3 className='text-white text-4xl font-bowlby'>First song</h3>
                                    <p className='text-white font-poppins text-sm'>Date</p>
                                </div>
                            </div>
                            <div className='mr-8'>
                                <button className='px-9 py-2 font-poppins text-white text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-3'>Preview</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 flex  justify-end'>
                        <button className='px-9 py-2 text-black text-xl font-poppins font-medium  hover:bg-[#8A97DA] hover:text-white rounded border-2 border-[#8A97DA] mx-3'>Shared</button>
                        <button className='px-4 py-2 text-black text-xl font-poppins font-medium hover:bg-[#8A97DA] hover:text-white rounded border-2 border-[#8A97DA] '>Not Shared</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SharePage;