import React from "react";

import FavoriteButton from "./FavoriteButton";

const FavoriteItem = ({ item }) => {
  return (
    <div className="favorite-item">
      <a
        href={"/" + item.id + "/details/" + item.added.colorId}
        className="favorite-item__image flex-start"
      >
        <img src={item.images[item.added.colorId]} alt="" />
      </a>

      <div className="flex-spbw">
        <div>
          <div className="favorite-item__title medium-font">
            {item.productName}
          </div>
          <div className="favorite-item__type grey-font small-font">
            {item.targetObj}
          </div>
        </div>
        <div className="favorite-item__price medium-font">
          ${item.price.toFixed(2)}
        </div>
      </div>

      <button className="select-size-btn regular-font">Select size</button>

      {<FavoriteButton item={item} />}
    </div>
  );
};

export default FavoriteItem;
