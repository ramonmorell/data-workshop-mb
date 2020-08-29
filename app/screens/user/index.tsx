import React, { useState, useCallback } from "react";
import { View, StatusBar, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import i18n from "i18n-js";

import { actionLogIn } from "../../redux/reducers/userReducer";
import { Colors } from "../../constants/globalStyles";
import SwitchLocale from "./selectLocale";
import SwitchLogin from "./switchLogin";
import Registry from "./registry";
import Login from "./login";

export default function User() {
  const [switchLogin, setSwitchLogin] = useState(false);
  const [switchLocale, setSwitchLocale] = useState("");

  const dispacher = useDispatch();

  const handleLoginSwitchChange = useCallback((value) => {
    setSwitchLogin(value);
  }, []);

  const handleLocaleSwitchChange = useCallback(
    (value) => {
      i18n.locale = value;
      setSwitchLocale(value);
    },
    [i18n]
  );

  const handlePressSubmit = useCallback((value) => {
    dispacher(actionLogIn());
  }, []);

  return (
    <>
      {switchLocale !== null ? (
        <>
          <View style={styles.container}>
            <SwitchLocale onChange={handleLocaleSwitchChange} />
            <SwitchLogin onChange={handleLoginSwitchChange} />
            <View style={styles.submitContainer}>
              <Button
                onPress={handlePressSubmit}
                title={i18n.t("MAIN.GET_IN_WITHOUT_LOGIN")}
              />
            </View>
            {switchLogin ? <Registry /> : <Login />}
          </View>
        </>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  switchUser: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
  },
  activated: {
    color: Colors.primaryDark,
    borderBottomWidth: 2,
    borderColor: Colors.primaryDark,
  },
  desactivated: {
    color: Colors.primaryLight,
  },
  submitContainer: {
    padding: 10,
    zIndex: 0,
  },
});
