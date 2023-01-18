import Footer from "../../components/footer/Footer";
import Nav from "../../components/header/nav/Nav";
import SubHeader from "../../components/subHeader/SubHeader";
import certificateImage from "./../../assets/certificate.jpg";
const Blog = function () {
  return (
    <div className="Blog">
      <SubHeader>
        <Nav></Nav>
        <h1>OUR BLOG</h1>
      </SubHeader>
      <div className="blog-content">
        <div className="row">
          <div className="blog-left">
            <img src={certificateImage} alt=""></img>
            
            <div className="comment-box">
                <h3>Leave a comment </h3>
                <form className="comment-form">
                    <input type="text" placeholder="Enter Name"></input>
                    <input type="email" placeholder="Enter Email"></input>
                    <textarea row="5" placeholder="your comment "></textarea>
                    <button type="submit" className="hero-btn red-btn">POST COMMENT</button>
                </form>
            </div>
          </div>
          <div className="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>web security</span>
              <span></span>
            </div>
            <div>
              <span>network</span>
              <span></span>
            </div>
            <div>
              <span>telecommunication</span>
              <span></span>
            </div>
            <div>
              <span>other</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Blog;
