import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/hero';
import AboutMe from './components/about-me/about-me';

function App() {
  return (
    <div className="App">
      <Hero/>
      <AboutMe/>
      <Hero/>
      <AboutMe/>
    </div>
  );
}

export default App;
