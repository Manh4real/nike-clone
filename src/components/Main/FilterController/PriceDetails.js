import React, { useState } from "react";
import clsx from "clsx";

import ExpandingButton from "./ExpandingButton";
import { DetailsTag } from "components/DetailsTag";

import styles from "./PriceDetails.module.css";

function PriceDetails() {
  const [expand, setExpand] = useState(false);

  return (
    <DetailsTag
      open
      summary="Shop by Price:"
      className={clsx("filter-ctg", styles["shop-by-price-ctn"], {
        [styles["expanded"]]: expand,
      })}
    >
      <div>
        <input type="checkbox" name="price" id="price-1" />
        <label htmlFor="price-1">$0 - $25 </label> <br />
      </div>
      <div>
        <input type="checkbox" name="price" id="price-2" />
        <label htmlFor="price-2">$25 - $50 </label> <br />
      </div>
      <div>
        <input type="checkbox" name="price" id="price-3" />
        <label htmlFor="price-3">$50 - $100 </label> <br />
      </div>
      <div>
        <input type="checkbox" name="price" id="price-4" />
        <label htmlFor="price-4">$100 - $150 </label> <br />
      </div>
      <div className={styles["additional-prices"]}>
        <div>
          <input type="checkbox" name="price" id="price-5" />
          <label htmlFor="price-5">Over $150 </label>
        </div>
      </div>
      <ExpandingButton
        activeExpand={expand}
        onClick={() => setExpand((prev) => !prev)}
      />
    </DetailsTag>
  );
}

export default PriceDetails;
