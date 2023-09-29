import React from 'react';
import bg from '../../assets/bg1.jpg'
import { PiMusicNoteDuotone } from "react-icons/pi";
const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className='bg-no-repeat'>
            <div className='max-w-7xl mx-auto pt-5 '>
                <button className="border border-[#8A97DA] w-full flex justify-center items-center py-3  rounded-md">
                    <p className="text-2xl text-[#8A97DA] font-poppins">Create +</p>
                </button>
                <div className='mt-5 '>
                    <h1 className='text-2xl font-semibold'>All songs</h1>
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
                                <button className='px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Share</button>
                                <button className='px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-3'>Preview</button>
                                <button className='px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Edit</button>
                            </div>
                        </div>
                    </div>

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
                                <button className='px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Share</button>
                                <button className='px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-3'>Preview</button>
                                <button className='px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Edit</button>
                            </div>
                        </div>
                    </div>
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
                                <button className='px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Share</button>
                                <button className='px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-3'>Preview</button>
                                <button className='px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <button className="border text-2xl font-poppins text-[#8A97DA] border-[#8A97DA] w-full flex justify-center items-center py-3 mt-5 rounded-md">
                        Create +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;