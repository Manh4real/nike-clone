import React from "react";
import { Link } from "react-router-dom";

import CancelButton from "components/CancelButton/CancelButton";
import { HeartIcon } from "components/Icons";
import { Bag } from "../Bag/";

import styles from "./HeaderIcons.module.css";

function HeaderIcons({ showCancelBtn, close }) {
  return (
    <div className={styles["fvr-bg-cnb-ctn"]}>
      <div className={styles["fvr-nd-bg-ctn"]}>
        <div className={styles["favorite"]}>
          <Link to="/favorites">
            <HeartIcon />
          </Link>
        </div>
        <Bag />
        <CancelButton close={close} showCancelBtn={showCancelBtn} />
      </div>
    </div>
  );
}

export default HeaderIcons;
