import React from "react";
import PhysicalGamesStack from "../../Stacks/PhysicalGames";
import PerformanceStack from "../../Stacks/Performance";
import MentalGamesStack from "../../Stacks/MetalGames";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../../Styles/Colors";
import { stringTable } from "../../../Styles/StringTable";
//import { useDispatch } from "react-redux";

const Tab = createBottomTabNavigator();

const TabNavigatorLogged = () => {
  //const dispatch = useDispatch();

  //useEffect(() => {}, []);

  return (
    <Tab.Navigator
      initialRouteName="PerformanceTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="PerformanceTab"
        component={PerformanceStack}
        options={{
          tabBarIcon: () => {
            return (
              <View style={styles.item}>
                <Ionicons name="ios-stats-chart" size={24} color="black" />
                <Text>{stringTable.TAB_PERFORMANCE}</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="PhysicalGamesTab"
        component={PhysicalGamesStack}
        options={{
          tabBarIcon: () => {
            return (
              <View style={styles.item}>
                <Ionicons name="md-game-controller" size={24} color="black" />
                <Text>{stringTable.TAB_PHYSICAL_GAMES}</Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="MentalGamesTab"
        component={MentalGamesStack}
        options={{
          tabBarIcon: () => {
            return (
              <View style={styles.item}>
                <FontAwesome5 name="brain" size={24} color="black" />
                <Text>{stringTable.TAB_MENTAL_GAMES}</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatorLogged;

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    borderRadius: 6,
    height: 70,
    backgroundColor: colors.primaryLighter,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
