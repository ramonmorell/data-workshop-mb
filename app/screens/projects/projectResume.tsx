import React, { useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../../constants/globalStyles";

interface Props {
  id: number;
  name: string;
  description: string;
  onPressDelete?: (value: number) => void;
}

export default function ProjectResume({
  id,
  name,
  description,
  onPressDelete,
}: Props) {
  const handlePress = useCallback(() => {
    if (typeof onPressDelete === "function") {
      onPressDelete(id);
    }
  }, [onPressDelete]);
  return (
    <View style={styles.container}>
      <View style={styles.nameDescriptionContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.buttonDeleteContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.touchableDelete}>
          <View style={styles.buttonDelete}>
            <AntDesign name="delete" size={16} color={Colors.danger} />
          </View>
        </TouchableOpacity>
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
  nameDescriptionContainer: {
    flexDirection: "column",
    flex: 5,
  },
  nameContainer: {
    width: "100%",
  },
  name: { width: "100%" },
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
