import '../App.css';
import Footer from '../components/Footer';
import Landing from '../components/Home/Landing';
import Sponsors from '../components/Home/Sponsor';
import Navbar from '../components/Navbar';
import {motion} from 'framer-motion'

function Home() {
  return (
    <div>
      <div className="tape">
        <motion.p initial={{x:'-2000px'}} animate={{x:'0'}} transition={{duration: 16, ease: 'linear', repeat: 'Infinity'}} >
          Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | Stride Will Be online this year | 
        </motion.p>
      </div>
      <Navbar></Navbar>
      <Landing></Landing>
      <Sponsors></Sponsors>
      <Footer></Footer>
    </div>
    
  );
}

export default Home;