import React, { useState } from "react";
import View from "../components/View";
import ProductPreview from "../components/ProductPreview";
import BuyBox from "../components/BuyBox";
import CustomizationBox from "../components/CustomizationBox";
import AllDayHeader from "../components/AllDayHeader";

const products = {
  theSofa: {
    id: "12FAE421",
    title: "The Sofa",
    initialPrice: "1,450",
    currentPrice: "1,250",
    monthlyPayment: "25",
    variations: {
      amber: {
        id: "12FAE421-02",
        title: "Amber",
        url: "https://helixsleep-code-challenge.s3.amazonaws.com/sofa-amber.jpg",
      },
      charcoal: {
        id: "12FAE421-01",
        title: "Charcoal",
        url: "https://helixsleep-code-challenge.s3.amazonaws.com/sofa-charcoal.jpg",
      },
      red: {
        id: "12FAE421-03",
        title: "Red",
        url: "https://helixsleep-code-challenge.s3.amazonaws.com/sofa-red.jpg",
      },
    },
  },
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState("amber");
  const [paymentMethod, setPaymentMethod] = useState("full");

  const handleSubmit = async () => {
    // let's get that sweet sofa
    return paymentMethod;
  };

  return (
    <View>
      <ProductPreview product={products.theSofa.variations[selectedProduct]} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexFlow: "column nowrap",
          width: "80%",
        }}
      >
        <header className="product-title">THE SOFA</header>
        <div className="product-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            dui interdum, tincidunt velit sit amet.
          </p>
        </div>

        <CustomizationBox
          variations={products.theSofa.variations}
          setFabric={setSelectedProduct}
        />
        <BuyBox
          product={products.theSofa}
          setPaymentMethod={setPaymentMethod}
          submitOrder={handleSubmit}
        />
      </div>
    </View>
  );
};

export default Products;
