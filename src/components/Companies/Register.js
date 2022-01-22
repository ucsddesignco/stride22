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
                <p><strong>Registration will open on January 26th. Check back here then!</strong></p>
            </div>
            <img src={MainGraphic} alt="" className='register-graphic' />
        </div>
    
  );
}

export default Register;