import React, { useState, useCallback } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { Colors } from "../../constants/globalStyles";

interface Props {
  onChange: (value: boolean) => void;
}

export default function SwitchLogin({ onChange }: Props) {
  const [switchLogin, setSwitchLogin] = useState(false);

  const handleLoginSwitchChange = useCallback(
    (value) => {
      setSwitchLogin(value);
      onChange(value);
    },
    [onChange]
  );

  return (
    <View style={styles.container}>
      <Text style={!switchLogin ? styles.activated : styles.desactivated}>
        Login
      </Text>
      <Switch
        trackColor={{ false: Colors.primaryLight, true: Colors.primaryLight }}
        thumbColor={Colors.primaryDark}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={handleLoginSwitchChange}
        value={switchLogin}
      />
      <Text style={switchLogin ? styles.activated : styles.desactivated}>
        Register
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
  },
  activated: {
    color: Colors.primaryDark,
    borderBottomWidth: 2,
    borderColor: Colors.primaryDark,
  },
  desactivated: {
    color: Colors.primaryLight,
  },
  submitContainer: {
    padding: 10,
  },
});
