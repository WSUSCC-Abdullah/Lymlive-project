import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

//css
import loginStyles from "../../styles/Login/index.styles";

/**
 * Login screen component
 * This component renders a login form with fields for email/phone and password,
 * along with options for password recovery and social login.
 * @returns Login screen component
 */
const LoginPage = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const openLink = () => {
    // Logic to handle login action
    console.log("Login button pressed");
  };

  return (
    <View style={loginStyles.wrapper}>
      <Text style={loginStyles.welcomeText}>Welcome to LYMLife</Text>
      <Text style={loginStyles.title}>Login</Text>
      <TextInput
        style={loginStyles.input}
        placeholder="Enter your Email or phone number"
        value={emailPhone}
        onChangeText={setEmailPhone}
      />
      <TextInput
        style={loginStyles.input}
        placeholder="Enter your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity>
        <Text style={loginStyles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={loginStyles.loginBtn}>
       <Text style={loginStyles.loginText} onPress={openLink}>Login</Text>  
      </TouchableOpacity>
      <View style={loginStyles.signupRow}>
        <Text style={loginStyles.text}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={loginStyles.signup} onPress={() => navigation.navigate("Signup")}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={loginStyles.orRow}>
        <View style={loginStyles.hr} />
        <Text style={loginStyles.orText}>Or</Text>
        <View style={loginStyles.hr} />
      </View>
      <TouchableOpacity style={loginStyles.googleLoginBtn}>
       <Image source={require("../../assets/google.png")} style={loginStyles.google} />
        <Text style={loginStyles.socialText}>LogIn with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginPage;