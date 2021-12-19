import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>

      <View style={styles.btnBox}>
        <View style={styles.btn}>
          <Button
            title="Go To About"
            onPress={() => navigation.navigate("About")}
            color={Colors.first}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Go To Credits"
            onPress={() => navigation.navigate("Credits")}
            color={Colors.first}
          />
        </View>
      </View>
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>About</Text>

      <View style={styles.btnBox}>
        <View style={styles.btn}>
          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
            color={Colors.first}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Go To Credits"
            onPress={() => navigation.navigate("Credits")}
            color={Colors.first}
          />
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Hemma",
            headerStyle: { backgroundColor: Colors.first },
            headerTintColor: Colors.third,
            headerTitleStyle: { fontWeight: "bold " },
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "Om",
            headerStyle: { backgroundColor: Colors.first },
            headerTintColor: Colors.third,
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="Credits"
          getComponent={() => require("./components/Credits").default}
          options={{
            title: "Jahaja...",
            headerStyle: { backgroundColor: Colors.first },
            headerTintColor: Colors.third,
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.second,
  },

  btnBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
  },
  btn: {
    width: "50%",
    margin: 10,
    backgroundColor: Colors.third,
    borderRadius: 10,
  },
});
