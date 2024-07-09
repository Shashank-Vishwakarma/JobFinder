import React from 'react'
import HeroSection from './HeroSection';
import Categories from './Categories';
import Companies from './Companies';

function Home() {
    return (
        <section className='bg-stone-300 w-full h-screen p-2'>
            <HeroSection/>
            <Categories/>
            <Companies/>
        </section>
    );
}

export default Home;