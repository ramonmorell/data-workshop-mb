import React, { useState, useCallback } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";

export default function index() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispacher = useDispatch();

  const handleUserNameChange = useCallback((value: string) => {
    setUserName(value);
  }, []);
  const handleUserPasswordChange = useCallback((value: string) => {
    setUserPassword(value);
  }, []);
  const handlePressSubmit = useCallback((value) => {
    // dispacher({
    //   type: "LOG_IN",
    // });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}> LOGIN </Text>
      <Text style={styles.label}> User name </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={handleUserNameChange}
        value={userName}
      />
      <Text style={styles.label}> User name </Text>
      <TextInput
        style={styles.textInput}
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
  title: {
    fontSize: 20,
    alignSelf: "center",
  },
  label: {
    alignItems: "flex-start",
    width: "100%",
    fontSize: 16,
    paddingTop: 10,
  },
  textInput: {
    fontSize: 20,
    height: 35,
    width: "100%",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  submitContainer: {
    paddingTop: 10,
  },
});
