import { StyleSheet } from "react-native";
const GlobalStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    alignSelf: "center",
  },
  label: {
    alignItems: "flex-start",
    width: "100%",
    fontSize: 16,
    paddingTop: 10,
  },
  textInput: {
    fontSize: 20,
    height: 35,
    width: "100%",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  textArea: {
    fontSize: 20,
    width: "100%",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    height: 120,
    textAlignVertical: "top",
  },
});

export enum Colors {
  primary = "#2196f3",
  primaryLight = "#dfebf5",
  primaryDark = "#0f8cf5",
  danger = "#A52A2A",
}

export default GlobalStyles;
