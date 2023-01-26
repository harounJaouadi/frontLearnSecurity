import { useContext } from "react";
import MyContext from "../../../store/context";
import home_image from '../../../assets/home_image.png'

const TextBox = function () {

  const ctx=useContext(MyContext) ;
  const showLoginHandler=()=>{
    ctx.setloginModalIsShown(true) ; 
  } ;

  const showSignupHandler=()=>{
    ctx.setsignupModalIsShown(true) ;
  }

  
  return (
    <div className="text-box">
      {/* <h1>WELCOME TO OUR PLATEFORM</h1> */}
      <img className="profile-image" src={home_image}></img>
      <p>
      An interactive Hacking platform for academic usage<br></br>
      for academic usage
      </p>
      {!ctx.isLoggedin && <button className="hero-btn" to="/signup" onClick={showSignupHandler}>
        CREATE AN ACCOUNT AND BEGIN
      </button>}
      <span style={{marginBottom:"8px" ,display : "block"}}></span>
      {!ctx.isLoggedin && <button  className="hero-btn" to="/signin" onClick={showLoginHandler}>
        Sign in
      </button >}
    </div>
  );
};

export default TextBox;
