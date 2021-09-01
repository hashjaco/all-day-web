import React from "react";
import "./DrawerToggleButton.scss";

const DrawerToggleButton = ({ isOpen, setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="drawer-toggle-button">
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  );
};

export default DrawerToggleButton;
