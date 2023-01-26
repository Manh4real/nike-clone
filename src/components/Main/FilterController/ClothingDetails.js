import React, { useState } from "react";

import clsx from "clsx";

import { setType } from "./actions";
import { types } from "../data";

function ClothingDetails({ handleClick }) {
  const [active, setActive] = useState(false);

  const _handleClick = (e, action) => {
    handleClick(action);
    setActive(e.currentTarget.dataset.type);
  };

  return (
    <div className="filter-ctg clothing-type">
      <ul>
        {types.map((type, i) => {
          const filterName = { "data-type": type.filterName };
          return (
            <Li
              key={i}
              {...filterName}
              type={type.filterName}
              active={active}
              handleClick={(e) => _handleClick(e, setType(type.filterName))}
            >
              {type.name}
            </Li>
          );
        })}
      </ul>
    </div>
  );
}

const Li = (props) => {
  const { handleClick, type, active, ...otherProps } = props;
  return (
    <li {...otherProps} onClick={handleClick}>
      <a
        href="/"
        onClick={(e) => e.preventDefault()}
        className={clsx({ active: type === active })}
      >
        {props.children}
      </a>
    </li>
  );
};

export default ClothingDetails;
