import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TopTabNavigator from "./TopTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation() {
  console.log(DefaultTheme);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}
      onStateChange={(state) => console.log("New state is", state)}
    >
      <TopTabNavigator />
    </NavigationContainer>
  );
}
