import React, { use } from 'react';
import CoffeeCard from './CoffeeCard';
import { Link } from 'react-router';
import img from "../assets/images/icons/1.png"

const Coffees = ({CoffeePromise}) => {
    const coffeeData=use(CoffeePromise)
    
    return (
        <div className='my-10'>

            <div className='w-11/12 mx-auto flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-semibold text-gray-800 mb-3'>Our Popular Products</h1>
                <div className='flex btn py-3 gap-2 bg-[#E3B577] text-white'>
                    <Link className='text-lg font-semibold' to="/addcoffee">Add Coffee</Link>
                    <img className='w-[25px]' src={img} alt="" />
                </div>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-2 gap-4 justify-center items-center my-10'>
                {
                    coffeeData.map(coffee=><CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Coffees;