import '../App.css';
import Register from '../components/Companies/Register';
import Contact from '../components/Companies/Contact';
import Attending from '../components/Companies/Attending';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Companies() {
  return (
      <div>
          <Navbar/>
          <Register />
          <Attending />
          <Contact />
          <Footer />
      </div>
    
  );
}

export default Companies;