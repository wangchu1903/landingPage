import React from 'react'
import Hero from '../components/Hero';
import Info from '../components/Info';
import { InfoData, InfoData2 } from '../data/InfoData';
import { SliderData } from '../data/SliderData';
import Fade from 'react-reveal/Fade';


const Home = () => {


    return (
        <>
            <Hero slides={SliderData} />
            <Fade top distance="10%" duration={1500}>
                <Info {...InfoData} />
            </Fade>

            <Fade right distance="10%" duration={1500}>
                <Info {...InfoData2} />
            </Fade>


        </>
    )
}

export default Home;
