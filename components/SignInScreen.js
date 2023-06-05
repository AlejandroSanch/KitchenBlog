import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,Button, Text
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useNhostClient } from "@nhost/react";



const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nhost = useNhostClient();

  const onSignInPressed = async () => {
    const result = await nhost.auth.signIn({
      email,
      password,
    });
    if (result.error) {
      Alert.alert("Error", result.error.message);
    }
    console.log(result);
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot password");
  };

  const onSignUpPress = () => {
    console.log("auth correct");
    navigation.navigate("SignUpScreen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.title}>Inicia Sesion</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />

        <Button text="Sign In" onPress={onSignInPressed} title="Iniciar Sesion" />

        <Button
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY" title="olvidaste la contraseña?"
        />

        <Button
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY" title="Don't have an account? Create one"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignContent:"center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    margin: 10,
  },
});

export default SignInScreen;
