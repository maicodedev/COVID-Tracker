import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import './styles/Navbar.css'; 
import Tracker0 from './components/Tracker0'; 
import './styles/Tracker0.css'; 
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <header>
            <h1>COVID-19 Tracker</h1>
          </header>

          <nav>
            <ul>
              <li><Link to="/tracker0">Tracker 0</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/tracker0" element={<Tracker0 />} />
            <Route path="/" element={<Tracker0 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;