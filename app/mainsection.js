import React from 'react';
import './home.scss';
import Image from 'next/image';
import aboutIllustration from "../public/home-about-illustration.webp";
import FAQ from './FAQ';
import Sponsors from "./Sponsors";
import backgroundVid from "../public/home.mp4"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import heroImage from "../public/heroImage.webp"

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

const judgingCriteria1 = [
  {
      heading:
          "Problem Definition (15%)",
      body: "Evaluate the relevance of the solution to the challenge presented. Assess the clarity and understanding of the initial problem and whether it addresses the needs of multiple stakeholders.",
  },
  {
      heading: "Creativity (15%)",
      body: "Consider the level of creativity demonstrated in approaching the challenge. Assess whether the solution is an innovative departure from existing solutions or an incremental improvement.",
  },
  {
    heading: "Practicality/Execution (15%)",
    body: "Examine the functionality of the project. Assess whether the solution works, is testable, and successfully implemented. Evaluate the user interface (UI) and user experience (UX), including design quality, user-friendliness, and identification of any bugs.",
},
];
const judgingCriteria2 = [
  {
      heading:
          "Design and Polish (15%)",
      body: "Further assess the UI and UX, design quality, user-friendliness, and identify any bugs. Consider how well the design contributes to the overall effectiveness and appeal of the project.",
  },
  {
      heading: "Blockchain/AI implementation (15%)",
      body: "If applicable, assess the quality of the blockchain implementation in Web3 solutions. Evaluate how well the team utilizes blockchain technology and its impact on the project's overall effectiveness.",
  },
  {
    heading: "Coding Proficiency (15%)",
    body: "Incorporate coding proficiency as a crucial aspect. Evaluate the coding practices, efficiency, and overall quality of the code. Consider how well the code contributes to the functionality and robustness of the project.",
},
{
  heading: "Presentation (10%)",
  body: "Evaluate the quality of the presentation. Assess how well the participants communicate their ideas, the persuasiveness of their pitch, and their confidence in presenting and answering questions.",
},
];

function MainSection() {
  return (
    <div>
    
    <div className="MainSection">
    <video className='videoTag' autoPlay loop muted id="myVideo">
    <source src={backgroundVid} type='video/mp4' />
    </video>
      <div className="landing">
      <h1>ORAHACKS CHICAGO</h1>
      <p>WEB3 and AI</p>
      {/* Replace 'button-link' with actual paths or functions */}
      <button className="join-btn" onClick={() => openInNewTab("https://linktr.ee/orahacks")}>JOIN US</button>
      <button className="explore-btn" onClick={() => openInNewTab("https://oravew.xyz/winter-is-coming-hackathon-2023-2/")}>LAST SEASON</button>
      {/* Dates or any other information */}
      <p className="dates"> March 22nd (Virtual kick off) & March 29th-31st (HACK)</p>
      </div>
      
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

    <section className="home__about padding">
                    <div className="boxed">
                        <h1 className="heading-primary">Ready to participate?</h1>
                        <div className="home__about__container">
                            <div className="home__about__description">
                                <div className="description-set">
                                    <h2 className="heading-secondary">
                                    Devs, Designers, Artists, Product Managers, Thinkers, and Builders
                                    </h2>
                                    <p className="body-regular">
                                    Anyone ready to level-up their hacking skills and turn their pitch ideas into tangible products. 
                                    We welcome all programmers, designers, artists, product people and hackers to join us for these events. 
                                    Whether this is is day 1 or day 1000 of your hacker journey, join us!
                                    </p>
                                </div>

                                
                            </div>
                            <div className="home__about__illustration">
                                <Image
                                    src={heroImage}
                                    alt=""
                                    className="home__about__illustration__img"
                                />
                            </div>
                            
                        </div>
                    </div>
    </section>


<section>
<h1 className="heading-primary">Judging Criteria</h1>
  <div className='judgingCriteria'>
  <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="cards" style={{ border: "1px solid #06f" }}>
            <Card.Body>
              <Card.Title><strong>{judgingCriteria1[idx].heading}</strong></Card.Title>
              <br></br>
              <Card.Text>
              {judgingCriteria1[idx].body}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

  </div>

<div className='judgingCriteria'>
<Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="cards" style={{ border: "1px solid #06f" }}>
            <Card.Body>
              <Card.Title><strong>{judgingCriteria2[idx].heading}</strong></Card.Title>
              <br></br>
              <Card.Text>
              {judgingCriteria2[idx].body}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
</div>
    

</section>
   

    <FAQ faqsData={faqs} />
    <Sponsors />
    </div>
    
  );
}

export default MainSection;
