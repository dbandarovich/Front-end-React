import React from "react";

import styles from "./PasswordRecoveryInfo.module.scss";

import repairInfo from "../../assets/repairPassword.png";

export const PasswordRecoveryInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h2>На вашу почту отправлена ссылка для восстановления</h2>
        <img src={repairInfo} alt="repairInfo" />
      </div>
    </div>
  );
};
