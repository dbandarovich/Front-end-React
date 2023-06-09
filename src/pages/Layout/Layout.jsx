import React from "react";
import { Outlet } from "react-router-dom";
import { Sprite } from "../../components";

export const Layout = () => {
  return (
    <>
      <Sprite />
      <Outlet />
    </>
  );
};
