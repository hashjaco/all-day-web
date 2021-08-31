import React from "react";
import "../styles/styles.scss";

const AppCard = ({ children, active, onClick }) => {
  return (
    <div
      className={active ? "payment-method-card active" : "payment-method-card"}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default AppCard;
