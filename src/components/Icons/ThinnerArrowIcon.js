import React from "react";

function ThinnerArrowIcon({ toggle, type = "down", w = 12, h = 12 }) {
  switch (type) {
    case "down":
      return "";
    case "up":
      return "";
    case "left":
      return (
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="24px"
          height="24px"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M15.526 18.966L8.559 12l6.967-6.967"
          ></path>
        </svg>
      );
    case "right":
      return (
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="24px"
          height="24px"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M8.474 18.966L15.44 12 8.474 5.033"
          ></path>
        </svg>
      );

    default:
      throw new Error("Invalid type arrow icon...");
  }
}

export default ThinnerArrowIcon;
