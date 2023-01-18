import About from "./pages/about/About";
import CoursePage from "./pages/coursesPage/CoursePage";
import Home from "./pages/home/Home";

import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contactUs/ContactUs";

import Blog from "./pages/blog/Blog";
import React, { useContext } from "react";
import Profile from "./pages/profile/Profile";
import MyContext from "./store/context";

const App = () => {

  const ctx=useContext(MyContext) ; 
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}/>

      <Route path="/about" element={<About></About>}/>
      <Route path="/blog" element={<Blog></Blog>}/>
      <Route path="/contact" element={<ContactUs></ContactUs>}/>
      <Route path="/courses" element={<CoursePage></CoursePage>}/>
      <Route path="/signin" element={<Home></Home>}/>
      {ctx.isLoggedin &&<Route path="/profile" element={<Profile></Profile>}></Route>}
      
    </Routes>

    // <Home></Home>
    // <About></About>
    // <CoursePage></CoursePage>
    // <Blog></Blog>
    // <ContactUs></ContactUs>
  );
};
export default App;
