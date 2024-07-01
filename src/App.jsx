import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/Navbar.css';
import Tracker0 from './components/Tracker0';
import './styles/Tracker0.css';
import Case0 from './components/Case0';
import './styles/Case0.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <nav>
            <ul>
              <li><Link to="/">Home (Tracker 0)</Link></li>
              <li><Link to="/page1">Page 1 (Case 0)</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/page1" element={<Page1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <Tracker0 />
    </div>
  );
}

function Page1() {
  return (
    <div>
      <Case0 />
    </div>
  );
}

export default App;
