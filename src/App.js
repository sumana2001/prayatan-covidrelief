import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import HomeCards from './components/home-cards/HomeCards';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HomeCards/>
      </div>
    </Router>
  );
}

export default App;
