import { StyleSheet } from "react-native";

const authButtonStyle = StyleSheet.create({
  button: {
    width: 250,
    height: 75,
    backgroundColor: "black",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 10,
    margin: 5,
  },
  buttonSecondary: {
    width: 250,
    height: 75,
    backgroundColor: "gray",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 10,
    margin: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default authButtonStyle;
