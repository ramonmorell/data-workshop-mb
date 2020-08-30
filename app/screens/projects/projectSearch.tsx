import React, { useState, useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import GlobalStyles, { Colors } from "../../constants/globalStyles";

interface ProjectSearchProps {
  onSearch: (value: string) => void;
}

export default function ProjectSearch({ onSearch }: ProjectSearchProps) {
  const [seachInput, setSearchInput] = useState("");

  const handleChangeSearch = useCallback((value: string) => {
    setSearchInput(value);
  }, []);

  const handlePressSearch = useCallback(() => {
    onSearch(seachInput);
  }, [seachInput]);

  return (
    <View style={styles.container}>
      <View style={styles.seachInputContainer}>
        <TextInput
          onChangeText={handleChangeSearch}
          style={[GlobalStyles.textInput]}
          value={seachInput}
        />
      </View>
      <View style={styles.seachButtonContainer}>
        <TouchableOpacity
          onPress={handlePressSearch}
          style={styles.touchableSearch}
        >
          <View style={styles.buttonSearch}>
            <AntDesign name="search1" size={16} color={Colors.primaryDark} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
  },
  seachInputContainer: {
    flex: 5,
  },
  seachButtonContainer: {
    flex: 1,
  },
  touchableSearch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: Colors.primaryLight,
    borderRadius: 10,
    borderColor: Colors.primaryDark,
    borderWidth: 1,
  },
  buttonSearch: {},
});
