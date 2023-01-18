import Cta from "../../components/callToAction/Cta";
import Technologie from "../../components/technologie/Technologie";
import Course from "../../components/courses/Course";
import Facility from "../../components/facilities/Facility";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/header/nav/Nav";
import TextBox from "../../components/header/textBox/TextBox";
import Testimonial from "../../components/testimonials/Testimonials";
import { useContext } from "react";
import MyContext from "../../store/context";
import LoginModal from "../../components/loginModal/LoginModal";
import SignupModal from "../../components/signupModal/SignupModal";



const Home = function (props) {

  const ctx=useContext(MyContext) ; 

  return (
    <div className="home">
      {ctx.loginModalIsShown && <LoginModal></LoginModal>}    
      {ctx.signupModalIsShown && <SignupModal></SignupModal>}    
      <Header>
        <Nav></Nav>
        <TextBox></TextBox>
      </Header>
      
      <Course></Course>
      <Technologie></Technologie>
      <Facility></Facility>
      {/* <Testimonial></Testimonial> */}
      <Cta></Cta>
      <Footer></Footer>
      {props.children}
      
    </div>
  );
};
export default Home ; 
