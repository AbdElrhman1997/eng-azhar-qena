import { React, useState } from "react";
import { SlArrowLeft, SlArrowDown } from "react-icons/sl";
import "./NavMobileItem.scss";

const NavBarItem = ({ title, imgUrl, content }) => {
  const [isItemOpen, setIsItemOpen] = useState(false);

  const handleDisplay = () => {
    setIsItemOpen(!isItemOpen);
  };

  return (
    <div className="nav-bar">
      <div className="catgory-head" onClick={handleDisplay}>
        <div>
          <div className="ml-3 text-main-text font-semibold">{title}</div>
        </div>
        {isItemOpen ? <SlArrowDown /> : <SlArrowLeft />}
      </div>
      {content.length ? (
        <ul className={`dropdown ${isItemOpen ? `fadeDown` : `fadeUp`}`}>
          {content.map((subtitle, i) => {
            return (
              <li key={i}>
                <p>{subtitle.product}</p>
                <p>{subtitle.count}</p>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default NavBarItem;
