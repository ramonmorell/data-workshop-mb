import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Project } from "../../types/projects";
import { Colors } from "../../constants/globalStyles";

interface Props {
  project: Project;
  onPressDelete?: (value: number) => void;
  onPressFavourite?: (
    idProject: number,
    idFavourite: number,
    active: boolean
  ) => void;
}

export default function ProjectResume({
  project: { name, id, description, favourites },
  onPressDelete,
  onPressFavourite,
}: Props) {
  const [favouriteActive, setFavouriteActive] = useState<boolean>(
    favourites.length > 0
  );

  useEffect(() => {
    setFavouriteActive(favourites.length > 0);
  }, [favourites]);

  const handlePressDelete = useCallback(() => {
    if (typeof onPressDelete === "function") {
      onPressDelete(id);
    }
  }, [onPressDelete, id]);

  const handlePressFavourite = useCallback(() => {
    if (typeof onPressFavourite === "function") {
      onPressFavourite(id, favourites[0]?.id, favouriteActive);
    }
  }, [onPressFavourite, id, favourites, favouriteActive]);

  return (
    <View style={styles.container}>
      <View style={styles.favouriteContainer}>
        <TouchableOpacity
          onPress={handlePressFavourite}
          style={styles.touchableDelete}
        >
          <View style={styles.buttonDelete}>
            <AntDesign
              name="star"
              size={24}
              color={favouriteActive ? Colors.gold : Colors.primaryLight}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.nameDescriptionContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.buttonDeleteContainer}>
        {onPressDelete && (
          <TouchableOpacity
            onPress={handlePressDelete}
            style={styles.touchableDelete}
          >
            <View style={styles.buttonDelete}>
              <AntDesign name="delete" size={16} color={Colors.danger} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 20,
    borderColor: Colors.primaryLight,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopEndRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  favouriteContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  nameDescriptionContainer: {
    flexDirection: "column",
    flex: 6,
  },
  nameContainer: {
    width: "100%",
  },
  name: { width: "100%", fontWeight: "bold" },
  descriptionContainer: { width: "100%" },
  description: { width: "100%" },
  buttonDeleteContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  touchableDelete: {},
  buttonDelete: {},
});
