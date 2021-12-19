import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

const Credits = (navigation) => {
  return (
    <View style={styles.screen}>
      <Text>Credits</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.second,
  },
});
export default Credits;
