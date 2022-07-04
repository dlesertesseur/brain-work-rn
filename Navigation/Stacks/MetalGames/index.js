import React from "react";
import MentalGamesScreen from "../../../Screens/MentalGames";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SimonGameScreen from "../../../Screens/Games/SimonGameScreen";

const Stack = createNativeStackNavigator();

const MentalGamesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MentalGames" component={MentalGamesScreen}></Stack.Screen>
      <Stack.Screen name="SimonGame" component={SimonGameScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MentalGamesStack;

const styles = StyleSheet.create({});