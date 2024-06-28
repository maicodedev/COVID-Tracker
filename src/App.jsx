import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/Navbar.css';
import Tracker0 from './components/Tracker0';
import './styles/Tracker0.css';
import Tracker1 from './components/Tracker1';
import './styles/Tracker1.css';
import Case0 from './components/Case0';
import './styles/Case0.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <header>
            <h1></h1>
          </header>

          <nav>
            <ul>
              <li><Link to="/"></Link></li>
              <li><Link to="/page1"></Link></li>
              <li><Link to="/tracker1"></Link></li>
            </ul>
          </nav>

          <Routes>
            {/* Página principal */}
            <Route path="/" element={<HomePage />} />
            {/* Página 1 */}
            <Route path="/page1" element={<Page1 />} />
            {/* Tracker 1 */}
            <Route path="/tracker1" element={<Tracker1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Componente para la página principal (Navbar + Tracker 0)
function HomePage() {
  return (
    <>
      <Tracker0 />
    </>
  );
}

// Componente para Page 1 (Navbar + Case 0)
function Page1() {
  return (
    <>
      <Case0 />
    </>
  );
}

export default App;


