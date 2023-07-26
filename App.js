import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
export default function App() {
  const [location, setLocation] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Location"
        style={styles.input}
        value={location}
        onChange={(e) => setLocation(e.target.valueOf)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 15,
  },
});
