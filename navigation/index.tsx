import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TopTabNavigator from "./TopTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}
      onStateChange={(state) => {}}
    >
      <TopTabNavigator />
    </NavigationContainer>
  );
}
