import React from "react";
import clsx from "clsx";

import { LIST } from "../index";
import { useToggleMobileMenuContext } from "../TopMenu";

import StyledMobileMenuLinks from "./StyledMobileMenuLinks";
import MenuNestingLiTag from "./MenuNestingLiTag";
import MobileMenuMask from "./MobileMenuMask";

function MobileMenuLinks() {
  const { toggle, handleToggle } = useToggleMobileMenuContext();

  return (
    <>
      <StyledMobileMenuLinks className={clsx({ toggle: toggle })}>
        <ul>
          {LIST.map((item, i) => {
            return <RootMenuTitle key={i} item={item} />;
          })}
        </ul>
      </StyledMobileMenuLinks>
      <MobileMenuMask active={toggle} handleToggle={handleToggle} />
    </>
  );
}

const RootMenuTitle = ({ item }) => {
  return (
    <MenuNestingLiTag
      className="root-menu-title"
      prevIsAll={true}
      priHref={item.href}
      name={item.name}
      fontSizeClass="large-font"
    >
      <ul>
        {item.categories.list.map((ctg, i) => {
          return (
            <MenuNestingLiTag prev={item.name} key={i} name={ctg.name}>
              <ul>
                {ctg.titles.map((ct, i) => {
                  return (
                    <li key={i}>
                      <a href="/">{ct}</a>
                    </li>
                  );
                })}
              </ul>
            </MenuNestingLiTag>
          );
        })}
      </ul>
    </MenuNestingLiTag>
  );
};

export default MobileMenuLinks;
