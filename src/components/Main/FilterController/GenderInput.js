// import { setGender } from "./actions";

// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

const GenderInput = ({ handleClick, id, gender }) => {
  // const [searchParams] = useSearchParams();
  // const [checked, setChecked] = useState(searchParams.get("of") === gender);
  // const handleChange = () => {
  //   setChecked(searchParams.get("of") === gender);
  // };

  return (
    <div>
      <input
        type="radio"
        name="gender"
        id={id}
        // checked={checked}
        // onChange={handleChange}
      />
      <label
        htmlFor={id}
        onClick={() => handleClick({ filter: "gender", of: gender })}
      >
        {gender}
      </label>
      <br />
    </div>
  );
};

export default GenderInput;
