import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import clsx from "clsx";

import SortButton from "./SortButton";
import ToggleFilterButton from "./ToggleFilterButton";
import { useFilterContext } from "../FilterController/FilterController";

import "./ProductListTitle.css";

function ProductListTitle(props) {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const [sticked, setSticked] = useState(false);
  const { filter, productsNum } = useFilterContext();

  const search = searchParams.get("search");
  const ctg = toWords(category);

  const filterTitle = toWords(filter.type || "");
  const add = filterTitle && ` / ${filterTitle}`;
  const title = search ? `Search for: ${search}` : ctg;

  useEffect(() => {
    const handleStick = () => {
      if (window.scrollY > 169.8) setSticked(true);
      else setSticked(false);
    };

    window.addEventListener("scroll", handleStick);
    return () => window.removeEventListener("scroll", handleStick);
  }, []);

  return (
    <div className={clsx("product-list-title-ctn", { isSticked: sticked })}>
      <h1 className="title">
        <span className="capitalized-text">
          {title || "All products"}
          <span className="regular-font">{add}</span>
          <span>({productsNum})</span>
        </span>
      </h1>
      <div className="btns">
        <ToggleFilterButton {...props} />
        <SortButton />
      </div>
    </div>
  );
}

const toWords = (s) => {
  return s?.replace(/-/g, " ")?.replace(/_/, "-");
};

export default ProductListTitle;
