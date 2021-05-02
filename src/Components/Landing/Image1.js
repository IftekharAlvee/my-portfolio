import React from 'react';
import { Container, Image } from 'react-bootstrap';
import image1 from '../../images/kisspng-web-development-php-software-development-software-developer-5ac513f4cc7311.0565253715228651408374.png'
const Image1 = () => {
    return (
        <Container className="pb-5 justify-content-center">
            <Image fluid src={image1}></Image>
        </Container>
    );
};

export default Image1;