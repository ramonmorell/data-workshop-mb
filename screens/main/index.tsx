import React from "react";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/types";

import Navigation from "../../navigation";
import User from "../user";

export default function index() {
  const logedIn = useSelector(
    (state: ReduxState) => {
      return state.user.logedIn;
    },
    (left, rigth) => {
      return left === rigth;
    }
  );
  return (
    <>
      {logedIn ? <Navigation /> : <User />}
      <StatusBar style="auto" />
    </>
  );
}
