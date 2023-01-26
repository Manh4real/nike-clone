import React from "react";
import clsx from "clsx";

function SizeInputs({
  selectedSizeId,
  sizes,
  isError,
  handleError,
  handleSizeChange,
}) {
  const handleChange = (id) => {
    handleError();
    handleSizeChange(id);
  };

  return (
    <div
      className={clsx("sizes-wrapper", {
        alert: isError,
      })}
    >
      <div className="sizes-ctn">
        {SIZES.map((s) => (
          <SizeInput
            key={s}
            sizes={sizes}
            s={s}
            selectedSizeId={selectedSizeId}
            checkWith={handleChange}
          />
        ))}
      </div>

      {isError && <AlertMessage />}
    </div>
  );
}

const SizeInput = ({ sizes, s, selectedSizeId, checkWith }) => {
  const handleChange = () => {
    checkWith(s);
  };

  return (
    <div>
      <input
        type="radio"
        name="size"
        id={"size-" + s}
        data-size={s}
        disabled={!sizes.includes(s)}
        onChange={handleChange}
        checked={selectedSizeId === s}
      />
      <label className="sz regular-font" htmlFor={"size-" + s}>
        {s}
      </label>
    </div>
  );
};

const AlertMessage = () => {
  return (
    <div className="alert-mes regular-font red-font">Please select a size.</div>
  );
};

export const SIZES = [
  6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14,
  14.5, 15,
];

export default SizeInputs;
