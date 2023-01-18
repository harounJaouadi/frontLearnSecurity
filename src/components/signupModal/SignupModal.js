import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../store/context";

const SignupModal = function () {
  const ctx = useContext(MyContext);
  const closeSignupModal = function (e) {
    e.preventDefault();
    ctx.setsignupModalIsShown(false);
  };
  const switchModal = () => {
    ctx.setsignupModalIsShown(false);
    ctx.setloginModalIsShown(true);
  };

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const sendingRegisterRequest = async function (username, email, password) {
    const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  };
  const register = async function (e) {
    try {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const username = usernameRef.current.value;
      const response = await sendingRegisterRequest(username, email, password);
      if(response.id){
        alert("user created successfully now you must login") ;
        ctx.setsignupModalIsShown(false) ; 
        ctx.setloginModalIsShown(true) ; 
      }else{
        alert("try again there is a problem")
      }
    } catch (error) {
      console.log(error) ; 
      alert("try again there is a problem");
      
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="title">
          <h1>CREATE AN ACCOUNT</h1>
        </div>
        <form>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            ref={usernameRef}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email"
            ref={emailRef}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Subject"
            ref={passwordRef}
          ></input>
          <button type="submit" className="hero-btn red-btn" onClick={register}>
            Submit
          </button>
          <button
            className="close-btn hero-btn red-btn"
            onClick={closeSignupModal}
          >
            close
          </button>

          <div className="btn-container">
            <Link className="bottom-btn" onClick={switchModal}>
              have already one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupModal;
