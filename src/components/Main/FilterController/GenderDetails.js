import { DetailsTag } from "components/DetailsTag";
// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

import GenderInput from "./GenderInput";
// import { setGender } from "./actions";

const GenderDetails = ({ handleClick }) => {
  // const [searchParams] = useSearchParams();
  // const [boyCbChecked, setBoyCbChecked] = useState(
  //   searchParams.get("of") === "boy"
  // );
  // const [girlCbChecked, setGirlCbChecked] = useState(
  //   searchParams.get("of") === "girl"
  // );

  // const handleBoyCbCheckedChange = () => {
  //   setBoyCbChecked(searchParams.get("of") === "boy");
  // };
  // const handleGirlCbCheckedChange = () => {
  //   setGirlCbChecked(searchParams.get("of") === "girl");
  // };

  return (
    <>
      <DetailsTag open summary="Gender: " className="filter-ctg gender-ctn">
        <GenderInput handleClick={handleClick} id="m-gender" gender="male" />
        <GenderInput handleClick={handleClick} id="f-gender" gender="female" />
        <GenderInput handleClick={handleClick} id="u-gender" gender="unisex" />
      </DetailsTag>
      <DetailsTag open summary="Kids: " className="filter-ctg kids-gender-ctn">
        <div>
          <input
            type="radio"
            name="gender"
            id="b-gender"
            // checked={boyCbChecked}
            // onChange={handleBoyCbCheckedChange}
          />
          <label
            htmlFor="b-gender"
            onClick={() => handleClick({ filter: "gender", of: "boy" })}
          >
            Boys
          </label>
          <br />
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            id="g-gender"
            // checked={girlCbChecked}
            // onChange={handleGirlCbCheckedChange}
          />
          <label
            htmlFor="g-gender"
            onClick={() => handleClick({ filter: "gender", of: "girl" })}
          >
            Girls
          </label>
        </div>
      </DetailsTag>
    </>
  );
};

export default GenderDetails;
