import React, { useState, useEffect, useMemo } from "react";
import MenuLink from "./MenuLink";
import { LIST } from "./index";

const DropdownContext = React.createContext({});

const MenuLinks = ({ toggle }) => {
  const [list, setList] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => setList(LIST), []);

  const handleAddDropdown = (el) => setActive(el);

  const removeDropdown = () => {
    if (document.activeElement === active) return;
    handleAddDropdown(null);
  };

  const output = useMemo(() => {
    return list.map((l) => <MenuLink key={l.name} l={l} />);
  }, [list]);

  return (
    <DropdownContext.Provider
      value={{ active, removeDropdown, handleAddDropdown, toggle }}
    >
      <ul onMouseLeave={removeDropdown}>{output}</ul>
    </DropdownContext.Provider>
  );
};
MenuLinks.displayName = "MenuLinks";

export { DropdownContext };
export default React.memo(MenuLinks);
