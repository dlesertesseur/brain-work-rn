import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

const SimonButton = (props) => {
  const { color, onPress, size = 96, buttonId, pressed, pressedColor } = props;

  const locanOnPress = () => {
    onPress(buttonId);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.action,
          { width: size, height: size, backgroundColor: pressed[buttonId] ? pressedColor : color},
        ]}
        onPress={locanOnPress}
      >
      </TouchableOpacity>
    </View>
  );
};

export default SimonButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },

  action: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: "red",
  },
});
