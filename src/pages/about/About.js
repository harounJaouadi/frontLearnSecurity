import Header from "../../components/header/Header" ;
import Nav from "../../components/header/nav/Nav";
import Footer from "../../components/footer/Footer";
import SubHeader from "../../components/subHeader/SubHeader";
import AboutUs from "../../components/aboutUs/AboutUs";

const About=function(){
    return <div className="about">
        <SubHeader>
            <Nav></Nav>
            <h1>ABOUT US </h1>
        </SubHeader>
        <AboutUs></AboutUs>
        <Footer></Footer>
    </div>
}
export default About ; 