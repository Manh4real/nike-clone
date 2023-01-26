import React, { useMemo, useState } from "react";
import clsx from "clsx";

import { LocationArrowIcon } from "components/Icons";
import { Validation } from "script";

function PickupMethod() {
  const [code, setCode] = useState("");
  const [first, setFirst] = useState(true);

  const validation = useMemo(() => {
    return new Validation("pickup-method");
  }, []);

  const handleChange = (e) => {
    setCode(e.target.value);
    setFirst(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Postal code: ", validation.getAll());
  };
  const handleFindingStore = () => {
    alert("Finding stores...");
  };

  const c = !first && validation.validatePostal(code);

  return (
    <form className="checkout__form checkout__form-grid checkout__step-pickup-form">
      <div className="title row grid-col-span-2">SELECT A STORE LOCATION</div>
      <div
        className={clsx("checkout__form-input postal-code-input", {
          "is--error": Boolean(c),
        })}
      >
        <input
          className="checkout__block"
          value={code}
          onChange={handleChange}
          placeholder="Postal Code"
        />
        <button
          title="Find Stores Near You"
          type="button"
          onClick={handleFindingStore}
          className="location-btn flex-center"
        >
          <LocationArrowIcon w="14" h="14" fill="var(--darker-grey)" />
        </button>
        {c}
      </div>
      <button type="submit" className="apply-btn">
        <span className="underlined" onClick={handleSubmit}>
          Apply
        </span>
      </button>
      <div className="grid-col-span-2 row message">
        Enter your zip code to find a pickup location near you.
      </div>
    </form>
  );
}

export default PickupMethod;
