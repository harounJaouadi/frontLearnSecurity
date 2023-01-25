import "./profile.css";
import { useContext, useEffect } from "react";
import MyContext from "../../store/context";
import { useNavigate } from "react-router-dom";
import profileImage from "./../../assets/profileImages/avatar.jpeg"
import Score from "./score/Score";
import ProfCard from "./profCard/ProfCard";
import ProfCard1 from "./profCard/ProfCard1";
import ProfCard2 from "./profCard/ProfCard2"
const Profile = function () {
  const [user,setuser]=("")
  const navigate=useNavigate() ; 
  const ctx = useContext(MyContext);
  const getUser = async function () {
    const response = await fetch("http://localhost:5000/user", {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${ctx.token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setuser(data.user);
    } else {
      console.log("erreur");
    }
  };
  useEffect(() => {
    getUser();
  }, []);



  const disconnectHandler=function(e){
    e.preventDefault() ; 
    localStorage.removeItem("reacttoken") ;
    ctx.setuser({}) ; 
    ctx.setisLoggedin(false) ;
    ctx.settoken("") ;
    navigate("/"); 
    
  }
  const beginHandler=function(e){
    e.preventDefault() ; 
    navigate("/rooms") ;
  }

  return (
    <div className="header__wrapper">
      <header>
      </header>
      <div className="cols__container">
        <div className="left__col">
          <div className="img__container">
            <img src={profileImage} alt="name" />
            <span></span>
          </div>
          
          <h2>{ctx.user.username}</h2>
          <p>university </p>
          <p>{ctx.user.email}</p>
          <button className="hero-btn red-btn" onClick={disconnectHandler}>disconnect</button>


          <ul className="about">
            <li>
              <span>{ctx.user.scoreWeb}</span>web score
            </li>
            <li>
              <span>{ctx.user.scoreNetwork}</span>network score
            </li>
            <li>
              <span>{ctx.user.scoreOther}</span>other score
            </li>
          </ul>

          <div className="content">
            <p>now you can start learning by visiting the rooms</p>

            <ul>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-dribbble"></i>
            </ul>
          </div>
        </div>
        <div className="right__col">
          <nav>
            <ul>
              <li>
                <a href="/">{"      "}</a>
              </li>
              <li>
                <a href="/">{"      "}</a>
              </li>
              <li>
                <a href="/">{"      "}</a>
              </li>
              <li>
                <a href="/">{"      "}</a>
              </li>
            </ul>
            <button className="hero-btn red-btn" onClick={beginHandler}>begin</button>
          </nav>
          <div className="row">
            
            {/* <Score></Score> */}
            <ProfCard></ProfCard>
            <ProfCard2></ProfCard2>
            <ProfCard1></ProfCard1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
