import React from 'react';
import "./styles.css";
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};



    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 15) {
        errors.password = 'Must be 15 characters or less';
    }

    return errors;
};

export const AuthForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>


            <label htmlFor="email">Электронная почта*</label>
            <input
                placeholder="Введите вашу почту"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <label htmlFor="password">Пароль*</label>
            <input
                placeholder="Введите ваш пароль"
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            <button type="submit">Войти</button>
        </form>
    );
};