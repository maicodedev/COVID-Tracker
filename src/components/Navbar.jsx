
import '../styles/Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faBars,  faBorderAll,  faFolder,  faClone, faChartLine,  faGlobe, faMessage, faFaceMeh } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div className="sidebar">
        <div className="logo">
            <img src="/src/assets/images/coronavirus.png" alt="COVID-19 Logo" />
        </div>

        <ul className="sidebar-nav">
        <li><a href="#chart"><FontAwesomeIcon icon={faChartPie} /></a></li>
        <li><a href="#bars"><FontAwesomeIcon icon={faBars} /></a></li>
        <li><a href="#grid"><FontAwesomeIcon icon={faBorderAll} /></a></li> 
        <li><a href="#folder"><FontAwesomeIcon icon={faFolder} /></a></li>
        <li><a href="#folders"><FontAwesomeIcon icon={faClone} /> </a></li>
        <li><a href="#arrow"><FontAwesomeIcon icon={faChartLine} /></a></li>
        <li><a href="#globe"><FontAwesomeIcon icon={faGlobe} /></a></li>
        <li><a href="#coment"><FontAwesomeIcon icon={faMessage} /></a></li>
        </ul>

        <div className="bottom-icon">
                <FontAwesomeIcon icon={faFaceMeh} />
            </div>
    </div>
    );
};

export default Navbar;
