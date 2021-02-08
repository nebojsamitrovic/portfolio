import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
		<Header />
		<About id='about'/>
		<Skills id='skills'/>
		<Portfolio id='portfolio'/>
		<Contact id='contact'/>
		<Footer />
	</div>
  );
}

export default App;
