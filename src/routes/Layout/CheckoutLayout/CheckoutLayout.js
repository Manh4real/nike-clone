import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

import { Bag } from "components/Header/Bag";
import { Logo } from "components/Icons";
import SubFooterMenu from "components/Footer/SubFooterMenu";

import StyledCheckoutLayout from "./StyledCheckoutLayout";

// Redux-related
import { useSelector } from "react-redux";
import {
  selectUser,
  selectUserStatus,
  useIsLoggedIn,
  useUserStatusLoading,
} from "features/user/userSlice";
import Spinner from "components/Spinner";

function CheckoutLayout() {
  const user = useSelector(selectUser);
  const isIdle = useSelector(selectUserStatus) === "idle";
  const isLoggedIn = useIsLoggedIn();
  const isLoading = useUserStatusLoading();
  const location = useLocation();

  if (isIdle) return "";

  let content;
  if (isLoading) {
    content = (
      <div className="checkout-spinner flex-center">
        <Spinner />
      </div>
    );
  } else if (!isLoggedIn) {
    content = (
      <Navigate to="/sign-in" state={{ from: location }} replace={true} />
    );
  } else {
    content = (
      <div>
        <header className="checkout__header flex-spbw">
          <a href="/">
            <Logo />
          </a>

          <div className="flex-start">
            <div className="checkout__bag-ctn flex-center">
              <Bag />
            </div>
            <a href="/account" className="capitalized-text">
              {user.name.firstName} {user.name.lastName}
            </a>
          </div>
        </header>
        <main className="checkout__content">
          <Outlet />
        </main>
        <footer className="checkout__footer">
          <SubFooterMenu />
        </footer>
      </div>
    );
  }

  return <StyledCheckoutLayout>{content}</StyledCheckoutLayout>;
}

export default CheckoutLayout;
