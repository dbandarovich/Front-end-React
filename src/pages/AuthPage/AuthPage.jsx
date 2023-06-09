import React from "react";

import styles from "./AuthPage.module.scss";

import leftImage from "../../assets/authimage.png";
import arrow from "../../assets/arrow.png";

import { AuthForm } from "../../components";

export const AuthPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftImage}>
        <img src={leftImage} />
      </div>
      <div className={styles.rightAuth}>
        <img className={styles.arrow} src={arrow} />
        <div className={styles.containerForm}>
          <div className={styles.formAuth}>
            <h1>
              Добро пожаловать <br />в <span>FamilyBudget</span>
            </h1>
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
};
