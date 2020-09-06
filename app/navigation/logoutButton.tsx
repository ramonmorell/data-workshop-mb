import React, { useCallback } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { actionLogOut } from "../redux/reducers/userReducer";
import { changeRoute } from "../redux/reducers/appReducer";
import { Colors } from "../constants/globalStyles";

export default function LogoutButton() {
  const dispacher = useDispatch();

  const handlePressLogOut = useCallback(() => {
    dispacher(actionLogOut());
    dispacher(changeRoute(""));
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={handlePressLogOut}
        style={styles.touchableLogOut}
      >
        <View style={styles.buttonLogOut}>
          <AntDesign name="poweroff" size={16} color={Colors.primaryDark} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  touchableLogOut: {
    borderRadius: 15,
  },
  buttonLogOut: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.primaryDark,
    backgroundColor: Colors.primaryLight,
    padding: 7,
  },
});
