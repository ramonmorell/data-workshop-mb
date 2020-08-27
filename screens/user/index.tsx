import React from "react";
import { View, StatusBar } from "react-native";

import Registry from "../registry";

export default function index() {
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <Registry />
    </View>
  );
}
