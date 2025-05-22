import React from 'react';
import { useEffect } from 'react';
import GlobalStyles from './globalStyle';
import {BrowserRouter as Router} from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Faq from './components/Faq';



function App() {

  useEffect(() => {
  document.body.style.overflowX = 'hidden';
  document.documentElement.style.overflowX = 'hidden';
}, []);
  
  return (
    <Router >
      <GlobalStyles />
          <Hero />
          <Products />
          <About />
          <Faq />
          <Contact />
          <Footer />
    </Router>
  );
}

export default App;
