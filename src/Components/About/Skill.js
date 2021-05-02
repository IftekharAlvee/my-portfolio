import React from 'react';
import { Container, Image } from 'react-bootstrap';
import img1 from '../../images/g_feature-web-development-3.svg'

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
                            <h1>Who Am I ?</h1>
                            <p>I am a self taught MERN Stack web developer. I have Skills in web technology  and I developed Full-Stack websites and applications using MongoDb, Express, React.js, Node.js with Firebase Authentication. I have a passion for building user friendly responsive websites and applications.  I actively seek out new technologies and stay up-to-date on industry trends and advancements.</p>
                        </div>
                        <div className="col  d-flex justify-content-center">
                            <div  style={{width:"300px"}}>
                                <Image src={img1} fluid></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            </div>
    );
        
        
};

export default Skill;