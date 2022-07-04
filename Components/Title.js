import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Colors";
import React from "react";

const Title = ({ text = "< UNTITLE >", color, textColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: colors.primaryDarker,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
});
