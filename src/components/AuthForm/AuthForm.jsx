import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import "./styles.scss";

import {Button} from "../Button";
import {Facebook, Google, ShowPassword} from "../../icons";
import {fetchAuth} from "../../redux/reducers/AuthReducer";
import {useDispatch} from "react-redux";
import { RegistrationForm } from "../RegistrationForm";
import { PasswordField } from "../PasswordField";

export const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);

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
        onSubmit={(values, {setSubmitting}) => {
          dispatch(fetchAuth(values))
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Электронная почта*</label>
            <Field type="email" name="email" placeholder="Введите вашу почту" />
            <ErrorMessage name="email" component="p" />
            <PasswordField label="Пароль*" placeholder="Введите ваш пароль" />
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
              Не имеете аккаунта?{" "}
              <span onClick={() => setIsRegister(true)}>Зарегистрируйтесь</span>
            </div>
          </Form>

        )}
      </Formik>
      {isRegister && <RegistrationForm />}
    </div>
  );
};
