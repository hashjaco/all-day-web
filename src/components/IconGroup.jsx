import React from "react";
import "../styles/styles.scss";

const IconGroup = (props) => {
  const { collection } = props;

  return (
    <div className="feature-icon-container">
      {Object.values(collection).map((icon, index) => (
        <img className="feature-icon" key={icon} src={icon} alt="" />
      ))}
    </div>
  );
};

export default IconGroup;
