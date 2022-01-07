import '../App.css';
import { Row, Col, Container } from "react-grid-system";

function About() {
  return (
      <div className="about">
        <div className="about-section1">
          <Row>
            <Col md={6} xs={0}>
            </Col>
            <Col md={6} xs={{span:12, order: 1}}>
              <h1>About</h1>
              <h2>Centered around Designers</h2>
              <p>
                Stride unites aspiring designers with companies seeking designers. 
                Students will have the chance to share their work and experience 
                with design-minded company representatives. Although having a 
                portfolio isn't a requirement, we strongly encourage students 
                interested in attending to create one to demonstrate your design 
                skills put into practice.
              </p>
              <h2>An Environment that Promotes Conversation</h2>
              <p>
                At Stride, we find that the scaled down setting allows for employers 
                and students to engage in longer, more fruitful conversations. 
                Instead of just handing off a resume, it's common and highly 
                encouraged for 5-10 minute mini portfolio reviews to take place.
              </p>
            </Col>
            <Col md={0} xs={12}>
            </Col>
          </Row>
        </div>
        <div className="about-section2">
          <h2>Frequently Asked Questions</h2>
          <div className="qa">
            <p><b>Q: When is Stride?</b></p>
            <p>
              <b>A:</b> Stride takes place on Tuesday, January 14th, 2020 from 11AM to 4PM.
            </p>
          </div>
          <div className="qa">
            <p><b>Q: What time can I arrive</b></p>
            <p>
              <b>A:</b> Doors open at 11AM sharp. There may be some average lines, so 
              we recommend arriving a little earlier. Note that doors close at 3:45PM.
            </p>
          </div>
          <div className="qa">
            <p><b>Q: Who can attend Stride?</b></p>
            <p>
              <b>A:</b> Any UCSD students or alum with a valid UCSD student ID.
            </p>
          </div>
          <div className="qa">
            <p><b>Q: How should I dress for Stride?</b></p>
            <p>
              <b>A:</b> While there is no dress code for Stride, we do recommend making 
              sure you look “presentable”. Your interpretation of "presentable" 
              is up to you--some people dress in business attire, while others 
              dress as they normally do. Maybe skip the shirt with a stain?
            </p>
          </div>
          <div className="qa">
            <p><b>Q: How can I prepare for Stride?</b></p>
            <p>
              <b>A:</b> There are lots of ways to prepare for Stride! From preparing a 
              portfolio to revamping your resume, we've put together a slide 
              deck for you with advice on how to ready yourself for Stride.&nbsp; 
              <a href="https://docs.google.com/presentation/d/159kEktP6bRSRWa0fG8Jxyl-CeiORcMJOUuwuvou8oZY/edit?usp=sharing">
                Click here to check it out!
              </a>
            </p>
          </div>
          <div className="qa">
            <p><b>Q: Do I need a portfolio?</b></p>
            <p>
              <b>A:</b> While a portfolio is not required, we HIGHLY recommend having a 
              portfolio and being able to talk about some of your past projects.
            </p>
          </div>
        </div>
        <div className="about-section3">
          <Row>
            <Col md={4} xs={12}>
                <h2>Arrive between<br />11AM - 3:45PM</h2>
            </Col>
            <Col md={4} xs={12}>
              <h2>Review portfolio with a recruiter</h2>
            </Col>
            <Col md={4} xs={12}>
              <h2>Network with companies</h2>
            </Col>
          </Row>
        </div>
      </div>
    
  );
}

export default About;
