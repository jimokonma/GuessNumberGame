import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function Buttons({ children }) {
  return (
    <View style={styles.mainContainer}>
      <Pressable>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    paddingHorizontal: 35,
    paddingVertical: 10,
    margin: 5,
    backgroundColor: Colors.primary500,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
  },
});
export default Buttons;
