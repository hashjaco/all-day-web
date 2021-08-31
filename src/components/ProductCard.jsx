import React from "react";
import "../styles/sass/styles.scss";

const ProductCard = ({ active, product = {}, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={active ? "product-card active" : "product-card"}
    >
      <img src={product.url} alt={product.title} />
      <p>{product.title}</p>
    </div>
  );
};

export default ProductCard;
