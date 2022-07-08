import { Image, StyleSheet, Text, View } from "react-native";
import Buttons from "../components/ui/Buttons";
import TitleText from "../components/ui/TitleText";
import Colors from "../constants/Colors";

function GameOverScreen({ roundsNumber, userNumber, onStartGame }) {
  return (
    <View style={styles.mainContainer}>
      <TitleText>Game Over</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <Buttons onPress={onStartGame}>Start New Game</Buttons>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 200,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
