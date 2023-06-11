import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigations from "./src/navigations/StackNavigations";

export default function App() {
  return (
    <>
      <StatusBar style="auto" barStyle="light-content" />
      <StackNavigations />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
