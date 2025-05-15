import React, { Suspense } from 'react';
import Hero from './Hero';
import HomeCard from './HomeCard';
import Coffees from './Coffees';
const CoffeePromise=fetch('http://localhost:3000/addcoffee').then(res=>res.json())

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div>
                <HomeCard></HomeCard>
            </div>
            <div>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Coffees CoffeePromise={CoffeePromise}></Coffees>
                </Suspense>
            </div>
        </div>
    );
};

export default Home;