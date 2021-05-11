import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import HomeCards from './components/home-cards/HomeCards';
import Hero from './components/hero/Hero'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero/>
        <HomeCards/>
      </div>
    </Router>
  );
}

export default App;
