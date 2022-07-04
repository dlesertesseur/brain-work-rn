import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, useWindowDimensions } from "react-native";
import { colors } from "../Styles/Colors";

const BaseScreen = (props) => {
  const { children, onBack = null, bottomSpace=100 } = props;
  const { height } = useWindowDimensions();

  return (
    <View style={[styles.container, {height: height - bottomSpace}]}>
      <View style={styles.body}>{children}</View>
      <View style={styles.controls}>
        {onBack !== null ? (
          <TouchableOpacity style={styles.button} onPress={onBack}>
            <Text style={styles.text}>Volver</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default BaseScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  body: {
    flex: 1,
    width: "100%",
  },

  controls: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 6,
    height: 40,
    margin: 10,
    width: "100%",
  },

  text: {
    fontSize: 16,
  },
});
