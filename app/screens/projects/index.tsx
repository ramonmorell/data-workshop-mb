import React, { useCallback, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/types";

import ProjectResume from "./projectResume";
import { Project } from "../../types/projects";
import useHttpClient from "../../hooks/useHttpClient";
import URLS from "../../constants/urls";
import { mapProject } from "./utils";

export default function Projects() {
  const [dataProjects, setDataProjects] = useState<Project[]>([]);
  const [fetchingProjects, setFetchingProjects] = useState(false);
  const [errorProjects, setErrorProjects] = useState(false);

  const route = useSelector((state: ReduxState) => state.app.route);

  const getProjects = () => {
    setFetchingProjects(true);
    setErrorProjects(false);
    useHttpClient()
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
        setFetchingProjects(false);
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
      {fetchingProjects ? (
        <Text>Loading ....</Text>
      ) : errorProjects ? (
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
