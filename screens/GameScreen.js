import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// components
import Buttons from "../components/ui/Buttons";
import TitleText from "../components/ui/TitleText";
import Colors from "../constants/Colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currenGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currenGuess === userNumber) {
      onGameOver();
    }
  }, [currenGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    //direction => 'greater','lower'
    if (
      (direction === "lower" && currenGuess < userNumber) ||
      (direction === "greater" && currenGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "cancle",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currenGuess;
    } else {
      minBoundary = currenGuess + 1;
    }
    const newRandNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currenGuess
    );
    setCurrentGuess(newRandNumber);
  };

  return (
    <View style={styles.mainContainer}>
      <TitleText>Opponent's Guess</TitleText>
      <View style={styles.guessedNumberContainer}>
        <Text style={styles.guessedNumber}>{currenGuess}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Heigher or Lower</Text>

        <View style={styles.buttonContainer}>
          <Buttons onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="remove" size={24} color="white" />
          </Buttons>
          <Buttons onPress={() => nextGuessHandler("greater")}>
            <Ionicons name="add" size={24} color="white" />
          </Buttons>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 40,
  },
  guessedNumberContainer: {
    color: Colors.accent500,
    borderWidth: 3,
    borderColor: Colors.accent500,
    marginHorizontal: 40,
    padding: 20,
    margin: 20,
  },
  guessedNumber: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent500,
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
  buttonContainer: {
    flexDirection: "row",
  },
});

export default GameScreen;
