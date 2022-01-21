import '../App.css';
import { Row, Col } from "react-grid-system";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BigPhoto from "../assets/images/about/about.png";
import SmallPhoto1 from "../assets/images/about/about1.png";
import SmallPhoto2 from "../assets/images/about/about2.png";
import SmallPhoto3 from "../assets/images/about/about3.png";

function About() {
  return (
    <>
      <Navbar/>
        <div className="about">
          <div className="about-section1">
            <Row>
              <Col md={6} xs={0}>
                <img src={BigPhoto} className="big-photo" />
              </Col>
              <Col md={6} xs={12}>
                <h2 className="about-header">
                  Stride 2022 will be held virtually over Zoom to ensure the safety of our 
                  community and guests.
                </h2>
                <h2>Uplifting Student Designers</h2>
                <p>
                  Stride is a uniquely design-forward career fair aiming to connect 
                  aspiring designers with company representatives. Students are encouraged 
                  to showcase their work and experience, so while having a portfolio isn’t 
                  a requirement, we suggest that attendees create one to demonstrate your 
                  design skills put into practice.
                </p>
                <h2>Encouraging Conversation</h2>
                <p>
                  At Stride, we want to facilitate memorable conversations—rather than 
                  handing off a resume, Stride is oriented around 5-10 minute mini portfolio 
                  reviews. Especially in a virtual setting, the goal of Stride is to promote 
                  meaningful engagement for both students and employers.
                </p>
              </Col>
              <Col md={0} xs={12}>
                <img src={BigPhoto} className="big-photo-mobile" />
              </Col>
            </Row>
          </div>
          <div className="about-section2">
            <h2>Frequently Asked Questions</h2>
            <div className="qa">
              <p><b>Q: When is Stride?</b></p>
              <p>
                <b>A:</b> Stride takes place on Saturday, February 5th, 2022. It will be 
                from 9am-2pm with a break from 11am-12pm. <b>This year, Stride will be a completely 
                virtual event held over Zoom.</b>
              </p>
            </div>
            <div className="qa">
              <p><b>Q: What will Stride look like on Zoom?</b></p>
              <p>
                <b>A:</b> Students will be sorted into breakout rooms with a recruiter. 
                For the most up-to-date information, check our social media @ucsddesignco
              </p>
            </div>
            <div className="qa">
              <p><b>Q: Who can attend Stride?</b></p>
              <p>
                <b>A:</b> All UCSD students and alumni are welcome! There is a limited 
                number of recruiters and time with each one (~15 min), so students will 
                be assigned to breakout rooms on a first come first serve basis. Be sure 
                to sign up and secure your spot through our&nbsp;
                <a href="" target="_blank">registration form</a> 
                &nbsp;by Tuesday, 2/1.
              </p>
            </div>
            <div className="qa">
              <p><b>Q: How should I dress for Stride?</b></p>
              <p>
                <b>A:</b> While there is no dress code for Stride, we do recommend making 
                sure you look “presentable” (at least in your Zoom window!). What "presentable" 
                looks like is up to you—some people dress in business attire, while others dress 
                as they normally do.
              </p>
            </div>
            <div className="qa">
              <p><b>Q: How can I prepare for Stride?</b></p>
              <p>
                <b>A:</b> From preparing a portfolio to revamping your resume, we've put together a&nbsp; 
                <a href="https://docs.google.com/presentation/d/159kEktP6bRSRWa0fG8Jxyl-CeiORcMJOUuwuvou8oZY/edit?usp=sharing">
                  slide deck
                </a>
                &nbsp;for you with advice on how to prepare yourself for Stride. Due to the virtual nature 
                of Stride 2022, we suggest having any materials ready to go on your computer, along 
                with a stable Internet connection, mic, and webcam.
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
                  <img src={SmallPhoto1} className="small-photo" />
                  <h2>Arrive between<br />9AM - 2PM</h2>
              </Col>
              <Col md={4} xs={12}>
                <img src={SmallPhoto2} className="small-photo" />
                <h2>Review portfolio with a recruiter</h2>
              </Col>
              <Col md={4} xs={12}>
                <img src={SmallPhoto3} className="small-photo" />
                <h2>Network with companies</h2>
              </Col>
            </Row>
          </div>
        </div>
      <Footer/>
    </>
  );
}

export default About;
