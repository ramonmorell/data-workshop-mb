import React, { useState, useCallback } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

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
      <Text style={GlobalStyles.title}> LOGIN </Text>
      <Text style={GlobalStyles.label}> User name </Text>
      <TextInput
        style={GlobalStyles.textInput}
        onChangeText={handleUserNameChange}
        value={userName}
      />
      <Text style={GlobalStyles.label}> Password </Text>
      <TextInput
        style={GlobalStyles.textInput}
        onChangeText={handleUserPasswordChange}
        value={userPassword}
        secureTextEntry={true}
      />
      <View style={styles.submitContainer}>
        <Button onPress={handlePressSubmit} title="Submit" />
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
