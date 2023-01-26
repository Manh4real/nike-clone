import React, { useMemo } from "react";

import { SearchIcon } from "components/Icons";
import { CheckoutFormInput, CheckoutFormRadios } from "../CheckoutForm";

import { useCheckoutStepContext } from "../Steps";
import { Validation } from "script";

function ShipMethod({ handleDone }) {
  const { setStep } = useCheckoutStepContext();

  const validation = useMemo(() => {
    return new Validation("ship");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const c = validation.isAllValid();

    console.log(validation.getAll());
    if (!c) {
      alert("Fill in the right format. You know what you doin'.");
      return;
    }
    alert("That's it.");
    setStep((prev) => prev + 1);
    handleDone();
  };

  return (
    <form className="checkout__form checkout__form-grid checkout__step-ship-form">
      <div className="row grid-col-span-2 flex-start gap-15">
        <CheckoutFormRadios
          name="ship-p"
          els={[
            { id: "home-office", label: "Home/Office" },
            { id: "apo-fpo", label: "APO/FPO" },
          ]}
          validate={validation.validateRadios}
        />
      </div>
      <CheckoutFormInput
        placeholder="First Name"
        validate={validation.validateFirstName}
      />
      <CheckoutFormInput
        placeholder="Last Name"
        validate={validation.validateLastName}
      />
      <CheckoutFormInput
        className="grid-col-span-2"
        validate={validation.validateAddress}
      >
        <SearchIcon w="14px" h="14px" fill="var(--grey)" />
        Start typing the first line of your address
      </CheckoutFormInput>
      <CheckoutFormInput
        placeholder="Email"
        validate={validation.validateEmail}
      />
      <CheckoutFormInput
        placeholder="Phone Number"
        validate={validation.validatePhone}
      />

      <div className="row grid-col-span-2 flex-end">
        <button
          onClick={handleSubmit}
          className="checkout__form-button primary hover-w-fade"
        >
          Save & Continue
        </button>
      </div>
    </form>
  );
}

export default ShipMethod;
