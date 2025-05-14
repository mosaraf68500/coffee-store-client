import React from 'react';
import image from "../assets/images/more/3.png";

const Hero = () => {
    return (
        <div>
            <div
                className="relative bg-cover bg-center h-screen flex items-center justify-end px-10"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className=" text-white max-w-lg">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className="mb-6 text-sm md:text-base text-gray-200">
                        It’s coffee time. Sip & Savor - Relaxation in every sip! Get the nostalgia back! Your companion of every moment! Enjoy the beautiful moment and make them memorable.
                    </p>
                    <button className="bg-amber-500 hover:bg-amber-600 text-black px-5 py-2 rounded shadow">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
