import LinuxImage from "./../../assets/linux.jpg" ; 
import WiresharkImage from "./../../assets/wireshark.jpg" ; 
import PythonImage from "./../../assets/python.jpg" ; 

const Technologie = function () {
  return (
    <div className="campus">
      <h1>Some Tools To Be Used </h1>
      <p>
        there is many tools that you will use to learn but these are crucial 
      </p>
      <div className="row">
        <div className="campus-col">
          <img src={LinuxImage} alt=""></img>
          <div className="layer">
            <h3>LINUX</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src={WiresharkImage} alt=""></img>
          <div className="layer">
            <h3>WIRESHARK</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src={PythonImage} alt=""></img>
          <div className="layer">
            <h3>PYTHON</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologie;

