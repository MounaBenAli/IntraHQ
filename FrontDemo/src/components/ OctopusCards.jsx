import React from 'react';
import './ OctopusCards.css'; // CSS file for positioning

// Import your images and logos
import mailLogo from "../assets/test/sogomailLogo.png";
import supportLogo from "../assets/test/zammadLogo.png";
import OpenProjectLogo from "../assets/test/openprojectLogo.png";
import OrangeHRMLogo from "../assets/test/OrangeHRMLogo.png";
import BigBlueButtonLogo from "../assets/test/BigBlueButton_logo.svg.png";

const OctopusCards = () => {
  // Define card content with URLs and positions
  const cardContent = [
    { title: 'Mail', imageUrl: mailLogo, url: 'https://mail.campusna.com/SOGo', position: { top: '20%', left: '10%' } },
    { title: 'Open Project', imageUrl: OpenProjectLogo, url: 'https://open-project.campusna.com/login?back_url=https%3A%2F%2Fopen-project.campusna.com%2F', position: { top: '20%', left: '80%' } },
    { title: 'OrangeHRM', imageUrl: OrangeHRMLogo, url: 'https://hr.campusna.com/web/index.php/auth/login', position: { top: '70%', left: '10%' } },
    { title: 'BigBlueButton', imageUrl: BigBlueButtonLogo, url: 'https://bigbluebutton.tekouin.com', position: { top: '70%', left: '80%' } },
    { title: 'Support', imageUrl: supportLogo, url: 'https://support.campusna.com/#dashboard', position: { top: '45%', left: '45%' } },
  ];

  return (
    <div className="octopus-container">
      {cardContent.map((card, index) => (
        <a
          key={index}
          href={card.url}  // The URL to navigate to
          target="_blank"  // Opens the link in a new tab
          rel="noopener noreferrer"  // Security feature to prevent the new page from accessing the window object
          className="card-link"  // CSS class for styling the link
          style={{
            position: 'absolute',  // Ensure positioning is absolute to use top and left
            top: card.position.top,
            left: card.position.left,
          }}
        >
          <div className="card">
            <img src={card.imageUrl} alt={card.title} className="card-logo" />
            <div className="card-content">
              <h5>{card.title}</h5>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default OctopusCards;
