import React from "react";

import "./ProductImages.css";

function ProductImages({ images, handleImageChange }) {
  return (
    <div className="changable-images">
      {images.map((image, i) => (
        <Img key={i} src={image} onClick={() => handleImageChange(image)} />
      ))}
    </div>
  );
}

const Img = (props) => {
  return <img {...props} width="40" alt="" />;
};

export default ProductImages;
