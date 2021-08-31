import React from "react";
import Header from "./AllDayHeader.jsx";
import "../styles/styles.scss";

const View = ({ children, header }) => {
  return (
    <div className="view">
      <Header title={header} />
      {children}
    </div>
  );
};

export default View;
