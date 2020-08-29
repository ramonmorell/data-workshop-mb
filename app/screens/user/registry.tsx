import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Picker,
} from "react-native";
import i18n from "i18n-js";

import GlobalStyles from "../../constants/globalStyles";
import { Countries } from "../../constants/countries";
import { ICountry } from "../../types/countries";
import useLoader from "../../hooks/useLoader";
import { Loaders } from "../../constants/loaders";

export default function Registry() {
  const [userName, setUserName] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loader = useLoader();

  const handleUserNameChange = useCallback((value: string) => {
    setUserName(value);
  }, []);

  const handleUserEmailChange = useCallback((value: string) => {
    setUserEmail(value);
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
      <Text style={GlobalStyles.title}>{i18n.t("USER.REGISTRY")}</Text>
      <Text style={GlobalStyles.label}>{i18n.t("USER.USER_NAME")}</Text>
      <TextInput
        style={GlobalStyles.textInput}
        onChangeText={handleUserNameChange}
        value={userName}
      />
      <Text style={GlobalStyles.label}>{i18n.t("USER.USER_COUNTRY")}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={userCountry}
          style={styles.picker}
          onValueChange={(itemValue) => setUserCountry(itemValue as string)}
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
      <Text style={GlobalStyles.label}>{i18n.t("USER.USER_EMAIL")}</Text>
      <TextInput
        style={GlobalStyles.textInput}
        onChangeText={handleUserEmailChange}
        value={userEmail}
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
          title={i18n.t("USER.REGISTER")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
    zIndex: 0,
  },
});
