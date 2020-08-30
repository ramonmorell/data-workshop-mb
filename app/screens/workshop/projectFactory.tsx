import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";
import i18n from "i18n-js";

import GlobalStyles, { Colors } from "../../constants/globalStyles";
import useHttpClient from "../../hooks/useHttpClient";
import URLS from "../../constants/urls";

export default function ProjectFactory() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);

  const httpClient = useHttpClient();

  const handleProjectNameChange = useCallback((value) => {
    setProjectName(value);
  }, []);

  const handleProjectDescriptionChange = useCallback((value) => {
    setProjectDescription(value);
  }, []);

  const handlePressSubmit = useCallback(() => {
    setDisableSubmit(true);

    const data = {
      name: projectName,
      description: projectDescription,
    };

    httpClient
      .post(URLS.PROJECT, data)
      .then((response) => {
        Alert.alert("PROJECT ADDED", "Project added succesfully");
      })
      .catch((error) => {
        Alert.alert("ERROR", "Error adding a project");
      })
      .finally(() => {
        setDisableSubmit(false);
      });
  }, [projectName, projectDescription]);

  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.title}>
        {i18n.t("WORKSHOP.CREATE_NEW_PROJECT")}
      </Text>
      <Text style={GlobalStyles.label}>{i18n.t("WORKSHOP.PROJECT_NAME")}</Text>
      <TextInput
        style={GlobalStyles.textInput}
        onChangeText={handleProjectNameChange}
        value={projectName}
      />
      <Text style={GlobalStyles.label}>
        {i18n.t("WORKSHOP.PROJECT_DESCRIPTION")}
      </Text>
      <TextInput
        style={GlobalStyles.textArea}
        multiline={true}
        numberOfLines={4}
        onChangeText={handleProjectDescriptionChange}
        value={projectDescription}
        maxLength={150}
      />
      <View style={styles.submitContainer}>
        <Button
          onPress={handlePressSubmit}
          title={i18n.t("WORKSHOP.SAVE")}
          color={Colors.success}
          disabled={disableSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  submitContainer: {
    paddingTop: 10,
  },
});
