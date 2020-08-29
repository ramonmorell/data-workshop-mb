import React, { useState, useCallback } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import i18n from "i18n-js";

import GlobalStyles from "../../constants/globalStyles";
import useLoader from "../../hooks/useLoader";
import { Loaders } from "../../constants/loaders";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loader = useLoader();

  const handleUserNameChange = useCallback((value: string) => {
    setUserName(value);
  }, []);

  const handleUserPasswordChange = useCallback((value: string) => {
    setUserPassword(value);
  }, []);

  const handlePressSubmit = useCallback(() => {
    loader.addLoader(Loaders.LOGIN);
    setTimeout(() => {
      loader.removeLoader(Loaders.LOGIN);
    }, 3000);
  }, [loader]);

  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.title}>{i18n.t("USER.LOGIN")}</Text>
      <Text style={GlobalStyles.label}>{i18n.t("USER.USER_NAME")}</Text>
      <TextInput
        style={GlobalStyles.textInput}
        onChangeText={handleUserNameChange}
        value={userName}
      />
      <Text style={GlobalStyles.label}>{i18n.t("USER.USER_PASSWORD")}</Text>
      <TextInput
        style={GlobalStyles.textInput}
        onChangeText={handleUserPasswordChange}
        value={userPassword}
        secureTextEntry={true}
      />
      <View style={styles.submitContainer}>
        <Button
          onPress={handlePressSubmit}
          color="green"
          title={i18n.t("USER.LOG_IN")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  submitContainer: {
    paddingTop: 10,
    zIndex: 0,
  },
});
