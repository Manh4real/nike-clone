import React, { useContext, useEffect, useState } from "react";

import { DeliveryMethodStep } from "./FirstStep";
import { PaymentStep } from "./SecondStep";
import { OrderReviewStep } from "./ThirdStep";

const CheckoutStepContext = React.createContext({});
export const useCheckoutStepContext = () => useContext(CheckoutStepContext);

function Steps() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 4) alert("Checkout all done.");
  }, [step]);

  return (
    <CheckoutStepContext.Provider value={{ step, setStep }}>
      <div className="steps grid-col-span-2">
        <DeliveryMethodStep />
        <PaymentStep />
        <OrderReviewStep />
      </div>
    </CheckoutStepContext.Provider>
  );
}

export default Steps;
