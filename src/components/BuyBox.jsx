import React from "react";
import { Link } from "react-router-dom";
import AppCard from "./AppCard.jsx";
import "../styles/styles.scss";

const BuyBox = ({ product, setPaymentMethod }) => {
  const [selected, setSelected] = React.useState("full");

  const handleClick = (method) => {
    setPaymentMethod(method);
    setSelected(method);
  };

  return (
    <div className="vertical-list">
      <p className="customization-step-label">2. CHOOSE A PAYMENT METHOD</p>

      <div className="horizontal-list start">
        <AppCard
          active={selected === "full"}
          onClick={() => handleClick("full")}
        >
          <p className="basic-text">Pay Now</p>
          <h1 className="payment">${product.currentPrice}</h1>
          <p className="strikethrough">${product.initialPrice}</p>
          <p className="fine-print">$200 OFF with code</p>
        </AppCard>
        <div className="divider" />
        <AppCard
          active={selected === "installments"}
          onClick={() => handleClick("installments")}
        >
          <p className="basic-text">Pay as low as</p>
          <h1 className="payment">${product.monthlyPayment}/month</h1>
          <p className="basic-text">with Klarna</p>
          <Link className="fine-print" to="/installments">
            Learn More
          </Link>
        </AppCard>
      </div>
      <div className="vertical-list button-group">
        <div className="add-button">ADD TO CART</div>
        <div className="save">SAVE FOR LATER</div>
      </div>
    </div>
  );
};

const MemoizedBuyBox = React.memo(BuyBox);

export default MemoizedBuyBox;
