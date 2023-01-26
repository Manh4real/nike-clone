import React from "react";

import Step from "../Step";
import { useCheckoutStepContext } from "../Steps";

function OrderReviewStep() {
  const { setStep } = useCheckoutStepContext();

  return (
    <Step ownStep={3} title="Order Review">
      {({ handleDone }) => {
        return (
          <div className="checkout__step-content">
            Order Review.
            <button
              className="grey-bg"
              onClick={() => {
                setStep((prev) => prev + 1);
                handleDone();
              }}
            >
              Next
            </button>
          </div>
        );
      }}
    </Step>
  );
}

export default OrderReviewStep;
