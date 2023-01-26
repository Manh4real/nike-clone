import React, { useEffect, useState } from "react";
import { stringifyDate } from "script";

const ShippingInfo = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const date = new Date(Date.now() + 3 * 86400 * 1000);
    const r = stringifyDate(date);
    const timeID = setTimeout(() => setDate(r), 2000);

    return () => clearTimeout(timeID);
  }, []);

  return (
    <div className="regular-font">
      <h4>Shipping</h4>
      <p>
        Arrives by {date} to&nbsp;
        <button className="underlined regular-font hover-w-hl-udl">
          15000
        </button>
      </p>
    </div>
  );
};

export default ShippingInfo;
