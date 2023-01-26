import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { ArrowIcon } from "../Icons";
import Colors from "./Colors";
import Sizes from "./Sizes";
import { ViewProductDetails } from "./ViewProductDetails";

// Redux-related
import { useDispatch, useSelector } from "react-redux";
import { selectUserStatus, updateFavorites } from "features/user/userSlice";
import { addToBag } from "features/bag/bagSlice";
import StyledInfo from "./StyledInfo";

function Info({ product }) {
  const dispatch = useDispatch();

  const { colorTypeId } = useParams();
  const [item, setItem] = useState({
    colorId: colorTypeId,
    size: null,
    quanity: 1,
  });
  const [error, setError] = useState(false);

  const isLoggedIn = useSelector(selectUserStatus) === "succeeded";

  const navigate = useNavigate();
  const location = useLocation();

  const handleAdd = () => {
    if (!item.size) {
      setError(true);
      return;
    }

    dispatch(addToBag({ ...product, added: { ...item } }));
    handleRefresh();
  };

  const handleError = () => {
    setError(false);
  };
  const handleColorChange = (colorId) => {
    setItem((prev) => ({ ...prev, colorId }));
  };
  const handleSizeChange = (size) => {
    setItem((prev) => ({ ...prev, size }));
  };
  const handleAddFavorite = () => {
    if (!isLoggedIn) {
      alert("Please log in to continue!");
      navigate("/sign-in", { state: { from: location } });
      return;
    }

    if (!item.size) {
      setError(true);
      return;
    }

    dispatch(updateFavorites({ ...product, added: { ...item } }));
    handleRefresh();
  };
  const handleRefresh = () => {
    setItem({
      colorId: colorTypeId,
      size: null,
      quanity: 1,
    });
  };

  return (
    <StyledInfo>
      <h4>Substainable Materials</h4>
      <h1 className="large-font">{product.productName}</h1>
      <small>{product.targetObj}</small>

      <div className="price">
        ${product.price}
        {product.oldPrice ? <del>${product.oldPrice}</del> : ""}
      </div>

      <Colors images={product.images} handleColorChange={handleColorChange} />

      <Sizes
        selectedSizeId={item.size}
        error={{ isError: error, handleError }}
        sizes={product.sizes}
        handleSizeChange={handleSizeChange}
      />

      <div className="btns">
        <button className="add-to-bag-btn hover-w-fade" onClick={handleAdd}>
          Add to Bag
        </button>
        <button className="favorite-btn" onClick={handleAddFavorite}>
          Favorite
        </button>
      </div>

      <div className="shipping sb">
        <div className="small-title regular-font">Shipping*</div>
        <p className="regular-font">
          To get accurate shipping information
          <br />
          <a
            className="edit-location underlined hover-w-hl-udl"
            href="/"
            target="_blank"
          >
            Edit Location
          </a>
        </p>
      </div>

      <div className="free-pickup sb regular-font">
        <div className="small-title">Free Pickup</div>
        <a href="/" className="underlined hover-w-hl-udl" target="_blank">
          Find a Store
        </a>

        <p>
          <small>*Faster Shipping options may be available</small>
        </p>
      </div>

      <div className="short-desc sb regular-font">
        <p>
          Designed for running but adopted by the streets, the Nike VaporMax
          2021 FK gives your attitude an edge. Why? The revolutionary, pillowy
          Air unit is made for lasting comfort. Plus, the airy Flyknit upper is
          fun to look at, but it's also lightweight and incredibly versatile
          whether you're jogging after work or hitting the shops.
        </p>

        <ViewProductDetails product={product} />
      </div>

      <div className="misc regular-font">
        <DetailsTag summary="Free Shipping & Returns">
          Free standard shipping and free 60-day returns for Nike Members.{" "}
          <a
            href="/"
            target="_blank"
            style={{ textDecoration: "underline" }}
            className="hover-w-fade"
          >
            Learn more
          </a>
          .&nbsp;
          <a
            href="/"
            target="_blank"
            style={{ textDecoration: "underline" }}
            className="hover-w-fade"
          >
            Return policy exclusions apply
          </a>
          .
        </DetailsTag>

        <DetailsTag summary="How This Was Made">
          <ul style={{ listStyle: "initial" }}>
            <li>
              This product was responsibly designed utilizing recycled materials
              from post-consumer and/or post-manufactured waste. One of our
              biggest steps on our journey to zero carbon and zero waste is in
              choosing our materials because they account for more than 70% of
              any product's footprint. By reusing existing plastics, yarns, and
              textiles, we significantly reduce our emissions. Our goal is to
              use as much recycled materials as possible without compromising on
              performance, durability and style.
            </li>
            <li>
              Learn more about our{" "}
              <a
                href="/"
                target="_blank"
                style={{ textDecoration: "underline" }}
                className="hover-w-fade"
              >
                Move to Zero
              </a>
              &nbsp; journey towards zero carbon and zero waste, including how
              we're working to design product with sustainability in mind and
              help protect the future of where we live and play.
            </li>
          </ul>
        </DetailsTag>

        <DetailsTag summary={`Reviews (${27})`}>
          <p>This is undone.</p>
        </DetailsTag>
      </div>
    </StyledInfo>
  );
}

const DetailsTag = ({ summary, children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <details open={open}>
      <summary className="medium-font flex-spbw" onClick={handleOpen}>
        <span>{summary}</span>
        <div>
          <ArrowIcon toggle={open} />
        </div>
      </summary>
      <div className="content">{children}</div>
    </details>
  );
};

export default Info;
