const Footer = function () {
  return (
    <div className="footer">
      <h4>About Us</h4>
      <p>
        We are a team of Network engineering students interested by
        CyberSecurity <br></br>
        We have experience in this domain and we want to share our experience{" "}
        <br></br>
        we have also expertises in the computer science domain in general and we
        are here to help people learn more
      </p>
      <div className="icons">
        <a href="https://www.facebook.com/">
          {" "}
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </div>
    </div>
  );
};
export default Footer;
