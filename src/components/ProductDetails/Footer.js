import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import { Carousel } from "../Carousel";
import StyledFooter from "./StyledFooter";

function Footer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeID = setTimeout(() => setLoading(false), 10000);

    return () => clearTimeout(timeID);
  }, []);

  return (
    <StyledFooter>
      {loading ? (
        <TailSpin color="#111" height={32} width={32} ariaLabel="loading" />
      ) : (
        <Carousel title="You Might Also Like" />
      )}
    </StyledFooter>
  );
}

export default Footer;
