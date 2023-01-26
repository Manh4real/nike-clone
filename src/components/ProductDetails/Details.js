import React from "react";

import ProductDetailsFooter from "./Footer";
import Description from "./Description";
import Images from "./Images";
import Info from "./Info";

import StyledDetails from "./StyledDetails";

function Details({ product }) {
  return (
    <StyledDetails imagesNum={product?.images?.length || 0}>
      <Images images={product?.images || []} />
      <Info product={product} />
      <Description />
      <ProductDetailsFooter />
    </StyledDetails>
  );
}

export default Details;
