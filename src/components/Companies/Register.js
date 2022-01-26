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
                <a href="https://forms.gle/d93Fwtk5bCEfZdcp9" target="_blank" >
                <div className="button-yellow">
                  <p>Register Now</p>
                </div>
                </a>
            </div>
            <img src={MainGraphic} alt="" className='register-graphic' />
        </div>
    
  );
}

export default Register;