import React, { useCallback, useState, useEffect } from "react";
import { View, Text, FlatList, Alert, AlertButton } from "react-native";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/types";

import ProjectSearch from "./projectSearch";
import ProjectResume from "./projectResume";
import { Project } from "../../types/projects";
import URLS from "../../constants/urls";
import i18n from "i18n-js";
import useProject from "../../hooks/useProject";
import useFavourites from "../../hooks/useFavourites";

export default function Projects() {
  const [searchValueProjects, setSearchValueProjects] = useState("");

  const route = useSelector((state: ReduxState) => state.app.route);

  const {
    data: dataProjects,
    error: errorProjects,
    fetching: fetchingProjects,
    getProjects,
    deleteProject,
  } = useProject(searchValueProjects);

  const {
    fetching: fetchingFavourites,
    addFavourite,
    deleteFavourite,
  } = useFavourites();

  useEffect(() => {
    if (route === i18n.t("NAV.PROJECTS")) {
      getProjects();
    }
  }, [searchValueProjects, route]);

  const handleSearch = useCallback((value: string) => {
    setSearchValueProjects(value);
  }, []);

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

  const handlePressFavourite = useCallback(
    (projectId: number, favouriteId: number, favouriteActive: boolean) => {
      if (favouriteActive) {
        const url = `${URLS.FAVOURITE}/${favouriteId}`;
        deleteFavourite(favouriteId)
          .then(() => {
            getProjects();
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
            getProjects();
          })
          .catch((error) => {})
          .finally(() => {});
      }
    },
    []
  );

  const renderItem = useCallback(
    ({ item }) => (
      <ProjectResume
        project={item}
        onPressDelete={handlePressDelete}
        onPressFavourite={handlePressFavourite}
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
            keyExtractor={(item: Project) => item.id.toString()}
          />
        </>
      )}
    </View>
  );
}
