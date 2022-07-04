import { StyleSheet, useWindowDimensions, View } from "react-native";
import { colors } from "../Styles/Colors";
import { ProgressChart } from "react-native-chart-kit";
import { stringTable } from "../Styles/StringTable";
import React from "react";
import BaseScreen from "./BaseScreen";
import CustomButton from "../Components/CustomButton";
import Panel from "../Components/Panel";

const PerformanceScreen = () => {
  const { width } = useWindowDimensions();

  const data = {
    labels: ["Mental", "Physical", "Total"],
    data: [0.3, 0.5, 0.8],
  };

  const chartConfig = {
    backgroundColor: colors.primaryLighter,
    backgroundGradientFrom: colors.primaryLighter,
    backgroundGradientTo: colors.primaryLighter,
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(66,64,88, ${opacity})`,
    labelColor: (opacity = 1) => colors.secondaryDarker,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  return (
    <BaseScreen>
      <View style={styles.container}>
        <Panel height={120}/>
        <ProgressChart
          data={data}
          width={width - 50}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />

        <CustomButton
          text={stringTable.BT_WALLET}
          color={colors.primaryDarker}
          textColor={colors.primary}
        />
        <CustomButton
          text={stringTable.BT_REDEEM_POINTS}
          color={colors.primaryDarker}
          textColor={colors.primary}
        />
      </View>
    </BaseScreen>
  );
};

export default PerformanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.primaryLighter,
  },

  panel: {
    borderRadius: 8,
    backgroundColor: colors.primaryLighter,
    width: "100%",
    padding: 10,
  },
});
