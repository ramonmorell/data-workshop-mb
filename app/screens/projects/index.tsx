import React, { useCallback, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/types";

import ProjectResume from "./projectResume";
import { Project } from "../../types/projects";
import useHttpClient from "../../hooks/useHttpClient";
import URLS from "../../constants/urls";
import { mapProject } from "./utils";
import useLoader from "../../hooks/useLoader";
import { Loaders } from "../../constants/loaders";

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

  useEffect(() => {
    if (route === "Projects") {
      getProjects();
    }
  }, [route]);

  const renderItem = useCallback(
    ({ item }) => (
      <ProjectResume
        id={item.id}
        name={item.name}
        description={item.description}
      ></ProjectResume>
    ),
    [dataProjects]
  );
  return (
    <View>
      {errorProjects ? (
        <Text>Error loading projects</Text>
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
