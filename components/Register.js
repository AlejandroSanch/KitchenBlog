import React, {useState} from "react";
import { Box, Text, Heading, VStack, FormControl,Input, Link,
   Button, HStack, Center } from "native-base";
import {ScrollView, SafeAreaView} from "react-native";
import { useNhostClient } from "@nhost/react";

const Register = () => {

  const nhost = useNhostClient();

  const onRegisterPressed = async () => {
    const result = await nhost.auth.signUp({
      email: email,
      password: password,
      options:{
        displayName: name
      }
  })

  console.log(result);

  };

  return(
  <ScrollView>
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Registrate para continuar   
        </Heading>
        <VStack space={6} mt="5">
          <FormControl>
            <FormControl.Label>Nombre</FormControl.Label>
            <Input onChangeText={(value) => handleChangeText('name', value)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Correo Electronico</FormControl.Label>
            <Input onChangeText={(value) => handleChangeText('email', value)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" onChangeText={(value) => handleChangeText('pwd', value)}/>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={()=> onRegisterPressed()}>
            Iniciar Sesion
          </Button>
          <HStack mt="6" justifyContent="center">
          </HStack>
        </VStack>
      </Box>
    </Center>
  </ScrollView>
  );
};

export default Register;
    