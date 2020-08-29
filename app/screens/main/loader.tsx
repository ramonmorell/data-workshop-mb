import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "../../constants/globalStyles";

export default function Loader() {
  return (
    <View style={styles.container}>
      <View style={styles.backgrounPanel}></View>
      <ActivityIndicator size={100} color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  backgrounPanel: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 0.75,
  },
});
