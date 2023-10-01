import React, { useState } from 'react';
import bg from '../../assets/bg1.jpg'
const Edit = () => {
    const [activeButton, setActiveButton] = useState('Guitar');
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    const [activeCube, setActiveCube] = useState('1');
    const handleCubeClick = (cubeNumber) => {
        setActiveCube(cubeNumber);
    };
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className='bg-no-repeat pb-20' >
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-2xl font-semibold mt-5 font-poppins ml-2 md:ml-0'>Edit song</h1>
                <div className='mt-4'>
                    <div className='flex bg-[#8A97DA] h-24 items-center rounded-md gap-2 md:gap-0 md:justify-between'>
                        <div className='flex items-center'>

                            <input type="text" className='md:ml-8 ml-1 md:py-5 py-2 md:px-80 rounded-md outline-none' />
                        </div>
                        <div className='md:mr-8'>
                            <button className='md:px-9 px-3 py-2 text-white font-poppins md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] md:mx-3'>Preview</button>
                            <button className='md:px-9 px-3 py-2 text-white font-poppins md:text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-2 md:mx-3'>Save</button>
                        </div>
                    </div>
                </div>

                <div className='my-8 flex'>
                    <div className='w-14'>
                        <h1 className='text-lg md:text-xl font-semibold font-poppins'>Type</h1>
                    </div>
                    <div className='grid grid-cols-4 w-full'>
                        <div
                            className={`md:px-9 py-2 text-lg font-poppins text-center cursor-pointer  border border-[#8A97DA] ${activeButton === 'Guitar' ? 'bg-[#8A97DA] text-white' : ''}`}
                            onClick={() => handleButtonClick('Guitar')} >  Guitar </div>
                        <div
                            className={`md:px-9 py-2 text-center cursor-pointer text-lg font-poppins border-l-0  border border-[#8A97DA] ${activeButton === 'Piano' ? 'bg-[#8A97DA] text-white' : ''}`}
                            onClick={() => handleButtonClick('Piano')} > Piano</div>
                        <div
                            className={`md:px-9 py-2 text-center cursor-pointer border-l-0 text-lg font-poppins  border border-[#8A97DA] ${activeButton === 'Violin' ? 'bg-[#8A97DA] text-white' : ''}`}
                            onClick={() => handleButtonClick('Violin')}>Violin</div>
                        <div
                            className={`md:px-9 py-2 text-center cursor-pointer text-lg font-poppins border-l-0  border border-[#8A97DA] ${activeButton === 'Drums' ? 'bg-[#8A97DA] text-white' : ''}`}
                            onClick={() => handleButtonClick('Drums')}>Drums</div>
                    </div>
                </div>
                <div className='mt-5 flex items-center'>
                    <div className='w-14'>
                        <h1 className='text-xl font-semibold text-end mr-4'>A</h1>
                    </div>
                    <div className='grid grid-cols-16 w-full'>
                        <div className={`h-14 border cursor-pointer border-[#8A97DA] ${activeCube === '1' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('1')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '2' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('2')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '3' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('3')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '4' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('4')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '5' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('5')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '6' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('6')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '7' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('7')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '8' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('8')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '9' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('9')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '10' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('10')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '11' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('11')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '12' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('12')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '13' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('13')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '14' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('14')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '15' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('15')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '16' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('16')}></div>
                    </div>
                </div>
                <div className='mt-5 flex items-center'>
                    <div className='w-14'>
                        <h1 className='text-xl font-semibold text-end mr-4'>B</h1>
                    </div>
                    <div className='grid grid-cols-16 w-full'>
                        <div className={`h-14 border cursor-pointer border-[#8A97DA] ${activeCube === '1' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('1')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '2' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('2')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '3' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('3')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '4' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('4')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '5' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('5')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '6' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('6')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '7' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('7')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '8' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('8')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '9' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('9')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '10' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('10')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '11' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('11')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '12' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('12')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '13' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('13')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '14' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('14')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '15' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('15')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '16' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('16')}></div>
                    </div>
                </div>
                <div className='mt-5 flex items-center'>
                    <div className='w-14'>
                        <h1 className='text-xl font-semibold text-end mr-4'>C</h1>
                    </div>
                    <div className='grid grid-cols-16 w-full'>
                        <div className={`h-14 border cursor-pointer border-[#8A97DA] ${activeCube === '1' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('1')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '2' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('2')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '3' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('3')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '4' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('4')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '5' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('5')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '6' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('6')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '7' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('7')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '8' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('8')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '9' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('9')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '10' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('10')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '11' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('11')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '12' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('12')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '13' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('13')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '14' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('14')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '15' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('15')}></div>
                        <div className={`h-14 border cursor-pointer border-l-0 border-[#8A97DA] ${activeCube === '16' ? 'bg-[#8A97DA] ' : ''}`} onClick={() => handleCubeClick('16')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;