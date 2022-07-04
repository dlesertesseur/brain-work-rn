import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import Store from "./Store";
import MainNavigator from "./Navigation";

export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaProvider style={styles.container}>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
