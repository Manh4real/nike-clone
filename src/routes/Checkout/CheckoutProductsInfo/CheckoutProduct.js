import React from "react";

const CheckoutProduct = ({ product }) => {
  return (
    <div className="checkout__product flex-start">
      <div className="image">
        <img src={product.images[product.added.colorId]} alt="" />
      </div>
      <div className="checkout__product-info">
        <div className="productName">{product.productName}</div> <br />
        <div className="otherInfo">
          Style #: DH0927-002
          <br />
          Size: {product.added.size}
          <br />
          Color: Photon Dust/Pink Prime/White/Rush Pink
          <br />
          Qty: {product.added.quanity} @ ${product.price.toFixed(2)}
          <br />${(product.price * product.added.quanity).toFixed(2)}
          <br />
        </div>
      </div>
    </div>
  );
};
export default CheckoutProduct;
