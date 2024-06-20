import Navbar from './components/Navbar'; 
import './styles/Navbar.css'; 
/* import Tracker0 from './components/Tracker0'; */
/* import './styles/Tracker0.css';  */

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      {/* <Tracker0 /> */}

      <div className="content">
        <header>
          <h1></h1>
        </header>
        
        <div id="home">
          <h2></h2>
          {}
        </div>
        
        <div id="world">
          <h2></h2>
          {}
        </div>
        
        <div id="country">
          <h2></h2>
          {}
        </div>
      </div>
    </div>
  );
};

export default App;
