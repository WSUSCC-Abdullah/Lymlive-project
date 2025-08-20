import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center", 
    color: "#1877F2", 
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    fontSize:16
  },
  forgot: {
    color: "#1877F2",
    textAlign: "right",
    marginBottom: 20,
  },
  loginBtn: {
    backgroundColor: "#1877F2",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  signup: {
    color: "#1877F2",
    fontWeight: "600",
    fontSize: 16,
    cursor: 'pointer',
  },
  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    color: "#000",
    fontSize: 16,
  },
  googleLoginBtn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#999",
  },
  google: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  socialText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
    marginLeft: 100
  }
});


export default loginStyles;