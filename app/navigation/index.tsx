import React, { useCallback } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TopTabNavigator from "./TopTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import { actionLogOut } from "../redux/reducers/userReducer";

export default function Navigation() {
  const dispacher = useDispatch();

  const handlePressLogOut = useCallback(() => {
    dispacher(actionLogOut());
  }, []);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}
      onStateChange={(state) => {}}
    >
      <TopTabNavigator />
      <View style={styles.buttonLogOutContainer}>
        <TouchableOpacity
          onPress={handlePressLogOut}
          style={styles.touchableLogOut}
        >
          <View style={styles.buttonLogOut}>
            <AntDesign name="poweroff" size={16} color="blue" />
          </View>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonLogOutContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  touchableLogOut: {
    borderRadius: 15,
  },
  buttonLogOut: {
    borderRadius: 15,
    backgroundColor: "lightblue",
    padding: 7,
  },
});