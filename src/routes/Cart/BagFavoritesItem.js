import React from "react";

// Redux-related
import { useDispatch } from "react-redux";
import { addToBag } from "features/bag/bagSlice";

const BagFavoritesItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToBag({ ...product }));
  };

  return (
    <div className="item flex-start">
      <a
        href={"/" + product.id + "/details/" + product.added.colorId}
        className="image"
      >
        <img src={product.images[product.added.colorId]} alt="" />
      </a>
      <div className="info flex-1">
        <div className="flex">
          <div className="flex-1 regular-font">
            <a href={"/" + product.id + "/details/" + product.added.colorId}>
              {product.productName}
            </a>
            <div className="grey-font">Women's Shoes</div>
            <button className="select-size-btn hover-w-fade underlined regular-font grey-font">
              Select Size
            </button>
          </div>
          <div className="price regular-font">${product.price.toFixed(2)}</div>
        </div>
        <button
          className="addToBag-btn big-button regular-font mt-25"
          onClick={handleClick}
        >
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default BagFavoritesItem;
