import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/hero';
import AboutMe from './components/about-me/about-me';
import Ability from './components/ability/ability';

function App() {
  return (
    <div className="App">
      <Hero/>
      <AboutMe/>
      <Ability/>
    </div>
  );
}

export default App;
