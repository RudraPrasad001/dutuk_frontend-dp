import { StyleSheet } from "react-native";

const authOtpStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    color: "#1a1a1a",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  codeFieldRoot: {
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  cell: {
    width: 45,
    height: 55,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  focusCell: {
    borderColor: "#007AFF",
    backgroundColor: "#fff",
  },
  cellText: {
    fontSize: 20,
    color: "#000",
  },
  resendText: {
    textAlign: "center",
    color: "#007AFF",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 30,
  },
  buttonWrapper: {
    alignItems: "center",
  },
});

export default authOtpStyle;
