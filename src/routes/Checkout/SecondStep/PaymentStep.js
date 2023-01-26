import React from "react";

import Step from "../Step";
import { useCheckoutStepContext } from "../Steps";

function PaymentStep() {
  const { setStep } = useCheckoutStepContext();

  return (
    <Step ownStep={2} title="Payment">
      {({ handleDone }) => {
        return (
          <button
            className="grey-bg"
            onClick={() => {
              setStep((prev) => prev + 1);
              handleDone();
            }}
          >
            Next
          </button>
        );
      }}
    </Step>
  );
}

export default PaymentStep;
