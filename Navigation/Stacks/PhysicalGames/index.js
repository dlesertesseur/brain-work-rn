import React from "react";
import PhysicalGamesScreen from "../../../Screens/PhysicalGamesScreen";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const PhysicalGamesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="PhysicalGames"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="PhysicalGames" component={PhysicalGamesScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default PhysicalGamesStack;

const styles = StyleSheet.create({});