import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import Header from './components/Header.js';
import { HashRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Card/>
      </div>

    </Router>
    
  );
}

export default App;
