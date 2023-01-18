import { useContext } from "react";
import MyContext from "../../../store/context";

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
      <h1>WELCOME TO OUR PLATEFORM</h1>
      <p>
        HERE IS THE BEST PLACE TO LEARN<br></br>
        AND PRACTISE AT THE SAME TIME
      </p>
      <button className="hero-btn" to="/signup" onClick={showSignupHandler}>
        CREATE AN ACCOUNT AND BEGIN
      </button>
      <span style={{marginBottom:"8px" ,display : "block"}}></span>
      <button  className="hero-btn" to="/signin" onClick={showLoginHandler}>
        Sign in
      </button >
    </div>
  );
};

export default TextBox;
