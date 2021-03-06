import React, { useState, useCallback } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import i18n from "i18n-js";

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
      <View style={styles.switchLabel}>
        <Text style={!switchLogin ? styles.activated : styles.desactivated}>
          {i18n.t("USER.SWITCH_LOGIN")}
        </Text>
      </View>
      <Switch
        trackColor={{ false: Colors.primaryLight, true: Colors.primaryLight }}
        thumbColor={Colors.primaryDark}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={handleLoginSwitchChange}
        value={switchLogin}
      />
      <View style={styles.switchLabel}>
        <Text
          style={[
            switchLogin ? styles.activated : styles.desactivated,
            { textAlign: "right" },
          ]}
        >
          {i18n.t("USER.SWITCH_REGISTER")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
  },
  switchLabel: {
    width: "30%",
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
