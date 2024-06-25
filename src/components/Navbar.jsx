import '../styles/Navbar.css'
import { TfiPieChart, TfiViewList } from "react-icons/tfi";
import { IoGridOutline } from "react-icons/io5";
import { TfiLayoutTab } from "react-icons/tfi";
import { TfiLayersAlt } from "react-icons/tfi";
import { TfiStatsUp } from "react-icons/tfi";
import { BsGlobe2 } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { TfiFlickrAlt } from "react-icons/tfi";


const Navbar = () => {
    return (
        <div className="navbar-sidebar">
            <div className="navbar-logo">
                <img src="/src/assets/images/coronavirus.png" alt="COVID-19 Logo" />
            </div>

            <ul className="navbar-nav">
                <li><a href="#chart"><TfiPieChart /></a></li>
                <li><a href="#bars"><TfiViewList /></a></li>
                <li><a href="#grid"><IoGridOutline /></a></li>
                <li><a href="#folder"><TfiLayoutTab /></a></li>
                <li><a href="#folders"><TfiLayersAlt /></a></li>
                <li><a href="#arrow"><TfiStatsUp /></a></li>
                <li><a href="#globe"><BsGlobe2 /></a></li>
                <li><a href="#coment"><FaRegCommentAlt /></a></li>
            </ul>

            <div className="navbar-bottom-icon">
                <TfiFlickrAlt />
            </div>
        </div>
    );
};

export default Navbar;

