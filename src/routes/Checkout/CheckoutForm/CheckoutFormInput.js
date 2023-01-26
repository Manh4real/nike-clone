import React, { useState } from "react";
import clsx from "clsx";

import { CheckIcon } from "components/Icons";

function CheckoutFormInput({
  className,
  placeholder,
  htmlPlaceholder,
  validate,
  children,
}) {
  const [value, setValue] = useState("");
  const [first, setFirst] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    setFirst(false);
  };
  const c = !first && validate(value);

  return (
    <div
      className={clsx("checkout__form-input", "flex-start", className, {
        "is--error": Boolean(c),
        "is--filled": Boolean(value),
        "is--valid": !first && !Boolean(c),
      })}
    >
      <input
        className="checkout__block"
        value={value}
        onChange={handleChange}
        placeholder={htmlPlaceholder}
      />
      {!htmlPlaceholder && (
        <React.Fragment>
          <label className="flex-start gap-5 regular-font">
            {placeholder || children}
          </label>
          <CheckIcon className="check-icon" w="12" h="12" fill="#6bd079" />
        </React.Fragment>
      )}
      {c}
    </div>
  );
}

export default CheckoutFormInput;
