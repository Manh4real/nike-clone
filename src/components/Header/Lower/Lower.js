import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import TopMenu from "../TopMenu";
import { Logo } from "components/Icons";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import SearchSuggestionContainer from "../SearchSuggestionContainer";
import SearchField from "../SearchField";

import styles from "./Lower.module.css";
import clsx from "clsx";

const Lower = () => {
  const [sticked, setSticked] = useState(false);
  const [showSuggestion, setSuggestion] = useState(false);

  const handleShowSuggestion = () => {
    setSuggestion(true);
  };
  const removeSuggestion = () => {
    setSuggestion(false);
  };

  useEffect(() => {
    const handleStick = () => {
      setSticked(window.scrollY >= 40);
    };

    window.addEventListener("scroll", handleStick);

    return () => window.removeEventListener("scroll", handleStick);
  });

  return (
    <div
      className={clsx(styles["lower-ctn"], {
        [styles["is--sticked"]]: sticked,
      })}
    >
      <div className={styles["lower"]}>
        <div className={styles["logo"]}>
          <Link to="/" className="logo flex-center">
            <Logo w="60" h="60" />
          </Link>
        </div>
        <div className={styles["tp-mn-nd-srch-ctn"]}>
          <SearchField
            isExpanded={showSuggestion}
            onClick={handleShowSuggestion}
            removeSuggestion={removeSuggestion}
          />
          <TopMenu />
        </div>
        <HeaderIcons
          showCancelBtn={showSuggestion}
          close={() => setSuggestion(false)}
        />
      </div>
      <SearchSuggestionContainer
        removeSuggestion={removeSuggestion}
        isShown={showSuggestion}
      />
    </div>
  );
};

export default Lower;
