import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Picker,
} from "react-native";
import { useDispatch } from "react-redux";

import { Countries } from "../../constants/countries";
import { ICountry } from "../../types/countries";

export default function index() {
  const [userName, setUserName] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispacher = useDispatch();

  const handleUserNameChange = useCallback((value: string) => {
    setUserName(value);
  }, []);
  const handleUserEmailChange = useCallback((value: string) => {
    setUserEmail(value);
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
      <Text style={styles.title}> REGISTRY </Text>
      <Text style={styles.label}> User name </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={handleUserNameChange}
        value={userName}
      />
      <Text style={styles.label}> Country </Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={userCountry}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            setUserCountry(itemValue as string)
          }
        >
          {Countries.map((country: ICountry) => {
            return (
              <Picker.Item
                key={country.code}
                label={country.name_en}
                value={country.code}
              />
            );
          })}
        </Picker>
      </View>
      <Text style={styles.label}> Email </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={handleUserEmailChange}
        value={userEmail}
      />
      <Text style={styles.label}> Password </Text>
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
  pickerContainer: {
    width: "100%",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  picker: {
    height: 30,
  },
  submitContainer: {
    paddingTop: 10,
  },
});
