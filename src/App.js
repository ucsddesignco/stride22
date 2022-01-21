import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Companies from './pages/Companies';

function App() {

  useEffect(() => {
    document.title = "Stride 2022"
  })

  return (
    <Router>
      <div className="App">
        <link rel="icon" href="./assets/images/favicon.ico" type="image/*" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/companies" element={<Companies />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
