import React from 'react';
import bg from '../../assets/bg1.jpg'
import { PiMusicNoteDuotone } from "react-icons/pi";
const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className='bg-no-repeat pb-16 md:pb-0'>
            <div className='max-w-7xl mx-auto pt-5 '>
            <button className="border text-xl md:text-2xl font-poppins text-[#8A97DA] border-[#8A97DA] w-11/12 mx-auto md:w-full flex justify-center items-center py-3 rounded-md">
                        Create +
                    </button>
                <div className='mt-5 '>
                    <h1 className='text-2xl font-semibold ml-2 md:ml-0'>All songs</h1>
                    <div className='mt-4'>
                        <div className='flex bg-[#8A97DA] h-20 md:h-24 items-center rounded-md md:justify-between gap-1'>
                            <div className='flex items-center shrink-0'>
                                <div className='border-[5px] ml-1 md:ml-8 md:h-20 border-white flex items-center p-1  md:p-3 md:rounded-3xl rounded-2xl'>
                                    <PiMusicNoteDuotone className='text-[#d4d0d0] text-4xl md:text-5xl' />
                                </div>
                                <div className='md:ml-4 ml-2'>
                                    <h3 className='text-white text-lg md:text-4xl font-bowlby '>First song</h3>
                                    <p className='text-white font-poppins text-sm'>Date</p>
                                </div>
                            </div>
                            <div className='md:mr-8 '>
                                <button className='md:px-9 md:py-2 px-2 py-1 text-white font-poppins text-sm md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Share</button>
                                <button className='md:px-9 md:py-2 px-2 py-1 text-white font-poppins text-sm md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] md:mx-3 mx-1'>Preview</button>
                                <button className='md:px-9 md:py-2 px-2 py-1 text-white font-poppins text-sm md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Edit</button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <div className='flex bg-[#8A97DA] h-20 md:h-24 items-center rounded-md md:justify-between gap-1'>
                            <div className='flex items-center shrink-0'>
                                <div className='border-[5px] ml-1 md:ml-8 md:h-20 border-white flex items-center p-1  md:p-3 md:rounded-3xl rounded-2xl'>
                                    <PiMusicNoteDuotone className='text-[#d4d0d0] text-4xl md:text-5xl' />
                                </div>
                                <div className='md:ml-4 ml-2'>
                                    <h3 className='text-white text-lg md:text-4xl font-bowlby '>First song</h3>
                                    <p className='text-white font-poppins text-sm'>Date</p>
                                </div>
                            </div>
                            <div className='md:mr-8 '>
                                <button className='md:px-9 md:py-2 px-2 py-1 text-white font-poppins text-sm md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Share</button>
                                <button className='md:px-9 md:py-2 px-2 py-1 text-white font-poppins text-sm md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] md:mx-3 mx-1'>Preview</button>
                                <button className='md:px-9 md:py-2 px-2 py-1 text-white font-poppins text-sm md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='flex bg-[#8A97DA] h-20 md:h-24 items-center rounded-md md:justify-between gap-1'>
                            <div className='flex items-center shrink-0'>
                                <div className='border-[5px] ml-1 md:ml-8 md:h-20 border-white flex items-center p-1  md:p-3 md:rounded-3xl rounded-2xl'>
                                    <PiMusicNoteDuotone className='text-[#d4d0d0] text-4xl md:text-5xl' />
                                </div>
                                <div className='md:ml-4 ml-2'>
                                    <h3 className='text-white text-lg md:text-4xl font-bowlby '>First song</h3>
                                    <p className='text-white font-poppins text-sm'>Date</p>
                                </div>
                            </div>
                            <div className='md:mr-8 '>
                                <button className='md:px-9 md:py-2 px-2 py-1 text-white font-poppins text-sm md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Share</button>
                                <button className='md:px-9 md:py-2 px-2 py-1 text-white font-poppins text-sm md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] md:mx-3 mx-1'>Preview</button>
                                <button className='md:px-9 md:py-2 px-2 py-1 text-white font-poppins text-sm md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <button className="border text-xl md:text-2xl font-poppins text-[#8A97DA] border-[#8A97DA] w-11/12 mx-auto md:w-full flex justify-center items-center py-3 mt-5 rounded-md">
                        Create +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;