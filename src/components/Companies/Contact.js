import '../../App.css';
import StepsGraphic from "../../assets/images/steps.png";

function Contact() {
  return (
        <div className='contact'>
            <div className="contact-left">
                <h1>Interested in connecting with UCSD Design Students?</h1>
                <p>
                    If your company and/or your team is interested in 
                    Stride, please sign up! If you have questions or 
                    want to learn more, view our available packages 
                    or contact our industry relations team at 
                    industryrelations@ucsddesign.co.
                </p>
                <div className="button-blue">
                    <p>Register Your Company</p>
                </div>
            </div>
            <img src={StepsGraphic} alt="" className='steps-graphic' />
        </div>
    
  );
}

export default Contact;