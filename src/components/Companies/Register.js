import '../../App.css';
import MainGraphic from "../../assets/images/companies.svg";

function Register() {
  return (
        <div className='register'>
            <div className="register-left">
                <h1>Companies</h1>
                <p>
                Our participating companies come from diverse backgrounds, 
                representing multiple industries, products, and services. 
                Stop by Stride to connect with professionals and learn more 
                about internship and full-time opportunities at a wide range 
                of companies.
                </p>
                <p>
                    Looking to recruit top talent? Learn how your company can 
                    participate.
                </p>
                <div className="button-yellow">
                    <p>Register Your Company</p>
                </div>
            </div>
            <img src={MainGraphic} alt="" className='register-graphic' />
        </div>
    
  );
}

export default Register;