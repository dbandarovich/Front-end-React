import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthPage } from "../pages/AuthPage/AuthPage";
import { Layout } from "../pages/Layout";
import { Operations } from "../pages/Operations/Operations";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/operations" />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/operations" element={<Operations />} />
      </Route>
    </>
  )
);
