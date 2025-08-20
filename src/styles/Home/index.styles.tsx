import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    initialtext: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    backgroundColor: "#ffffffff",
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center", 
    color: "#1877F2", 
    marginBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  loginBtn: {
    backgroundColor: "#1877F2",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    width: "90%",
   color: "#fff",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
     height: 70,
  },
  signupBtn: {
    backgroundColor: "#1877F2",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    width: "90%"
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

});


export default homeStyles;