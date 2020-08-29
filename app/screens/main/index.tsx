import React from "react";
import { StatusBar } from "expo-status-bar";
import { useSelector, shallowEqual } from "react-redux";
import { ReduxState } from "../../redux/types";

import Navigation from "../../navigation";
import User from "../user";
import Loader from "./loader";

export default function Main() {
  const logedIn = useSelector((state: ReduxState) => {
    return state.user.logedIn;
  }, shallowEqual);

  const loading = useSelector((state: ReduxState) => {
    return state.app.loader;
  }, shallowEqual);

  return (
    <>
      {logedIn ? <Navigation /> : <User />}
      <StatusBar style="auto" />
      {loading?.length > 0 && <Loader />}
    </>
  );
}
