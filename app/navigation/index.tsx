import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import TopTabNavigator from "./topTabNavigator";
import LinkingConfiguration from "./linkingConfiguration";
import LogoutButton from "./logoutButton";
import { changeRoute } from "../redux/reducers/appReducer";

export default function Navigation() {
  const dispacher = useDispatch();

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}
      onStateChange={(state) => {
        const newRoute = state?.routeNames[state.index];
        if (newRoute) {
          dispacher(changeRoute(newRoute));
        }
      }}
    >
      <TopTabNavigator />
      <View style={styles.buttonLogOutContainer}>
        <LogoutButton></LogoutButton>
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
});
