
import { Button } from '@react-navigation/elements';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import homeStyles from '../../styles/Home/index.styles';

export function Home({ navigation }: { navigation: any }) {
  return (
    <View style={styles.initialtext}>
      <Text style={homeStyles.welcomeText}>Welcome to LYMLife</Text>
      <Text style={homeStyles.title}>
        Get started by selecting an option below.
      </Text>
       {/* <TouchableOpacity
  style={homeStyles.loginBtn}
  onPress={() => navigation.navigate('Login')}
>
  <Text style={homeStyles.loginText}>LogIn</Text>
</TouchableOpacity> */}
     <Button  screen="Login" >LogIn</Button>
 {/* </TouchableOpacity> */}

{/* <TouchableOpacity
  style={homeStyles.loginBtn}
  onPress={() => navigation.navigate('')} // 👈 This works
>
  <Text style={homeStyles.loginText}>Login</Text>
</TouchableOpacity> */}
      <TouchableOpacity style={homeStyles.signupBtn}>
        <Text style={homeStyles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  initialtext: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
