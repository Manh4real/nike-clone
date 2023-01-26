import React, { useContext, useReducer, useState } from "react";

import FilterContainer from "./FilterContainer";
import ProductList from "../ProductList";
import FilterContext from "./context";
import { ProductListTitle } from "../ProductListTitle";

import { reducer } from "./reducer";

const initialState = { type: undefined, gender: undefined, price: undefined };

export const useFilterContext = () => useContext(FilterContext);

function FilterController(props) {
  const [filter, dispatch] = useReducer(reducer, initialState);
  const [productsNum, setProductsNum] = useState(0);

  return (
    <FilterContext.Provider
      value={{ filter, dispatch, productsNum, setProductsNum }}
    >
      <div className="main-content-ctn">
        <ProductListTitle {...props} />
        <div className="main-content-ctn-ctn">
          <div className="main-product-list-ctn">
            <FilterContainer {...props} />
            <ProductList />
          </div>
        </div>
      </div>
    </FilterContext.Provider>
  );
}

export default FilterController;
