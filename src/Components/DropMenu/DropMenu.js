import { React, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./DropMenu.scss";

const DropdownMenu = ({ title, link, subTitles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-btn">
        <p>{title}</p>
        {subTitles.length ? <IoIosArrowDown /> : null}
      </button>
      {subTitles.length ? (
        <div className="dropdown-content">
          <ul className="dropdown-list">
            {subTitles.map((subtitle) => {
              return (
                <li className="dropdown-item">
                  <a href={`${subtitle}`}>{subtitle}</a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
