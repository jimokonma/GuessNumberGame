import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
// Components Imports
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
// Constants Imports
import Colors from "./constants/Colors";

export default function App() {
  // States
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.accent500]}
      style={styles.mainContainer}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode={"cover"}
        style={styles.mainContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
