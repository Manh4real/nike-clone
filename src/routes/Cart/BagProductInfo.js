import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useBag } from "App";
import { TrashCan, ThinnerHeart } from "components/Icons";
import BagSelect from "./BagSelect";
import ShippingInfo from "./ShippingInfo";

// Redux-related
import { useDispatch, useSelector } from "react-redux";
import { selectUserStatus, updateFavorites } from "features/user/userSlice";
import { modifyFromBag, removeFromBag } from "features/bag/bagSlice";

function BagProductInfo({ product }) {
  const dispatch = useDispatch();

  const bag = useBag();

  const isLoggedIn = useSelector(selectUserStatus) === "succeeded";

  const navigate = useNavigate();
  const location = useLocation();

  const quanity = useMemo(() => {
    const r = bag.find(
      (p) => p.id === product.id && p.added.size === product.added.size
    );
    return r.added.quanity;
  }, [bag, product]);

  const handleChange = (modifiedValue, type) => {
    dispatch(
      modifyFromBag({
        baggedId: product.added.baggedId,
        modifiedType: type,
        modifiedValue,
      })
    );
  };
  const handleDelete = () => {
    dispatch(removeFromBag(product.added.baggedId));
  };
  const handleAddFavorite = async () => {
    if (!isLoggedIn) {
      alert("Please log in to continue!");
      navigate("/sign-in", { state: { from: location } });
      return;
    }
    await (async function () {
      console.log("adding...");
      dispatch(updateFavorites(product));
    })();
  };

  return (
    <div className="bag__product-info">
      <div className="upper flex-spbw">
        <a
          href={"/" + product.id + "/details/" + product.added.colorId}
          className="bag__pd-image"
        >
          <img src={product.images[product.added.colorId]} alt="" />
        </a>
        <div className="flex-start">
          <div className="bag__pd-content flex-spbw">
            <div>
              <a
                href={"/" + product.id + "/details/" + product.added.colorId}
                className="regular-font"
              >
                {product.productName}
              </a>
              <div className="grey-font">
                <div className="regular-font">{product.targetObj}</div>
                <div className="flex-start">
                  <BagSelect
                    label="size"
                    value={product.added.size}
                    options={product.sizes}
                    handleChange={handleChange}
                  />
                  <BagSelect
                    label="quanity"
                    value={quanity}
                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="bag__buttons">
              <div className="favorite-btn" onClick={handleAddFavorite}>
                <button>
                  <ThinnerHeart w="24px" h="24px" />
                </button>
              </div>
              <div className="delete-btn" onClick={handleDelete}>
                <button>
                  <TrashCan w="24px" h="24px" />
                </button>
              </div>
            </div>
          </div>
          <div className="bag__pd-price">
            ${(product.price * quanity).toFixed(2)}
          </div>
        </div>
      </div>
      <ShippingInfo />
      <div className="regular-font">
        <h4>Free Pickup</h4>
        <p>
          <button className="underlined regular-font hover-w-hl-udl">
            Find a Store
          </button>
        </p>
      </div>
    </div>
  );
}

export default BagProductInfo;
