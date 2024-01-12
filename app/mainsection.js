import React from 'react';
import './home.scss';
import Image from 'next/image';
import aboutIllustration from "../public/home-about-illustration.webp";
import FAQ from './FAQ';
import Sponsors from "./Sponsors";
// import './MainSection.css'; // CSS file for MainSection styling

const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const faqs = [
    {
        heading:
            "Can I register with multiple teams or submit multiple projects?",
        body: "Yes! You can be a team member of multiple teams or submit multiple projects. However, we encourage participants to focus on a single project in order to achieve the best results.",
    },
    {
        heading: "I'm facing a technical issue and need assistance. Where can I get help?",
        body: "If you're facing technical challenges during the hackathon, don’t worry! We have a dedicated support system in place to ensure you get the help you need. Experienced developers will be available onsite throughout the event, ready to provide hands-on assistance and guidance. Additionally, we've scheduled a mentorship session on the afternoon of March 30th. Our mentors, seasoned professionals in the field, will be present to offer valuable advice and insights. Whether it's troubleshooting a specific problem or seeking guidance on your overall project, our support network is here to ensure you have a smooth and rewarding hackathon experience.",
    },
    {
      heading: "How can I contact the organizer?",
      body: "You may email us at orahackschicago@gmail.com. We will try our best to respond in 24 hours.",
  },
  {
    heading: "What if I don’t have a team, can I still join?",
    body: "Yes, the first day kick-off event is designed for people who might not have a pre-formed team. This is the perfect opportunity to connect with other participants, form teams and tackle problems collaboratively.",
},
];

function MainSection() {
  return (
    <div>
    <div className="MainSection">
      <h1>ORAHACKS CHICAGO</h1>
      <p>WEB3 and AI</p>
      {/* Replace 'button-link' with actual paths or functions */}
      <button className="join-btn" onClick={() => openInNewTab("https://form.typeform.com/to/ZnWxoOlH")}>JOIN US</button>
      <button className="explore-btn" onClick={() => openInNewTab("https://oravew.xyz/winter-is-coming-hackathon-2023-2/")}>LAST SEASON</button>
      {/* Dates or any other information */}
      <p className="dates">03.29.2023 - 03.31.2023</p>
      </div>
      <section className="home__about padding">
                    <div className="boxed">
                        <h1 className="heading-primary">What is OraHacks?</h1>
                        <div className="home__about__container">
                        <div className="home__about__illustration">
                                <Image
                                    src={aboutIllustration}
                                    alt=""
                                    className="home__about__illustration__img"
                                />
                            </div>
                            <div className="home__about__description">
                                <div className="description-set">
                                    <h2 className="heading-secondary">
                                    Hybrid Hackathon
                                    </h2>
                                    <p className="body-regular">
                                    We are inviting builders to unleash their creativity and problem-solving in Web3 & AI. 
                                    This is an opportunity for hands-on engagement in the complete product development process. 
                                    From ideation to creation, your pitch ideas will become realities. 
                                    You will receive invaluable mentorship, constructive feedback, and the prospect of potential funding for your products. 
                                    This is not just a hackathon - it is a platform for change and progress. 
                                    Let&apos;s build!
                                    </p>
                                </div>
                                <div className="description-set">
                                    <h2 className="heading-secondary">
                                    Join Us To
                                    </h2>
                                    <p className="body-regular2">
                                    <strong>Innovate:</strong> Turn your ideas into reality and create solutions for pressing issues <br></br>
                                    <strong>Learn:</strong> Enhance your skills through hand-on experience and expert guidance<br></br>
                                    <strong>Have Fun:</strong> Enjoy a thrilling builder experience<br></br>
                                    <strong>Network:</strong> Build connections with like minded talents who share passion for AI & Web3 to shape the future of the technology
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
    </section>

    <FAQ faqsData={faqs} />
    <Sponsors />
    </div>
    
  );
}

export default MainSection;
