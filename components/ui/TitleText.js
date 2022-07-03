import { StyleSheet, Text, View } from "react-native";

function TitleText({ children }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
    borderWidth: 2,
    borderColor: "#fff",
    marginHorizontal: 28,
    color: "#fff",
  },
  titleText: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
});

export default TitleText;
