import React from "react";
import PerformanceScreen from "../../../Screens/PerformanceScreen"
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const PerformanceStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Performance" component={PerformanceScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default PerformanceStack;

const styles = StyleSheet.create({});
