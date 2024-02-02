import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/hero';
import AboutMe from './components/about-me/about-me';
import Ability from './components/ability/ability';
import Testimony from './components/testimony/testimony';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Hero/>
      <AboutMe/>
      <Ability/>
      <Testimony/>
      <Contact/>
    </div>
  );
}

export default App;
