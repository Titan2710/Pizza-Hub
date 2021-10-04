import React from 'react';
import GlobalStyles from './globalStyle';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Faq from './components/Faq';


function App() {
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
