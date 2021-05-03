import React from 'react';
import { Button, Container } from 'react-bootstrap';
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
            <div class=" d-flex justify-content-center  py-5">
                <Button variant="outline-info"  href="https://github.com/IftekharAlvee" target="_blank">View more on github <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg> </Button>
            </div>
        </div>
    );
};

export default Portfolio;