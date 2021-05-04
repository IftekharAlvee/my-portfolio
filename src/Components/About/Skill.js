import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import img1 from '../../images/g_feature-web-development-3.svg'
import Typical from 'react-typical'
import Skillbar from './Skillbar'

const Skill = () => {

    const style = {
        backgroundColor: "#dff3f5"
        // backgroundColor:"black"
    }

    return (
        <div style={style}>
            <Container>
                <div class="text-center">
                    <div className="row py-5">
                        <div className="col">
                        <Typical
                                steps={['Who am I?', 1000,
                                'What I am working on?', 1000
                                ]}
                                loop={Infinity}
                                wrapper="h1"
                            /> 
                            <p>I am a self-taught MERN Stack web developer. I have Skills in web technology and I developed Full-Stack websites and applications using MongoDB, Express, React.js, Node.js with Firebase Authentication. I have a passion for building user-friendly responsive websites and applications. I actively seek out new technologies and stay up-to-date on industry trends and advancements.</p>
                            <Button size="lg" target="_blank" href="https://drive.google.com/file/d/1T57VP5JoKQbOOFlArjagjvfMSQtkFX_e/view?usp=sharing" variant="outline-info">Resume Download</Button>
                        </div>
                        <div className="col  d-flex justify-content-center">
                            <div  style={{width:"300px"}}>
                                <Image src={img1} fluid></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Skillbar></Skillbar>
            </div>
    );
        
        
};

export default Skill;