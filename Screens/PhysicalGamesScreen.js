import React from "react";
import BaseScreen from "./BaseScreen";
import Panel from "../Components/Panel";
import CustomButton from "../Components/CustomButton";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Colors";
import { stringTable } from "../Styles/StringTable";

const PhysicalGamesScreen = () => {
  return (
    <BaseScreen>
      <View style={styles.container}>
        <Panel height={200} />
        <Panel height={200} />
        <Panel height={100} />
        <CustomButton
          text={stringTable.BT_NEXT_GAME}
          color={colors.primaryDarker}
          textColor={colors.primary}
        />
      </View>
    </BaseScreen>
  );
};

export default PhysicalGamesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.primaryLighter,
  },

  text: {
    color: colors.primary,
    fontSize: 18,
  },
});
