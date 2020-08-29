import React from "react";
import { StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import i18n from "i18n-js";

import Home from "../screens/home";
import Projects from "../screens/projects";
import Workshop from "../screens/workshop";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator style={{ marginTop: StatusBar.currentHeight }}>
      <Tab.Screen name={i18n.t("NAV.HOME")} key="home" component={Home} />
      <Tab.Screen
        name={i18n.t("NAV.PROJECTS")}
        key="projects"
        component={Projects}
      />
      <Tab.Screen
        name={i18n.t("NAV.WORKSHOP")}
        key="workshop"
        component={Workshop}
      />
    </Tab.Navigator>
  );
}
