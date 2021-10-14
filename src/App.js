import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
 import './App.css';
import LayoutDefault from './layouts/LayoutDefault';
import EasterEgg from './views/EasterEgg';
import Photography from './views/Photography';
import Contact from './views/Contact';
import AboutUs from './views/AboutUs';
import FAQ from './views/FAQ';
import Connect from './views/Connect';


// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize('G-D1B6D1EHBZ');

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
        <AppRoute exact path="/portfolio" component={Home} layout={LayoutDefault} /> 
        <AppRoute exact path="/portfolio/easter-egg" component={EasterEgg} /> 
        <AppRoute exact path="/portfolio/photography" component={Photography} /> 
        <AppRoute exact path="/portfolio/contact" component={Contact} />
        <AppRoute exact path="/portfolio/AboutUs" component={AboutUs} />
        <AppRoute exact path="/portfolio/FAQ" component={FAQ} />
        <AppRoute exact path="/portfolio/connect" component={Connect} />
        
      


        </Switch>
      )} />
  );

  }
export default App;