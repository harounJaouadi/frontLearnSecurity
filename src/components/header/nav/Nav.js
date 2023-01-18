import { NavLink } from "react-router-dom";
import logo from "./../../../assets/myLogo.png";

//function for closing and opening NavBar no relation with react code
const hideNav = function () {
  let navlinks = document.getElementById("nav-links");
  navlinks.style.right = "-200px";
  
};
const showNav = function () {
  clearTimeout() ;

  let navlinks = document.getElementById("nav-links");
  navlinks.style.right = "0px";
  
};
//

const Nav = function () {
  return (
    <div className="nav">
      <NavLink className="link" to="/">
        <img src={logo} alt="logo"></img>
      </NavLink>
      <div className="nav-links" id="nav-links">
        <i className="fa fa-times"  onClick={hideNav}></i>
        <ul>
          <li>
            <NavLink className="link" to="/" alt="">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about" alt="">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/courses" alt="">
              COURSE
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/blog" alt="">
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact" alt="">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      <i className="fa fa-bars"  onClick={showNav}></i>
    </div>
  );
};
export default Nav;
