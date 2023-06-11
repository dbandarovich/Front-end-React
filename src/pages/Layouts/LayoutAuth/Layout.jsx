import React, {useEffect,useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {ForgetPassword, Sprite} from "../../../components";
import {useDispatch} from "react-redux";
import {setAuth} from "../../../redux/reducers/AuthReducer";

export const Layout = () => {
    const search = useLocation().search
    const searchParams = new URLSearchParams(search)
    const code = searchParams.get('code')
    const [isOpenRecover, setIsOpenRecovery] = useState(false);
    useEffect(() => {
        setIsOpenRecovery(!!code)
    },[])
    const dispatch = useDispatch();


  useEffect(() => {
    localStorage.token && dispatch(setAuth(localStorage.token));
    localStorage.email && dispatch(setAuth(localStorage.email));
  }, []);

  return (
    <>
      <Sprite />
      <Outlet />
        {isOpenRecover && (
            <ForgetPassword setIsOpenForgetPassword={setIsOpenRecovery} />
        )}
    </>
  );
};
