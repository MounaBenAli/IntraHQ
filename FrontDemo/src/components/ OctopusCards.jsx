import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ OctopusCards.css'; 
import mailLogo from "../assets/finalLogo/sogo-logo.png";
import supportLogo from "../assets/finalLogo/zammad-logo.png";
import OpenProjectLogo from "../assets/finalLogo/openproject-logo.png";
import OrangeHRMLogo from "../assets/finalLogo/orangehrm-logo.png";
import BigBlueButtonLogo from "../assets/test/BigBlueButton_logo.svg.png";
import ElementLogo from "../assets/finalLogo/ElementLogo.jpg";
import HolbertonLogo from "../assets/finalLogo/HolbertonLogo.png";

const OctopusCards = () => {
  const cardContent = [
    { imageUrl: HolbertonLogo, url: 'https://intranet.hbtn.io/auth/sign_in' },
    { imageUrl: mailLogo, url: 'https://mail.campusna.com/SOGo' },
    { imageUrl: OpenProjectLogo, url: 'https://open-project.campusna.com/login?back_url=https%3A%2F%2Fopen-project.campusna.com%2F' },
    { imageUrl: OrangeHRMLogo, url: 'https://hr.campusna.com/web/index.php/auth/login' },
    { imageUrl: BigBlueButtonLogo, url: 'https://bigbluebutton.tekouin.com' },
    { imageUrl: supportLogo, url: 'https://support.campusna.com/#dashboard' },
    { imageUrl: ElementLogo, url: 'https://app.element.io/#/room/#campusna-Public:campusna' },
  ];

  return (
    <Container fluid className="p-0">
      <Row className="d-flex flex-column">
        {cardContent.map((card, index) => (
          <Col 
            key={index} 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            className={`d-flex ${index % 2 === 0 ? 'justify-content-end' : 'justify-content-end'} mb-4`}
          >
            <a href={card.url} target="_blank" rel="noopener noreferrer" className="card-link">
              <div className="card">
                <img src={card.imageUrl} alt="" className="card-logo" />
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OctopusCards;
