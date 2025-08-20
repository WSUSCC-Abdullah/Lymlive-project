import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import SignupStyles  from "../../styles/Signup/index.styles";
import { useNavigation } from '@react-navigation/native';

/**
 * Login screen component
 * This component renders a login form with fields for email/phone and password,
 * along with options for password recovery and social login.
 * @returns Login screen component
 */
const LoginPage = () => {
  const [emailaddress, setEmailaddress] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [fullName, setfullName] = useState("");
    const navigation = useNavigation();

  return (
    <View style={SignupStyles.wrapper}>
      <Text style={SignupStyles.initialText}>Welcome to LYMLife!</Text>
      <Text style={SignupStyles.title}>Signup</Text>
      <TextInput
        style={SignupStyles.input}
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={setfullName}
      />
      <TextInput
        style={SignupStyles.input}
        placeholder="Enter your Email"
        value={emailaddress}
        onChangeText={setEmailaddress}
      />
      <TextInput
        style={SignupStyles.input}
        placeholder="Enter your Phone number"
        value={phonenumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={SignupStyles.input}
        placeholder="Enter your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={SignupStyles.input}
        placeholder="confirm your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    
      <TouchableOpacity style={SignupStyles.signupBtn}>
        <Text style={SignupStyles.signupText}>Signup</Text>
      </TouchableOpacity>
      <View style={SignupStyles.loginRow}>
        <Text style={SignupStyles.text}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={SignupStyles.login} onPress={() => navigation.navigate("Login")}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={SignupStyles.orRow}>
        <View style={SignupStyles.hr} />
        <Text style={SignupStyles.orText}>Or</Text>
        <View style={SignupStyles.hr} />
      </View>
      <TouchableOpacity style={SignupStyles.googleLoginBtn}>
       <Image source={require("../../assets/google.png")} style={SignupStyles.google} />
        <Text style={SignupStyles.socialText}>Signup with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginPage;