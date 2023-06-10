import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

import "./styles.scss";

import {Button} from "../Button";
import {Facebook, Google} from "../../icons";

import {RegistrationForm} from "../RegistrationForm";
import {PasswordField} from "../PasswordField";
import {apiInstance} from "../../redux/api/api";
import {useDispatch} from "react-redux";
import {setAuth} from "../../redux/reducers/AuthReducer";

export const AuthForm = () => {
    const [isRegister, setIsRegister] = useState(false);
    const dispatch = useDispatch()
    return (
        <div>
            <Formik
                initialValues={{email: "", password: ""}}
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
                    apiInstance.post(`authentication`, {
                        email: values.email,
                        password: values.password,
                    }).then((res) => {
                        dispatch(setAuth(res.data.token));
                        localStorage.token = res.data.token;
                    });

                    setSubmitting(false);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <label>Электронная почта*</label>
                        <Field type="email" name="email" placeholder="Введите вашу почту"/>
                        <ErrorMessage name="email" component="p"/>
                        <PasswordField label="Пароль*" placeholder="Введите ваш пароль"/>
                        <ErrorMessage name="password" component="p"/>
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
                                <Google/>
                                <span>Google</span>
                            </button>
                            <button>
                                <Facebook/> <span>Facebook</span>
                            </button>
                        </div>
                        <div className="register">
                            Не имеете аккаунта?{" "}
                            <span onClick={() => setIsRegister(true)}>Зарегистрируйтесь</span>
                        </div>
                    </Form>
                )}
            </Formik>
            {isRegister && <RegistrationForm setIsRegister={setIsRegister}/>}
        </div>
    );
};
