import React from 'react';

const Wave = () => {
    const style = {
        backgroundColor: "#dff3f5"
        // backgroundColor:"black"
    }
    return (
        <div style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4FACF7" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,122.7C384,96,480,64,576,69.3C672,75,768,117,864,149.3C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    );
};

export default Wave;