import React from "react";
import { StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "../screens/home";
import Projects from "../screens/projects";
import Workshop from "../screens/workshop";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator style={{ marginTop: StatusBar.currentHeight }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Projects" component={Projects} />
      <Tab.Screen name="Workshop" component={Workshop} />
    </Tab.Navigator>
  );
}
