import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useLayoutEffect,
  useCallback,
} from "react";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

import FilterContext from "./FilterController/context";

import Product, { ProductWithEffect } from "./Product";
import { data } from "./data";
import styles from "./ProductList.module.css";
import api from "api";

function ProductList() {
  const [searchParams] = useSearchParams();
  // const [first, setFirst] = useState(true);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { filter, setProductsNum } = useContext(FilterContext);

  const getSortedProducts = useCallback(
    (list) => {
      let sort = searchParams.get("sort");
      if (!sort) return list;

      const newList = [...list];

      switch (sort) {
        case "priceAsc":
          newList.sort((a, b) => a.price - b.price);
          break;
        case "priceDesc":
          newList.sort((a, b) => b.price - a.price);
          break;
        case "featured":
        case "newest":
          return list;
        default:
          // return list;
          throw new Error("Can't sort products!");
      }

      return newList;
    },
    [searchParams]
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const filterList = Object.keys(filter).filter((k) => filter[k]);
      if (
        !filterList.length &&
        !searchParams.get("filter") &&
        !searchParams.get("sort") &&
        !searchParams.get("search")
      ) {
        const response = await api.get("/products");
        setList(response.data);
        // setFirst(false);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filter, searchParams]);

  useEffect(() => {
    setProductsNum(list.length);
  }, [list, setProductsNum]);

  useLayoutEffect(() => {
    const filterList = Object.keys(filter).filter((k) => filter[k]);

    if (
      !filterList.length &&
      !searchParams.get("filter") &&
      !searchParams.get("sort") &&
      !searchParams.get("search")
    )
      return;
    console.log("Sortin' and Filterin' or searchin'...");

    const getProducts = () => {
      const fsp = searchParams.get("filter");
      const of = searchParams.get("of");
      const search = searchParams.get("search");

      const o = data.filter(isOfFilter);
      setList(() => getSortedProducts(o));
      setLoading(false);

      function isOfFilter(product) {
        const hasSearch =
          search &&
          product.productName.toLowerCase().startsWith(search.toLowerCase());
        let c = filterList.every((f) => product[f] === filter[f]);

        if (search) c = c && hasSearch;
        if (of) return of === product[fsp] && c;
        else return c;
      }
    };

    const timeID = setTimeout(getProducts, 3000);
    setLoading(true);

    return () => clearTimeout(timeID);
  }, [filter, getSortedProducts, searchParams]);

  // These lines below might be rebundant.
  const output = useMemo(() => {
    const getFinalProducts = (product) => {
      const props = {
        key: Math.random(), // dont't get remembered each re-rendering
        product,
      };

      if (product.images.length > 1) {
        return <ProductWithEffect {...props} />;
      }
      return <Product {...props} />;
    };

    return list.map(getFinalProducts);
  }, [list]);

  return (
    <div className={styles["products-container"]}>
      <div className={styles.products} id={styles["product-list"]}>
        {list.length > 0 ? output : <Empty />}
      </div>
      <Loader isLoading={loading} />
    </div>
  );
}

const Loader = ({ isLoading }) => {
  return (
    <div
      className={clsx(styles.loader, { [styles["is--loading"]]: isLoading })}
    ></div>
  );
};

const Empty = () => <p className={styles["found-none"]}>No products found.</p>;

export default React.memo(ProductList);
