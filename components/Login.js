import React, {useState} from "react";
import { Box, Text, Heading, VStack, FormControl,Input, Link,
   Button, HStack, Center,NativeBaseProvider, } from "native-base";
import {ScrollView, SafeAreaView} from "react-native";
import {getFirestore,collection, addDoc, db} from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";

import Register from "./Register";


const Login = () => {

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
        <Heading size="lg" fontWeight="600" color="coolGray.800" align ="center" _dark={{color: "warmGray.50"}}>Inicia                                                                                                                                         Sesion  
        </Heading>
        <VStack space={6} mt="5">
          <FormControl>
            <FormControl.Label>Nombre de Usuario</FormControl.Label>
            <Input onChangeText={(value) => handleChangeText('username', value)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" onChangeText={(value) => handleChangeText('pwd', value)}/>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Iniciar Sesion
          </Button>

          <Text>No tienes una cuenta?</Text>
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
                <Login/>
            </Center>
          </NativeBaseProvider>
        );
    };
    