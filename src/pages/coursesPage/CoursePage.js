import Footer from "../../components/footer/Footer";
import Nav from "../../components/header/nav/Nav";
import SubHeader from "../../components/subHeader/SubHeader";
import Course from "../../components/courses/Course";
import Facility from "../../components/facilities/Facility";


const CoursePage = function () {
  return (
    <div className="course-page">
      <SubHeader>
        <Nav></Nav>
        <h1>OUR COURSES</h1>
      </SubHeader>
      <Course></Course>
      <Facility></Facility>
      <Footer></Footer>
    </div>
  );
};
export default CoursePage;
