import React from 'react';
import image from "../assets/images/more/logo1.png"

const Header = () => {
    return (
        <div className='bg-[#372727] text-white'>
            <div className='flex justify-center items-center p-3'>
                <img className='mr-2 w-[35px] h-[35px]' src={image} alt="" />
                <h1 className='text-lg font-bold text-gray-400'>Bangladeshi Coffee</h1>
            </div>
        </div>
    );
};

export default Header;