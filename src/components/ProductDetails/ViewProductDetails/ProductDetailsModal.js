import React from "react";

import { toModalRoot } from "components";
import { CloseIcon } from "components/Icons";

import StyledProductDetailsModal from "./StyledProductDetailsModal";

const ProductDetailsModal = ({ product, handleClose }) => {
  return (
    <StyledProductDetailsModal onClick={handleClose}>
      <div
        className="product-details-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex-start">
          <div className="image">
            <img src={"/images/product-1.jpg"} width="75" height="75" alt="" />
          </div>
          <div className="regular-font">
            <div className="capitalized-text">{product.productName}</div>
            <div className="price">${product.price}</div>
          </div>
        </header>
        <main>A lot more...</main>

        <div className="close-btn-ctn" onClick={handleClose}>
          <button>
            <CloseIcon w={12} h={12} />
          </button>
        </div>
      </div>
    </StyledProductDetailsModal>
  );
};

export default toModalRoot(ProductDetailsModal);
