import React from "react";
import { images } from "../config/images";
import "../styles/styles.scss";
import IconGroup from "./IconGroup";

const { featureBannerIcons } = images;

const ProductPreview = (props) => {
  const { product } = props;
  return (
    <div className="view-box-container">
      <div className="product-selection-container">
        <img
          className="product-selection-image"
          src={product.url}
          alt={product.title + " sofa"}
        />
      </div>
      <IconGroup collection={featureBannerIcons} />
    </div>
  );
};

export default ProductPreview;
