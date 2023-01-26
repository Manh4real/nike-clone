import React, {
  useState,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
} from "react";
import clsx from "clsx";

import Mask from "components/Mask/Mask";
import { DropdownContext } from "../MenuLinks";
import StyledDropdownMenu from "./StyledDropdownMenu";

function DropdownMenu({ categories }, ref) {
  const [isShown, setIsShown] = useState(false);
  const { active } = useContext(DropdownContext);

  useLayoutEffect(() => {
    setIsShown(ref.current?.id === active);
  }, [ref, active]);

  useImperativeHandle(
    ref,
    () => ({
      id: categories.id,
    }),
    [categories.id]
  );

  return (
    <StyledDropdownMenu
      id={categories.id}
      className={clsx({ active: isShown })}
    >
      {categories.list.map((ctg, i) => {
        return (
          <div key={i}>
            <h3>{ctg.name}</h3>
            <Titles titles={ctg.titles} />
          </div>
        );
      })}
      {isShown && <Mask isShown={isShown} />}
    </StyledDropdownMenu>
  );
}

const Titles = ({ titles }) => (
  <ul>
    {titles.map((title, i) => (
      <Title key={i} title={title} />
    ))}
  </ul>
);

const Title = ({ title }) => (
  <li>
    <a tabIndex="-1" href="/">
      {title}
    </a>
  </li>
);

export default React.forwardRef(DropdownMenu);
// export default DropdownMenu;
