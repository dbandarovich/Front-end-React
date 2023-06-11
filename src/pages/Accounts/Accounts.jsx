import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {setAuth} from "../../redux/reducers/AuthReducer";

export const Accounts = () => {
    const isAuth = useSelector((state) => state.auth.auth);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(setAuth(null));
        delete localStorage.token;
        delete localStorage.email;
    };

    return !isAuth ? (
        <Navigate to="/login"/>
    ) : (
        <>


                <button
                    style={{width: 200, height: 50, background: "#023576"}}
                    onClick={logout}
                >
                    Logout
                </button>
        </>
    );
};
