import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Links } from "./Links";
import "./Navigation.css";

export const Navigation = () => {
  const currentPage = window.location.href;

  return (
    <>
      <nav className="navigation">
        <ul className="nav-links">
          {Links.map((link, i) => {
            return (
              <li key={i}>
                <NavLink to={link.to}>
                  <button className="nav-link"></button>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
