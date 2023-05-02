import React, {useState} from "react";
import { Box, Text, Heading, VStack, FormControl,Input, Link,
   Button, HStack, Center,NativeBaseProvider, } from "native-base";
import {ScrollView, SafeAreaView} from "react-native";
import {collection, addDoc} from 'firebase/firestore';

const Register = () => {

  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
    pwd: ""
  })
  
const handleChangeText=(name,value) =>{
  setState({ ...state, [name]: value})}

const SaveNewUser = async () => {
  if(state.name === '' || state.email=='' || state.username=='' || state.pwd==''){
    alert('Complete todos los campos')
  }else{
    await addDoc(collection(db, "users"), {
      name: state.name,
      username: state.username,
      email: state.email,
      pwd: state.pwd
    });

    console.log(docRef.id);
  }
  
}

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
            <FormControl.Label>Nombre de Usuario</FormControl.Label>
            <Input onChangeText={(value) => handleChangeText('username', value)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Correo Electronico</FormControl.Label>
            <Input onChangeText={(value) => handleChangeText('email', value)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" onChangeText={(value) => handleChangeText('pwd', value)}/>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={()=> SaveNewUser()}>
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

    export default () => {
        return (
          <NativeBaseProvider>
            <Center>
                <Register/>
            </Center>
          </NativeBaseProvider>
        );
    };
    