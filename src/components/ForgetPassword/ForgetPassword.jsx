import React, { useEffect, useRef } from "react";
import { Field, Form, Formik } from "formik";

import styles from "./ForgetPassword.module.scss";

import { Button, UserCheckField } from "../../components";

export const ForgetPassword = ({ setIsOpenForgetPassword }) => {
  const forgetPasswordRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!forgetPasswordRef.current.contains(e.target))
        setIsOpenForgetPassword(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{
          email: "",
          userCheck: false,
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form ref={forgetPasswordRef} className={styles.form}>
            <h2>Забыли пароль?</h2>
            <h3>
              Введите вашу почту, и мы отправим вам письмо для восстановление
              пароля
            </h3>
            <label>Электронная почта*</label>
            <Field type="email" name="email" placeholder="Введите вашу почту" />
            {errors.email && <p>{errors.email}</p>}
            <UserCheckField />

            <Button
              className={styles.registrButton}
              isSubmitting={isSubmitting}
              type="submit"
              text="Восстановить пароль"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
