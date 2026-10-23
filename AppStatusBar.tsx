import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export function AppStatusBar() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1A3A2E" />
      <View style={styles.bar}>
        <Text style={styles.text}>GrassWatch</Text>
        <Text style={styles.text}>IoT ● Não conectado</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#1A3A2E",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: { color: "#A0D4B8", fontSize: 11, fontWeight: "500" },
});
