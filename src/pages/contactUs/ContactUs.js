import Footer from "../../components/footer/Footer";
import Nav from "../../components/header/nav/Nav";
import SubHeader from "../../components/subHeader/SubHeader";

const ContactUs = function () {
  return (
    <div className="contactUs">
      <SubHeader>
        <Nav></Nav>
        <h1>CONTACT US</h1>
      </SubHeader>
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.297962484348!2d10.195537314642467!3d36.85928617207228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb34a4c00a27%3A0x20c08132e44556e5!2sTerminus%20Ariana!5e0!3m2!1sfr!2stn!4v1670336801426!5m2!1sfr!2stn"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>XYZ ROAD ,ABC building</h5>
                <p>ariana , tunisia</p>
              </span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+216 5656565 656 565 </h5>
                <p>from monday to friday , 8am tp 6pm</p>
              </span>
            </div>
            <div>
              <i className="fa fa-envelope-o"></i>
              <span>
                <h5>info@gmail.com</h5>
                <p>email us your query</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form>
              <input type="text" placeholder="Enter Name"required></input>
              <input type="email" placeholder="Enter Email"></input>
              <input type="text" placeholder="Enter Subject"></input>
              <textarea rows="8" placeholder="Message" required></textarea>
              <button type="submit" className="hero-btn red-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
