import React from 'react';
import Header from './Header';
import Image1 from './Image1';
import ParticleHolder from './ParticleHolder';
import bgI from '../../images/circle-scatter-haikei.svg'
import './Landing.css'

const Landing = () => {
    const style = {
        backgroundColor: "#dff3f5"
        // backgroundColor:"#293451"
    }
    return (
        <div class="allBg" style={style} >
            <Header></Header>
            <Image1></Image1>
        </div>
    );
};

export default Landing;