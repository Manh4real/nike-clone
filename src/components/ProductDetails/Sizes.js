import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import SizeInputs from "./SizeInputs";

function Sizes({ error, ...props }) {
  return (
    <div className="sizes">
      <header>
        <h3 className={clsx("regular-font", { "red-font": error.isError })}>
          Select size
        </h3>
        <Link to="/" className="regular-font">
          Size Guide
        </Link>
      </header>
      <SizeInputs {...error} {...props} />
    </div>
  );
}

export default Sizes;
