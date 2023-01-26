import React from "react";

import { withScrollControl } from "hoc";
import { ArrowIcon } from "components/Icons";

import StyledPFCarousel from "./StyledPFCarousel";

// Redux-related
import { useSelector } from "react-redux";
import { selectFavorites } from "features/user/userSlice";

const PFCarousel = React.forwardRef(
  ({ noScroll, handleSlideLeft, handleSlideRight }, ref) => {
    const favorites = useSelector(selectFavorites);

    return (
      <StyledPFCarousel>
        <div className="b-carousel__slide-btn left">
          <button
            onClick={() => handleSlideLeft(true)}
            disabled={noScroll}
            className="flex-center"
          >
            <span className="flex-center bd-rd-50p">
              <ArrowIcon type="left" />
            </span>
          </button>
        </div>
        <div ref={ref} className="profile__carousel b-carousel">
          {(favorites.length === 0 && <Mes />) || <PFItems />}
        </div>
        <div className="b-carousel__slide-btn right">
          <button
            onClick={() => handleSlideRight(true)}
            disabled={noScroll}
            className="flex-center"
          >
            <span className="flex-center bd-rd-50p">
              <ArrowIcon type="right" />
            </span>
          </button>
        </div>
      </StyledPFCarousel>
    );
  }
);

const PFItems = () => {
  const favorites = useSelector(selectFavorites);

  return favorites.map((product, i) => {
    return <PFItem key={i} product={product} />;
  });
};

const PFItem = ({ product }) => {
  return (
    <div className="profile__carousel-item b-carousel__item">
      <a href={"/" + product.id + "/details/" + product.added.colorId}>
        <div className="b-carousel__item-image">
          <img src={product.images[product.added.colorId]} alt="" />
        </div>
        <div className="profile__carousel-title regular-font flex-spbw w-100">
          <span>{product.productName}</span>
          <span>${product.price}</span>
        </div>
        <div className="grey-font regular-font">{product.targetObj}</div>
      </a>
    </div>
  );
};

const Mes = () => {
  return (
    <p className="small-font grey-font">
      There is no items saved to your Favorites.
    </p>
  );
};

export default withScrollControl(PFCarousel);
