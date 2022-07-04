import React, { useEffect, useState } from "react";
import BaseScreen from "./../BaseScreen";
import CustomButton from "../../Components/CustomButton";
import Panel from "../../Components/Panel";
import SimonButton from "../../Components/SimonButton";
import Title from "../../Components/Title";
import Label from "../../Components/Label";
import { StyleSheet, View } from "react-native";
import { stringTable } from "../../Styles/StringTable";
import { colors } from "../../Styles/Colors";

const SimonGameScreen = ({ navigation }) => {
  const actionsNumber = 10;

  const onPress = () => {
    navigation.navigate("MentalGames");
  };

  const [actions, setActions] = useState([]);
  const [actionsIndex, setActionsIndex] = useState(-1);
  const [startedGame, setStartedGame] = useState(false);
  const [actionsStates, setActionsStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [labelText, setLabelText] = useState("");

  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(async () => {
    const ms = 1000;
    let action = null;

    for (let index = 0; index < actions.length ; index++) {
      action = actions[index];
      
      activate(action);

      await delay(1000);

      clearActions();

      await delay(500);
    }

    if(actions.length > 0)
    {
      setLabelText(stringTable.LB_PLAYER);
    }
    
  }, [actions]);

  const clearActions = () => {
    setActionsStates([false, false, false, false]);
  }

  const activate = (action) => {
    let states = [false, false, false, false];

    states[0] = action === 0;
    states[1] = action === 1;
    states[2] = action === 2;
    states[3] = action === 3;

    setActionsStates(states);
  };

  const gameInit = () => {
    setStartedGame(true);
    setActionsIndex(0);
    addAction();
    setLabelText(stringTable.LB_ADVERSARY);
  }

  const addAction = () => {
    const max = 3;
    const value = Math.floor(Math.random() * (max + 1));
    setActions([...actions, value]);
  }

  const onAction = (option) => {
    if(actionsIndex < actions.length){
      if(actions[actionsIndex] === option) {
          setActionsIndex(actionsIndex + 1);

          if(actionsIndex + 1 >= actions.length) {
            setLabelText(stringTable.LB_ADVERSARY)
            addAction();
          }
      }
      else{
        setStartedGame(false);
        setActionsIndex(0);
        setActions([]);
        setLabelText(stringTable.LB_LOST);
      }
    }
  };

  return (
    <BaseScreen>
      <View style={styles.container}>
        <Title
          style={styles.title}
          text={stringTable.SIMON_GAME_TITLE}
          color={colors.primary}
          textColor={colors.primaryDarker}
        />
        <Panel height={300}>
          <View style={styles.btLine}>
            <SimonButton
              color={"green"}
              pressedColor={"#00C800"}
              buttonId={0}
              pressed={actionsStates}
              onPress={onAction}
            />
            <SimonButton
              color={"red"}
              pressedColor={"#C80000"}
              buttonId={1}
              pressed={actionsStates}
              onPress={onAction}
            />
          </View>
          <View style={styles.btLine}>
            <SimonButton
              color={"yellow"}
              pressedColor={"#C8C800"}
              buttonId={2}
              pressed={actionsStates}
              onPress={onAction}
            />
            <SimonButton
              color={"blue"}
              pressedColor={"#0000C8"}
              buttonId={3}
              pressed={actionsStates}
              onPress={onAction}
            />
          </View>
        </Panel>

        <Label
          visible={startedGame}
          style={styles.title}
          text={labelText}
          color={colors.primary}
          textColor={colors.primaryDarker}
        />

        <CustomButton
          disabled={startedGame}
          text={stringTable.BT_START}
          color={colors.primaryDarker}
          textColor={colors.primary}
          onPress={gameInit}
        />
        <CustomButton
          text={stringTable.BT_CLOSE}
          color={colors.primaryDarker}
          textColor={colors.primary}
          onPress={onPress}
        />
      </View>
    </BaseScreen>
  );
};

export default SimonGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.primaryLighter,
  },

  btLine: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
