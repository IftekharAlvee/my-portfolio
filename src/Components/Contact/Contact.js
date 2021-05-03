import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from './ContactForm';

const Contact = () => {
    const style = {
        backgroundColor: "#dff3f5"
        // backgroundColor:"#293451"
    }
    return (
        <div style={style}>
            <Container>
                <ContactForm></ContactForm>
            </Container>
        </div>
    );
};

export default Contact;