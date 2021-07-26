import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MainCalcScreen from "./screens/MainCalcScreen";

export default function App() {
  return <MainCalcScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 30,
  },
});
