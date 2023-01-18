import user1Image from "../../assets/samir.jpg";
import user2Image from "../../assets/rabye.jpg";

const Testimonial = function () {
  return (
    <div className="testimonials">
      <h1>What Our students says</h1>
      <p>Our students are very satisfied with our courses</p>
      <div className="row">
        <div className="testimonial-col">
          <img src={user1Image} alt=" "></img>
          <div>
            <p>
              azeazeazezaeaea
            </p>
            <h3>azeazea</h3>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </div>
        </div>
        <div className="testimonial-col">
          <img src={user2Image} alt=" "></img>
          <div>
            <p>
              lore aezaea zeaea eza e
            </p>
            <h3>user</h3>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
