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

import Registry from "../registry";
import Login from "../login";

export default function index() {
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
      <View style={styles.switchUser}>
        <Text> Login </Text>
        <Switch
          trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={handleLoginSwitchChange}
          value={switchLogin}
        />
        <Text> Register </Text>
      </View>
      <View style={styles.submitContainer}>
        <Button onPress={handlePressSubmit} title="Get in without login" />
      </View>
      {switchLogin ? <Registry /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  switchUser: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  submitContainer: {
    padding: 10,
  },
});
