import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";

import GlobalStyles from "../../constants/globalStyles";
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
      <Text style={GlobalStyles.title}> CREATE NEW PROJECT </Text>
      <Text style={GlobalStyles.label}> Project Name</Text>
      <TextInput
        style={GlobalStyles.textInput}
        onChangeText={handleProjectNameChange}
        value={projectName}
      />
      <Text style={GlobalStyles.label}> Project Description</Text>
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
          title="Submit"
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
