import React, { useEffect, useRef, useState } from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { BsCheckLg } from "react-icons/bs";

import { fetchRegistration } from "../../redux/reducers/RegistrationReducer";

import styles from "./RegistrationForm.module.scss";

import { ArrowDown } from "../../icons";
import { Button, PasswordField } from "../../components";

const FormSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Минимальная длинна 6 символов")
    .matches(/[0-9]/, "Пароль должен содержать цифру от 0 до 9")
    .matches(/[a-z]/, "Пароль должен содержать буквы в нижнем регистре")
    .matches(/[A-Z]/, "Пароль должен содержать буквы в верхнем регистре"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Неверный адрес электронной почты"
    )
    .required("Обязательное поле"),
});

export const RegistrationForm = ({ setIsOpenRegistration }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const registrationRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!registrationRef.current.contains(e.target))
        setIsOpenRegistration(false);
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
          firstName: "",
          lastName: "",
          currency: "(₽) RUB",
          password: "",
          confirmPassword: "",
          userCheck: false,
        }}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(fetchRegistration(values));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form ref={registrationRef} className={styles.form}>
            <label>Электронная почта*</label>
            <Field type="email" name="email" placeholder="Введите вашу почту" />
            {errors.email && <p>{errors.email}</p>}
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
                <option value="RUS-RUB">(₽) RUB</option>
                <option value="BLR-BYN">(Br) BYN</option>
                <option value="USA-USD">($) USD</option>
                <option value="EU-EUR">(€) EUR</option>
                <option value="KAZ-KZT">(₸) KZT</option>
              </Field>
              <ArrowDown className={styles.arrow} />
            </div>
            <PasswordField label="Пароль" placeholder="Введите пароль" />
            {errors.password && <p>{errors.password}</p>}
            <PasswordField
              name="confirmPassword"
              placeholder="Введите повторно пароль"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            <label>Проверка</label>
            <label className={styles.checkboxWrapper}>
              <Field
                onClick={() => setIsChecked((prevState) => !prevState)}
                type="checkbox"
                name="userCheck"
              />{" "}
              <span>Я не робот</span>
              {isChecked && <BsCheckLg className={styles.checkIcon} />}
            </label>

            <Button
              className={styles.registrButton}
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
