import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function Buttons({ children, onPress }) {
  return (
    <View style={styles.mainOutterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary700 }}
        style={({ pressed }) =>
          pressed
            ? styles.buttonPressed && styles.mainInnerContainer
            : styles.mainInnerContainer
        }
      >
        <View>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  mainOutterContainer: {
    margin: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  mainInnerContainer: {
    alignItems: "center",
    backgroundColor: Colors.primary500,
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
  },
  buttonPressed: {
    opacity: 0.2,
  },
});
export default Buttons;
