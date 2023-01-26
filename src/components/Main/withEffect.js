import { useState } from "react";

export const withEffect = (Product) => {
  return function WithEffect(props) {
    WithEffect.displayName = `WithEffect(${Product.name})`;
    const [isHovered, setIsHovered] = useState(false);
    const [img, setImg] = useState("");

    const handleEnter = () => {
      setIsHovered(true);
    };
    const handleLeave = () => {
      setIsHovered(false);
    };
    const handleImageChange = (src) => {
      setImg(src);
    };

    return (
      <Product
        isHovered={isHovered}
        img={img}
        handleEnter={handleEnter}
        handleLeave={handleLeave}
        handleImageChange={handleImageChange}
        {...props}
      />
    );
  };
};
