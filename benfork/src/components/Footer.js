import "../styles/main.css";

function SocialImageLink({ imageUrl, linkUrl, altText }) {
    return (
      <a href={linkUrl}>
        <img src={imageUrl} alt={altText} />
      </a>
    );
  }


const Footer = () => {

  return (
    <div id="footer">
        <p>Made in collaboration between Club Robotics and Deacon Code</p>
        <div id="contact">
            <div id="email">
                <img src="/mail.svg"></img>
                <a href="mailto:wfurobotics@gmail.com" className="mailto">wfurobotics@gmail.com</a>
            </div>
            <div id="icons">
                <SocialImageLink 
                    imageUrl="/thelink.svg"
                    linkUrl="https://wfu.campuslabs.com/engage/organization/robotics"
                    altText="the link logo"
                />
                <SocialImageLink 
                    imageUrl="/groupme.svg"
                    linkUrl="https://groupme.com/join_group/66229966/E7jIX7MV"
                    altText="groupme logo"
                />
                <SocialImageLink 
                    imageUrl="/instagram.svg"
                    linkUrl="https://www.instagram.com/wfurobotics/?hl=en"
                    altText="instagram logo"
                />
                <SocialImageLink 
                    imageUrl="/twitter.svg"
                    linkUrl="https://x.com/WFURobotics"
                    altText="twitter logo"
                />
            </div>
            <p style={{ textAlign: 'right' }}>Copyright 2024</p>
        </div>
    </div>
    
    
  );
};

export default Footer;

