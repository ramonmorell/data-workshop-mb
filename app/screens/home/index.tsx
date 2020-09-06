import React, { useEffect, useCallback } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { ReduxState } from "../../redux/types";
import ProjectResume from "../projects/projectResume";
import { Project } from "../../types/projects";
import URLS from "../../constants/urls";
import i18n from "i18n-js";
import useProject from "../../hooks/useProject";
import useFavourites from "../../hooks/useFavourites";

export default function Home() {
  const route = useSelector((state: ReduxState) => state.app.route);

  const {
    data: dataProjects,
    error: errorProjects,
    fetching: fetchingProjects,
    getProjectsFavourites,
  } = useProject();

  const {
    fetching: fetchingFavourites,
    addFavourite,
    deleteFavourite,
  } = useFavourites();

  useEffect(() => {
    if (route === i18n.t("NAV.HOME") || route === "") {
      getProjectsFavourites();
    }
  }, [route]);

  const handlePressFavourite = useCallback(
    (projectId: number, favouriteId: number, favouriteActive: boolean) => {
      if (favouriteActive) {
        const url = `${URLS.FAVOURITE}/${favouriteId}`;
        deleteFavourite(favouriteId)
          .then(() => {
            getProjectsFavourites();
          })
          .catch((error) => {})
          .finally(() => {});
      } else {
        const data = {
          idUser: 0,
          idProject: projectId,
        };
        addFavourite(data)
          .then(() => {
            getProjectsFavourites();
          })
          .catch((error) => {})
          .finally(() => {});
      }
    },
    [deleteFavourite, addFavourite, getProjectsFavourites]
  );

  const renderItem = useCallback(
    ({ item }) => (
      <ProjectResume
        project={item}
        onPressFavourite={handlePressFavourite}
      ></ProjectResume>
    ),
    [dataProjects]
  );

  return (
    <View style={styles.container}>
      {errorProjects ? (
        <Text>{i18n.t("PROJECTS.ERROR_LOADING")}</Text>
      ) : (
        <>
          <FlatList
            data={dataProjects}
            renderItem={renderItem}
            keyExtractor={(item: Project) => item.id.toString()}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
