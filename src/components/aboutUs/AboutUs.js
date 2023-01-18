import aboutImage from "./../../assets/about.jpg";

const AboutUs = function () {
  return (
    <div className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>we are the world's largest company</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing softwa
          </p>
          <a href="/" className="hero-btn red-btn">EXPLORE NOW</a>
        </div>
        <div className="about-col">
          <img src={aboutImage} alt=""></img>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
