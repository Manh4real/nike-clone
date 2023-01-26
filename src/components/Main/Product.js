import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./Product.module.css";

import ProductImages from "./ProductImages";
import { withEffect } from "./withEffect";

const Product = ({
  product,
  img,
  isHovered,
  handleImageChange,
  handleEnter,
  handleLeave,
}) => {
  const {
    colorNum,
    images,
    category,
    productName,
    targetObj,
    price,
    onSale,
    oldPrice,
  } = product;
  const typeId = 0;

  const myRef = useRef();

  useEffect(() => {
    const c = myRef.current;
    if (handleImageChange && handleEnter && handleLeave) {
      c.addEventListener("mouseenter", handleEnter);
      c.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      c.removeEventListener("mouseenter", handleEnter);
      c.removeEventListener("mouseleave", handleLeave);
    };
  });

  return (
    <div ref={myRef} className={styles.product}>
      <div className={clsx({ [styles.hasSomeImages]: colorNum > 1 })}>
        <Link to={"/" + product.id + "/details/" + typeId}>
          <div className={styles.image}>
            <img src={img || images[0]} alt="" />
          </div>
        </Link>
        <div className={styles.title}>
          {images.length > 1 && isHovered && (
            <ProductImages
              handleImageChange={handleImageChange}
              images={images}
            />
          )}
          <Link to={"/" + product.id + "/details/" + typeId}>
            {category && <div className={styles.category}>{category}</div>}
            <div className={styles["pd-name"]}>{productName}</div>
            <div className={styles["pd-tgObj"]}>{targetObj}</div>
            <div className={styles.colorNum}>
              {colorNum}&nbsp;
              {colorNum <= 1 ? "color" : "colors"}
            </div>
            <div className={styles.price}>
              <span>{price}$</span>
              {onSale && (
                <>
                  <del>{oldPrice}$</del>
                  <div className={styles["sale-pct"]}>
                    {Math.round(100 - (price * 100) / oldPrice)}% off
                  </div>
                </>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductWithEffect = withEffect(Product);

export { ProductWithEffect };
export default Product;
