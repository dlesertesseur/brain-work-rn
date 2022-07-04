import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Colors";
import { stringTable } from "../Styles/StringTable";
import React from "react";
import BaseScreen from "./BaseScreen";
import CustomButton from "../Components/CustomButton";
import Panel from "../Components/Panel";

const MentalGames = ({navigation}) => {

  const onPress = () => {
    navigation.navigate("SimonGame");
  }

  return (
    <BaseScreen>
      <View style={styles.container}>
        <Panel height={100}/>
        <Panel height={300}/>
        <Panel height={100}/>
        <CustomButton
          text={stringTable.BT_NEXT_GAME}
          color={colors.primaryDarker}
          textColor={colors.primary}
          onPress={onPress}
        />
      </View>
    </BaseScreen>
  );
};

export default MentalGames;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.primaryLighter,
  },
});
