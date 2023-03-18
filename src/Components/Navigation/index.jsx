import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Links } from "./Links";
import "./Navigation.css";

export const Navigation = () => {
  const currentPage = window.location.href;

 const [style, setActive] = useState("not-active");

  const handleClick = (e) => {
    return(
      
      setActive("active")
    )
  }


  return (
    <>
      <nav className="navigation">
        <ul className="nav-links">
          {Links.map((link, i) => {
            return (

              <li key={i}>
                <NavLink
                  to={link.to}
                >
                  <button 
                    className={style}
                    onClick={handleClick}                   
                  >
                  </button>
                </NavLink>
              </li>
              
            );
          })}
        </ul>
      </nav>
    </>
  );
};
