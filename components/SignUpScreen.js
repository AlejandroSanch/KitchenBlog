import {View, Text, StyleSheet, ScrollView, TextInput, Alert, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { React, useState } from "react";
import { useNhostClient } from "@nhost/react";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const nhost = useNhostClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegisterPressed = async () => {
    const result = await nhost.auth.signUp({
      email,
      password,
      options: {
        displayName: name,
      },
    });

    if (result.error) {
      Alert.alert("Error signing up", result.error.message);
    } else {
      navigation.navigate("Sign in");
      Alert.alert("Registro Exitoso")
    }

    console.log(result);
  };

  const onSignInPress = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Crea una cuenta</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Full name"
          style={styles.input}
        />

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

      
        <Button mt="2" colorScheme="indigo" onPress={onRegisterPressed} title="Registrarme"/>
          
        <Button
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="TERTIARY" title="Tienes una cuenta? Inicia Sesion"
        />
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
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
});

export default SignUpScreen;
