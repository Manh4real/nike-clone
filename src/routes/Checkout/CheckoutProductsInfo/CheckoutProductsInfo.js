import React from "react";

// Redux-related
import { useBag } from "App";

import CheckoutProduct from "./CheckoutProduct";

function CheckoutProductsInfo() {
  const bag = useBag();

  const subtotal = bag.reduce((a, p) => a + p.price * p.added.quanity, 0);
  const shipping = 0;
  const tax = 0;

  return (
    <div className="checkout__info checkout__block">
      <div className="title checkout__info-title flex-spbw">
        IN YOUR BAG
        <a href="/cart" className="small-font">
          Edit
        </a>
      </div>
      <main>
        <div className="checkout__prices">
          <div className="row flex-spbw">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="row flex-spbw">
            <span>Estimated Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="row flex-spbw">
            <span>Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="row flex-spbw checkout__total-row">
            <span className="checkout__total regular-font">Total</span>
            <span className="checkout__total-price">
              ${(subtotal + shipping + tax).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="checkout__products">
          <div className="title checkout__time">ARRIVES BY MON, FEB 21</div>
          {bag.length &&
            bag.map((product, i) => {
              return <CheckoutProduct key={i} product={product} />;
            })}
        </div>
      </main>
    </div>
  );
}

export default CheckoutProductsInfo;
