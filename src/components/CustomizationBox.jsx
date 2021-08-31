import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/sass/styles.scss";
import { defaults } from "../config/colors";

const CustomizationBox = ({ variations = {}, setFabric }) => {
  const [selected, setSelected] = useState("amber");
  const handleClick = (variation) => {
    setFabric(variation);
    setSelected(variation);
  };

  return (
    // finish styling and test callback
    <div className="vertical-list">
      <div className="customization">
        <p className="customization-step-label">1. CHOOSE A FABRIC</p>
        <p className="customization-step-description">
          Choose your choice from fabrics to leather.
        </p>
      </div>
      <div>
        <p
          style={{
            color: defaults.medium,
            fontSize: 16,
            fontWeight: 700,
            lineHeight: "20px",
          }}
        >
          Fabric Choices
        </p>
        <div className="horizontal-list start">
          {Object.entries(variations).map((variation, index) => (
            <ProductCard
              active={variation[0] === selected}
              handleClick={() => handleClick(variation[0])}
              key={variation[0]}
              product={variation[1]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MemoizedCustomizationBox = React.memo(CustomizationBox);

export default MemoizedCustomizationBox;
