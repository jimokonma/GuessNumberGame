import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Buttons from "../components/ui/Buttons";
import TitleText from "../components/ui/TitleText";
import Colors from "../constants/Colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const enteredNumberHandler = (text) => {
    setEnteredNumber(text);
  };
  const pickedNumberHandler = () => {
    const userText = parseInt(enteredNumber);
    if (enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert(
        "Wrong input!",
        "Select a number between 1 and 99 to continue",
        [
          {
            text: "okay",
            onPress: setEnteredNumber(""),
            style: "destructive",
          },
        ]
      );
    }
    onPickNumber(userText);
    setEnteredNumber("");
  };

  return (
    <View style={styles.mainContainer}>
      <TitleText>Guess my Number</TitleText>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          value={enteredNumber}
          maxLength={2}
          keyboardType={"number-pad"}
          onChangeText={enteredNumberHandler}
        />

        <View style={styles.buttonContainer}>
          <Buttons onPress={() => console.log("reset")}>Reset</Buttons>
          <Buttons onPress={pickedNumberHandler}>Confirm</Buttons>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 40,
  },
  card: {
    backgroundColor: Colors.primary800,
    padding: 15,
    margin: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    marginBottom: 10,
    fontSize: 24,
    color: Colors.accent500,
  },
  numberInput: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: "bold",
    padding: 5,
    borderBottomWidth: 3,
    borderColor: Colors.accent500,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 20,
  },
});

export default StartGameScreen;
