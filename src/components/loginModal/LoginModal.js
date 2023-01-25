import { useContext, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MyContext from "../../store/context";

const LoginModal = function () {
  //////////////the button that open the modal is in the Header (textBox)
  const navigate=useNavigate() ;
  const ctx = useContext(MyContext);
  const closeModalHandler = (e) => {
    e.preventDefault();
    ctx.setloginModalIsShown(false);
  };
  const switchModal = () => {
    ctx.setloginModalIsShown(false);
    ctx.setsignupModalIsShown(true);
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  const sendingLoginRequest = async function (email, password) {
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data ; 
  };

  const onSubmitHandler =async function (e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try{

      const response=await sendingLoginRequest(email,password) ;
      if(response.message){
        alert(response.message) ;
      }else{
        localStorage.setItem("reacttoken",response.token) ; 
        ctx.setuser(response.user) ;
        ctx.setloginModalIsShown(false) ;
        ctx.setisLoggedin(true) ;
        

        navigate("/profile");
        

        
        
      }
    }catch(error){
      console.log(error) ; 
      alert("there is a problem in the server") ;
    }
    
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="title">
          <h1>LOGIN</h1>
        </div>
        <form>
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
          <button
            type="submit"
            className="hero-btn red-btn"
            onClick={onSubmitHandler}
          >
            Submit
          </button>
          <button
            className="close-btn hero-btn red-btn"
            onClick={closeModalHandler}
          >
            close
          </button>

          <div className="btn-container">
            <Link className="bottom-btn" onClick={switchModal}>
              create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginModal;
