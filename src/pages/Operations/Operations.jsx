import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setAuth } from "../../redux/reducers/AuthReducer";

export const Operations = () => {
  const isAuth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setAuth(null));
    delete localStorage.token;
    delete localStorage.email;
  };

  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <div>
      {" "}
      Hello
      <button
        style={{ width: 200, height: 50, background: "#023576" }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};
