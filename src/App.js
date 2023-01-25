import About from "./pages/about/About";
import CoursePage from "./pages/coursesPage/CoursePage";
import Home from "./pages/home/Home";

import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contactUs/ContactUs";

import Blog from "./pages/blog/Blog";
import React, { useContext } from "react";
import Profile from "./pages/profile/Profile";
import MyContext from "./store/context";
import Rooms from "./pages/profile/solvedRooms/Rooms";
import Tasks from "./pages/profile/tasks/Tasks";

const App = () => {

  const ctx=useContext(MyContext) ; 
  return (
    <Routes>
      {<Route path="/" element={<Home></Home>}/>}

      <Route path="/about" element={<About></About>}/>
      <Route path="/blog" element={<Blog></Blog>}/>
      <Route path="/contact" element={<ContactUs></ContactUs>}/>
      <Route path="/courses" element={<CoursePage></CoursePage>}/>
      {ctx.isLoggedin &&<Route path="/profile" element={<Profile></Profile>}></Route>}
      <Route path="/rooms" element={<Rooms></Rooms>}/>
      <Route path="/:roomId" element={<Tasks></Tasks>}></Route>
      <Route path="*" element={<ContactUs></ContactUs>}/>
      
    </Routes>

 
  );
};
export default App;
