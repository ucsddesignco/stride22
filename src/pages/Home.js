import '../App.css';
import Footer from '../components/Footer';
import Landing from '../components/Home/Landing';
import Sponsors from '../components/Home/Sponsor';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Landing></Landing>
      <Sponsors></Sponsors>
      <Footer></Footer>
    </div>
    
  );
}

export default Home;