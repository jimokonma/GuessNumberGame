import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
// Components Imports
// Constants Imports
import Colors from "./constants/Colors";

export default function App() {
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
        <SafeAreaView>
          <StartGameScreen />
        </SafeAreaView>
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
