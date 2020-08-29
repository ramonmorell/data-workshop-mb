import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./app/redux/store";
import { Provider } from "react-redux";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

import Main from "./app/screens/main";
import TranslationEs from "./assets/i18n/es.json";
import TranslationEn from "./assets/i18n/en.json";

i18n.translations = {
  en: TranslationEn,
  es: TranslationEs,
};

if (Localization.locale === "es-ES") {
  i18n.locale = "es";
} else {
  i18n.locale = "en";
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </Provider>
  );
}
