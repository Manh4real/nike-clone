import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { ShownImageModal } from "./ShownImageModal";

function Images({ images }) {
  return (
    <>
      <div className="card">
        <svg height="20px" width="20px" fill="#111" viewBox="0 0 25 32">
          <path d="M12.48 4l-3.04 8.96-9.44.32 7.6 5.6L4.96 28l7.68-5.44 7.84 5.28-2.8-9.04 7.52-5.76-9.52-.08z"></path>
        </svg>
        <span>Highly rated</span>
      </div>
      <div className="images-ctn">
        {images.map((i, index) => (
          <Image
            className={images.length > 1 ? "" : "grid-col-span-2"}
            key={index}
            src={i}
          />
        ))}
      </div>
    </>
  );
}

const Image = ({ className, src }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.querySelector("body").style.overflow = show ? "hidden" : "initial";
  }, [show]);

  const handleOpen = () => {
    console.log("open");
    setShow(true);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    console.log("close");
    setShow(false);
  };

  return (
    <div className={clsx("detail-image", className)} onClick={handleOpen}>
      <img src={src} alt="" />
      {show && (
        <ShownImageModal shown={show} src={src} handleClose={handleClose} />
      )}
    </div>
  );
};

export default Images;
