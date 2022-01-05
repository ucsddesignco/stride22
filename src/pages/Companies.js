import '../App.css';
import Register from '../components/Companies/Register';
import Contact from '../components/Companies/Contact';
import Attending from '../components/Companies/Attending';

function Companies() {
  return (
      <div>
          <Register />
          <Attending />
          <Contact />
      </div>
    
  );
}

export default Companies;