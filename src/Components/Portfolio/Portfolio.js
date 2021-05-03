import React from 'react';
import { Container } from 'react-bootstrap';
import WorkCard from './WorkCard';
import imageStock from '../../images/projectss/image-stock-47213_opt.png'
import royalEvent from '../../images/projectss/Copy of royal-event-1_opt.png'
import sureWay from '../../images/projectss/sure-way_opt.png'
import league from '../../images/projectss/tender-swanson-377023_opt.png'

const Portfolio = () => {

    const style = {
        backgroundColor: "#dff3f5"
        // backgroundColor:"#293451"
    }

    const projectInfo = [
        {
            title: "Image Stock",
            technologyUsed: "React, MongoDB, Express.js, Node.js, Firebase, Heroku ",
            description: "This is an Image stock website, Where you can upload your Image. You can add and delete image to database. Firebase authentication, firebase-deploy, Heroku. There is an order page, where you can see your order list, but you have to checkout first.",
            live: "https://image-stock-47213.web.app/",
            code: "https://github.com/IftekharAlvee/image-stocks",
            url: imageStock
        }
        ,
        {
            title: "Royal Event",
            technologyUsed: "React, MongoDB, Express.js, Node.js, Firebase, Heroku ",
            description: "It's an Event management website. You can add and delete Service to database. Firebase authentication, firebase-deploy, Heroku. There is an order page, where you can see your order list, but you have to checkout first. Stripe payment method add",
            live: "https://royal-event-1.web.app/",
            code: "https://github.com/IftekharAlvee/royal-event",
            url: royalEvent
        }
        ,
        {
            title: "Sure Way",
            technologyUsed: " React, Firebase, Google Map API ",
            description: "It is a ride searching web application, You can choose a ride(Bike, Bus, Car, Train). Login with Email and Password. Login with Gmail. Firebase Authentication  and hosting. Google Map implimantation",
            live: "https://sure-way.web.app/",
            code: "https://github.com/IftekharAlvee/sure-way",
            url: sureWay
        }
        ,
        {
            title: "League's of England",
            technologyUsed: "HTML, CSS, Bootstrp, React, React-router",
            description: "This is an web-app build with react router. You can find all league's of England including Football, Cricket, Rugby. You can know their details like founding time, sports type. There is a little description about the league. A lot of update is comming soon. Now watch this site and enjoy.",
            live: "https://github.com/IftekharAlvee/league-of-england",
            code: "https://github.com/IftekharAlvee/league-of-england",
            url: league
        }
    ]

    return (
        <div class="allBg" style={style}>
            <Container>
                <div class="py-5 text-center">
                    <h1>My Works</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        projectInfo?.map(info=> <div className="col"> <WorkCard info={info}></WorkCard> </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Portfolio;