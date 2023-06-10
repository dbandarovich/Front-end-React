import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";

import {fetchRegistration} from "../../redux/reducers/RegistrationReducer";

import styles from "./RegistrationForm.module.scss";

import {ArrowDown} from "../../icons";
import {Button, PasswordField} from "../../components";

export const RegistrationForm = ({setIsRegister}) => {
  const dispatch = useDispatch();
  return (

    <div className={styles.wrapper} onClick={() => setIsRegister(false)}>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          currency: "(₽) RUB",
          password: "",
          confirmPassword: "",
          userCheck: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Обязательное поле";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Неверный адрес";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(fetchRegistration(values));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form} onClick={e => e.stopPropagation()}>
            <label>Электронная почта*</label>
            <Field type="email" name="email" placeholder="Введите вашу почту" />
            <ErrorMessage name="email" component="p" />
            <div className={styles.inputsWrapper}>
              <div>
                <label>Имя</label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Введите вашу имя"
                />
              </div>
              <div>
                <label>Фамилия</label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Введите вашу фамилию"
                />
              </div>
            </div>
            <div>
              <label>Выбор валюты</label>
              <Field as="select" name="currency">
                <option value="(₽) RUB">(₽) RUB</option>
                <option value="BYN">BYN</option>
              </Field>
              <ArrowDown className={styles.arrow} />
            </div>
            <PasswordField label="Пароль" placeholder="Введите пароль" />
            <ErrorMessage name="password" component="p" />
            <PasswordField
              name="confirmPassword"
              placeholder="Введите повторно пароль"
            />
            <label>Проверка</label>
            <Field className={styles.check} type="checkbox" name="userCheck" />
            <Button
              className="main-form-button"
              isSubmitting={isSubmitting}
              type="submit"
              text="Зарегистрироваться"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
