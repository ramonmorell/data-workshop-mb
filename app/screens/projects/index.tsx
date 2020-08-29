import React, { useCallback, useState, useEffect } from "react";
import { View, Text, FlatList, Alert, AlertButton } from "react-native";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/types";

import ProjectResume from "./projectResume";
import { Project } from "../../types/projects";
import useHttpClient from "../../hooks/useHttpClient";
import URLS from "../../constants/urls";
import { mapProject } from "./utils";
import useLoader from "../../hooks/useLoader";
import { Loaders } from "../../constants/loaders";
import i18n from "i18n-js";

export default function Projects() {
  const [dataProjects, setDataProjects] = useState<Project[]>([]);
  const [errorProjects, setErrorProjects] = useState(false);
  const httpClient = useHttpClient();
  const route = useSelector((state: ReduxState) => state.app.route);
  const loader = useLoader();

  const getProjects = () => {
    loader.addLoader(Loaders.PROJECT);
    setErrorProjects(false);
    httpClient
      .get(URLS.PROJECTS)
      .then((response) => {
        setDataProjects(
          response.map((project: Project) => mapProject(project))
        );
      })
      .catch((error) => {
        setErrorProjects(true);
      })
      .finally(() => {
        loader.removeLoader(Loaders.PROJECT);
      });
  };

  const deleteProject = () => {
    loader.addLoader(Loaders.PROJECT);
    setErrorProjects(false);
    httpClient
      .delete(URLS.PROJECT)
      .then((response) => {})
      .catch((error) => {
        setErrorProjects(true);
      })
      .finally(() => {
        loader.removeLoader(Loaders.PROJECT);
      });
  };

  useEffect(() => {
    console.log(route);
    if (route === i18n.t("NAV.PROJECTS")) {
      getProjects();
    }
  }, [route]);

  const createAlert = (value) => {
    const buttons: AlertButton[] = [
      { text: i18n.t("PROJECTS.ALERT_DELETE_ACCEPT"), onPress: () => {} },
      {
        text: i18n.t("PROJECTS.ALERT_DELETE_CANCEL"),
        onPress: () => {},
        style: "cancel",
      },
    ];
    Alert.alert(
      i18n.t("PROJECTS.DELETE_PROJECT"),
      i18n.t("PROJECTS.DELETE_PROJECT_DESCRIPTION"),
      buttons,
      { cancelable: false }
    );
  };

  const handlePressDelete = useCallback((value) => {
    console.log(value);
    createAlert(value);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <ProjectResume
        id={item.id}
        name={item.name}
        description={item.description}
        onPressDelete={handlePressDelete}
      ></ProjectResume>
    ),
    [dataProjects]
  );
  return (
    <View>
      {errorProjects ? (
        <Text>{i18n.t("PROJECTS.ERROR_LOADING")}</Text>
      ) : (
        <FlatList
          data={dataProjects}
          renderItem={renderItem}
          keyExtractor={(item: Project) => item.id}
        />
      )}
    </View>
  );
}
