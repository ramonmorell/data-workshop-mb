import React, { useCallback, useState, useEffect } from "react";
import { View, Text, FlatList, Alert, AlertButton } from "react-native";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/types";

import ProjectSearch from "./projectSearch";
import ProjectResume from "./projectResume";
import { Project } from "../../types/projects";
import useHttpClient from "../../hooks/useHttpClient";
import URLS from "../../constants/urls";
import { mapProject } from "./utils";
import useLoader from "../../hooks/useLoader";
import { Loaders } from "../../constants/loaders";
import i18n from "i18n-js";

export default function Projects() {
  const [searchValueProjects, setSearchValueProjects] = useState("");
  const [dataProjects, setDataProjects] = useState<Project[]>([]);
  const [errorProjects, setErrorProjects] = useState(false);

  const httpClient = useHttpClient();
  const route = useSelector((state: ReduxState) => state.app.route);
  const loader = useLoader();

  const getProjects = (name?: string) => {
    loader.addLoader(Loaders.PROJECT);
    setErrorProjects(false);
    const url = name ? `${URLS.PROJECTS}?name=${name}` : URLS.PROJECTS;
    httpClient
      .get(url)
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

  const deleteProject = (value: string) => {
    loader.addLoader(Loaders.PROJECT);
    setErrorProjects(false);
    const url = `${URLS.PROJECT}/${value}`;
    httpClient
      .delete(url)
      .then(() => {
        getProjects(searchValueProjects);
      })
      .catch((error) => {
        setErrorProjects(true);
      })
      .finally(() => {
        loader.removeLoader(Loaders.PROJECT);
      });
  };

  const handleSearch = useCallback((value: string) => {
    setSearchValueProjects(value);
  }, []);

  useEffect(() => {
    if (route === i18n.t("NAV.PROJECTS")) {
      getProjects(searchValueProjects);
    }
  }, [searchValueProjects, route]);

  const createAlert = (value: string) => {
    const buttons: AlertButton[] = [
      {
        text: i18n.t("PROJECTS.ALERT_DELETE_ACCEPT"),
        onPress: () => {
          deleteProject(value);
        },
      },
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
        <>
          <ProjectSearch onSearch={handleSearch} />
          <FlatList
            data={dataProjects}
            renderItem={renderItem}
            keyExtractor={(item: Project) => item.id}
          />
        </>
      )}
    </View>
  );
}
