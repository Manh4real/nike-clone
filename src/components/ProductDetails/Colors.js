import React from "react";
import { NavLink } from "react-router-dom";

function Colors({ images, handleColorChange }) {
  return (
    <div className="items">
      {images.map((i, index) => {
        return (
          <NavLink
            to={"" + index}
            key={index}
            onClick={() => handleColorChange(index)}
          >
            <img src={i} alt=""></img>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Colors;
