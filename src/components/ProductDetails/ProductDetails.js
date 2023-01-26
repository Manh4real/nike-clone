import React from "react";
import { useParams } from "react-router-dom";

import StyledProductDetails from "./StyledProductDetails";

import Details from "./Details";
import { useGetProductQuery } from "features/productsApi";
import Spinner from "components/Spinner";

function ProductDetails() {
  const { productId } = useParams();
  const { data: product, isLoading } = useGetProductQuery(productId);
  let content;

  if (isLoading) {
    content = <Spinner />;
  } else {
    content = product ? <Details product={product} /> : <NotFoundProduct />;
  }

  return <StyledProductDetails>{content}</StyledProductDetails>;
}

const NotFoundProduct = () => {
  return <h1>Not found product.</h1>;
};

export default ProductDetails;
