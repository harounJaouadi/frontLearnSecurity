import Nav from "./nav/Nav";
import TextBox from "./textBox/TextBox";

const Header = function (props) {
  return (
    <div className="header">
      {props.children}
    </div>
  );
};

export default Header;
