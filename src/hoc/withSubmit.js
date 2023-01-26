import React, { useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SIGN_IN, SIGN_UP, Validation } from "script";

// Redux-related
import { useDispatch } from "react-redux";
import { signIn, signUp } from "features/user/userSlice";

const timeIDs = [];

const withSubmit = (Form, current) => {
  return function WithSubmit({ ...otherProps }) {
    WithSubmit.displayName = "WithSubmit(Form)";

    const [first, setFirst] = useState(true);
    const [processing, setProcessing] = useState(false);

    const userDispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    console.log("Form location state: ", location.state);

    const validation = useMemo(() => {
      return new Validation(current);
    }, []);

    useEffect(() => {
      timeIDs.forEach((timeID) => clearTimeout(timeID));
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (validation.isAllValid()) {
        console.log("Success: ", validation.getAll());

        switch (current) {
          case SIGN_UP:
            let t1 = setTimeout(() => {
              setProcessing(false);
              userDispatch(signUp(validation.getAll()));
            }, 2000);
            timeIDs.push(t1);
            setProcessing(true);
            break;

          case SIGN_IN:
            let t2 = setTimeout(() => {
              setProcessing(false);
              userDispatch(signIn(validation.getAll()));
            }, 2000);
            timeIDs.push(t2);
            setProcessing(true);
            break;
          default:
            throw new Error("Something went wrong...");
        }

        let t = setTimeout(() => {
          // const c = JSON.parse(localStorage.getItem("currentUser"));
          const c = JSON.parse(localStorage.getItem("currentUser_Redux"));
          if (c) {
            navigate(location.state?.from?.pathname || -1, { replace: true });
          }
        }, 3000);

        timeIDs.push(t);
      } else {
        console.log("Fail: ", validation.getAll());
        setFirst(false);
      }
    };

    return (
      <Form
        {...otherProps}
        processing={processing}
        first={first}
        handleSubmit={handleSubmit}
        validation={validation}
      />
    );
  };
};

export { withSubmit };
