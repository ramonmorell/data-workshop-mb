import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./redux/store";
import { Provider } from "react-redux";
import Main from "./screens/main";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </Provider>
  );
}
