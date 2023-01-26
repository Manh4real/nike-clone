import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Redux-related
import { Provider } from "react-redux";
import store from "store";

import "./index.css";

import App from "App";
import {
  JoinUsPage,
  SignInPage,
  NotFound,
  Home,
  // Account,
  // Checkout,
  // Cart,
  // Favorites,
} from "./routes";
import { MainLayout, Layout, CheckoutLayout } from "routes/Layout";

import { ProductDetails } from "components/ProductDetails";
import ShopMain from "components/Main/Main";
import Spinner from "components/Spinner";

import reportWebVitals from "./reportWebVitals";
import FormLayout from "routes/Layout/FormLayout";

const Favorites = React.lazy(() => import("routes/Favorites/Favorites"));
const Checkout = React.lazy(() => import("routes/Checkout/Checkout"));
const Account = React.lazy(() => import("routes/Account/Account"));
const Cart = React.lazy(() => import("routes/Cart/Cart"));

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Spinner />}>
      <React.StrictMode>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/shop">
                  <Route index element={<ShopMain />} />
                  <Route path=":category" element={<ShopMain />} />
                </Route>
                <Route path=":productId/details" element={<ProductDetails />}>
                  <Route path=":colorTypeId" element={<ProductDetails />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route element={<Layout />}>
                <Route path="favorites" element={<Favorites />} />
                <Route path="account" element={<Account />} />
                <Route path="cart" element={<Cart />} />
              </Route>
              <Route element={<FormLayout />}>
                <Route path="join-us" element={<JoinUsPage />} />
                <Route path="sign-in" element={<SignInPage />} />
              </Route>
              <Route element={<CheckoutLayout />}>
                <Route path="/checkout" element={<Checkout />} />
              </Route>
            </Route>
          </Routes>
        </Provider>
      </React.StrictMode>
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
