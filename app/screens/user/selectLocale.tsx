import React, { useState, useCallback } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import i18n from "i18n-js";

import { Colors } from "../../constants/globalStyles";

interface Props {
  onChange: (value: string) => void;
}

export default function SelectLocale({ onChange }: Props) {
  const [switchLocale, setSwitchLocale] = useState(i18n.locale === "es");

  const handleLocaleSwitchChange = useCallback(
    (value) => {
      setSwitchLocale(value);
      if (value) {
        onChange("es");
      } else {
        onChange("en");
      }
    },
    [i18n]
  );

  return (
    <View style={styles.container}>
      <View style={styles.switchLabel}>
        <Text style={!switchLocale ? styles.activated : styles.desactivated}>
          {i18n.t("USER.ENGLISH")}
        </Text>
      </View>
      <Switch
        trackColor={{ false: Colors.primaryLight, true: Colors.primaryLight }}
        thumbColor={Colors.primaryDark}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={handleLocaleSwitchChange}
        value={switchLocale}
      />
      <View style={styles.switchLabel}>
        <Text
          style={[
            switchLocale ? styles.activated : styles.desactivated,
            { textAlign: "right" },
          ]}
        >
          {i18n.t("USER.SPANISH")}
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
