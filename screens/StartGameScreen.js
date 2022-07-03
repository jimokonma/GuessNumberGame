import { View, Text, StyleSheet, TextInput } from "react-native";
import Buttons from "../components/ui/Buttons";
import TitleText from "../components/ui/TitleText";
import Colors from "../constants/Colors";

function StartGameScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <TitleText>Guess my Number</TitleText>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Enter a Number</Text>
        <TextInput style={styles.numberInput} maxLength={2} />

        <View>
          <Buttons>Reset</Buttons>
          <Buttons>Confirm</Buttons>
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
});

export default StartGameScreen;
