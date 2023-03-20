import { useEffect } from "react";
import { React, useState } from "react";
import { SlArrowLeft, SlArrowDown } from "react-icons/sl";
import { useSelector } from "react-redux";
import "./NavMobileItem.scss";

const NavBarItem = ({ title, link, subTitles }) => {
  const [isItemOpen, setIsItemOpen] = useState(false);
  const globalState = useSelector((state) => state);

  useEffect(() => {
    setIsItemOpen(false);
  }, [globalState.SideBar.isOpen]);

  const handleDisplay = () => {
    setIsItemOpen(!isItemOpen);
  };

  return (
    <div className="nav-bar-item">
      <div className="link-head" onClick={handleDisplay}>
        <div className="link-title text-main-text font-semibold">{title}</div>
        {subTitles.length ? (
          isItemOpen ? (
            <SlArrowDown />
          ) : (
            <SlArrowLeft />
          )
        ) : null}
      </div>
      {subTitles.length ? (
        <ul className={`dropdown ${isItemOpen ? `fadeDown` : `fadeUp`}`}>
          {subTitles.map((subtitle, i) => {
            return (
              <li key={i}>
                <a href="">{subtitle}</a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default NavBarItem;
