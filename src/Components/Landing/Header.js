import React from 'react';
import { Container } from 'react-bootstrap';
import Typical from 'react-typical'


    // const nameStyle = {
    //     width: "300px",
    // }
const Header = () => {
    return (
        <div>
            <Container>
                <div class="text-center d-flex justify-content-center align-items-center" style={{height:"50vh"}}>
                    <div >
                        {/* <div class=" justify-content-center align-items-center" >
                            <div>
                            <Hello></Hello>
                            </div>
                        </div> */}
                            <div class="my-5">
                            <h1>Myself Iftekhar Alvee</h1>
                            <p>
                                I am  {" "} <Typical
                                steps={['Javascript Lover', 1000,
                                'MERN Stack Web Developer', 1000,
                                'Quick learner',1000
                                ]}
                                loop={Infinity}
                                wrapper="b"
                            /> 
                            </p>
                            </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;