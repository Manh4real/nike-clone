import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import GlobalStyles from "./components/GlobalStyles";
import "./App.css";

// Redux-related
import { useDispatch, useSelector } from "react-redux";
import { fetchBag, selectAllBaggedItems } from "features/bag/bagSlice";
import { fetchUser } from "features/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBag());
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <GlobalStyles>
      <Outlet />
    </GlobalStyles>
  );
}

export const useBag = () => {
  const bag = useSelector(selectAllBaggedItems);

  return bag;
};

export default App;
