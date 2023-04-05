import React from 'react'
import Info from '../components/Info'
import { InfoData3 } from '../data/InfoData'
import Fade from 'react-reveal/Fade';
const About = () => {
    return (
        <>
            <Fade top distance="10%" duration={1500}>
                <Info {...InfoData3} />
            </Fade>
        </>
    )
}

export default About

