import React from "react";
import "../styles/sass/styles.scss";

const AppCard = ({ children, active, onClick }) => {
  return (
    <div
      className={
        active ? "payment-method-card active-card" : "payment-method-card"
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default AppCard;
