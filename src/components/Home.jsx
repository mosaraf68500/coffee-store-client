import React from 'react';
import Hero from './Hero';
import HomeCard from './HomeCard';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div>
                <HomeCard></HomeCard>
            </div>
        </div>
    );
};

export default Home;