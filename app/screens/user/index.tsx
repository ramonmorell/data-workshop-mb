import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StatusBar,
  Switch,
  StyleSheet,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";

import { actionLogIn } from "../../redux/reducers/userReducer";
import { Colors } from "../../constants/globalStyles";
import SwitchLogin from "./switchLogin";
import Registry from "./registry";
import Login from "./login";

export default function User() {
  const [switchLogin, setSwitchLogin] = useState(false);

  const dispacher = useDispatch();

  const handleLoginSwitchChange = useCallback((value) => {
    setSwitchLogin(value);
  }, []);

  const handlePressSubmit = useCallback((value) => {
    dispacher(actionLogIn());
  }, []);

  return (
    <View style={styles.container}>
      <SwitchLogin onChange={handleLoginSwitchChange} />
      <View style={styles.submitContainer}>
        <Button onPress={handlePressSubmit} title="Get in without login" />
      </View>
      {switchLogin ? <Registry /> : <Login />}
    </View>
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
