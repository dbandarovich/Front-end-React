import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import "./styles.scss";

import { Button } from "../Button";
import { Facebook, Google, ShowPassword } from "../../icons";

export const AuthForm = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
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
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Электронная почта*</label>
            <Field type="email" name="email" placeholder="Введите вашу почту" />
            <ErrorMessage name="email" component="p" />
            <label className="label">Пароль*</label>
            <div className="password-wrapper">
              <Field
                type={isPasswordShown ? "text" : "password"}
                name="password"
                placeholder="Введите ваш пароль"
              />
              <button
                type="button"
                onClick={() => setIsPasswordShown((prevState) => !prevState)}
                className="view-hide"
              >
                <ShowPassword />
              </button>
            </div>
            <ErrorMessage name="password" component="p" />
            <div className="forget-password">Забыли пароль?</div>
            <Button
              className="main-form-button"
              isSubmitting={isSubmitting}
              type="submit"
              text="Войти"
            />
            <div className="alter-auth">
              <span>Или войти через</span>
            </div>
            <div className="buttons-block">
              <button>
                <Google />
                <span>Google</span>
              </button>
              <button>
                <Facebook /> <span>Facebook</span>
              </button>
            </div>
            <div className="register">
              Не имеете аккаунта? <span>Зарегистрируйтесь</span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
