import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../Styles/Colors";

const Panel = (props) => {
  const { children, height=200, vAlign="center" } = props;
  return <View style={[styles.panel, {height: height, alijustifyContentgnItems: vAlign}]}>
    {children}
    </View>;
};

export default Panel;

const styles = StyleSheet.create({
  panel: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    width: "100%",
    padding: 10,
    marginBottom:10,
  },
});
