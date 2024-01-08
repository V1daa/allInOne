import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="header-container">
        <div className="lines-container" onClick={handleClick}>
          <div className={isActive ? "active" : ""}>
            <div className="line-first"></div>
            <div className="line-second"></div>
            <div className="line-third"></div>
          </div>
        </div>
        <div className="tekst-container">
          <div className={isActive ? "left-menu" : ""}>
            <Link to={'/'}><h1 className="tekst-header">Home</h1></Link>
            <Link to={'/calc'}><h1 className="tekst-header">Calculator</h1></Link>
            <h1 className="tekst-header">To-Do list</h1>
            <h1 className="tekst-header">Weather App</h1>
            <h1 className="tekst-header">Binary translate</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
