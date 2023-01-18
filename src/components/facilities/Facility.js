import WebPentestingImage from "../../assets/webpentesting.jpg";
import NetworkSecurityImage from "../../assets/networkSecurity.png";
import forensicImage from "../../assets/forensic.jpg" ;
const Facility = function () {
  return (
    <div className="facilities">
      <h1>CYBERSECURITY FIELD</h1>
      <p>
        ‍Cybersecurity is a broad term that describes the practice of securing
        and protecting all computer systems, devices, and programs in an IT
        environment from cyber attacks or cyber threats. However, within the
        field of cybersecurity, there are many different specializations
      </p>
      <div className="row">
        <div className="facilities-col">
          <img src={WebPentestingImage} alt=""></img>
          <h3>Web pentesting</h3>
          <p>
            Web application penetration testing is the process of using
            penetration testing techniques on a web application to detect its
            vulnerabilities. It is similar to a penetration test and aims to
            break into the web application using any penetration attacks or
            threats.
          </p>
        </div>
        <div className="facilities-col">
          <img src={NetworkSecurityImage} alt=""></img>
          <h3>Network security</h3>
          <p>
            Network security is the protection of the underlying networking
            infrastructure from unauthorized access, misuse, or theft. It
            involves creating a secure infrastructure for devices, applications,
            users, and applications to work in a secure manner.
          </p>
        </div>
        <div className="facilities-col">
          <img src={forensicImage} alt=""></img>
          <h3>Forensic</h3>
          <p>
            The science of collecting, inspecting, interpreting, reporting, and
            presenting computer-related electronic evidence is known as cyber
            forensics. Evidence can be found on the hard drive or in deleted
            files.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facility;
