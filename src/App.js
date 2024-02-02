import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/hero';
import AboutMe from './components/about-me/about-me';
import Ability from './components/ability/ability';
import Testimony from './components/testimony/testimony';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <AboutMe/>
      <Ability/>
      <Testimony/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
