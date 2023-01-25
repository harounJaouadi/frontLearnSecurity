import React, { useEffect, useState } from "react";

const MyContext = React.createContext({
  isLoggedin: false,
  loginModalIsShown: false,
  signupModalIsShown: false,
  setloginModalIsShown(status) {},
  setsignupModalIsShown(status) {},
  login: () => {},
  settoken: () => {},
  setisLoggedin: () => {},
  user : {} , 
  setuser : function(){} ,
  rooms : [] , 
  setrooms : function(){} ,

});

export const ContextProvider = (props) => {
  const [loginModalIsShown, setloginModalIsShown] = useState(false);
  const [signupModalIsShown, setsignupModalIsShown] = useState(false);
  const [isLoggedin, setisLoggedin] = useState(false);
  const [token, settoken] = useState("");
  const [user ,setuser]=useState({});
  const [rooms,setrooms]=useState([]) ;
  useEffect(() => {
    const token = localStorage.getItem("reacttoken");
    if (token) {
      setisLoggedin(true);
      settoken(token);
    }
  }, [isLoggedin, token]);
  return (
    <MyContext.Provider
      value={{
        loginModalIsShown,
        signupModalIsShown,
        setloginModalIsShown,
        setsignupModalIsShown,
        settoken,
        setisLoggedin,
        isLoggedin,
        token,
        user,
        setuser,
        rooms,
        setrooms
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContext;
