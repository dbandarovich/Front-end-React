import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { Sprite } from "../../components";
import {useDispatch} from "react-redux";
import {setAuth} from "../../redux/reducers/AuthReducer";

export const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.token && dispatch(setAuth(localStorage.token))
    }, [])
    console.log(localStorage.token)
  return (
    <>
      <Sprite />
      <Outlet />
    </>
  );
};
