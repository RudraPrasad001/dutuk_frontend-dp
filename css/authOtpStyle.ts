import { StyleSheet } from "react-native";

const authOtpStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 15,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: "80%",
    justifyContent: "space-between",
  },
  cell: {
    width: 50,
    height: 60,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#ccc",
    textAlign: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
  cellText: {
    fontSize: 24,
  },
});

export default authOtpStyle;
