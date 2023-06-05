import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Login";
import Home from "./Home";
import Profile from "./profile";
import Register from "./Register";
import ContentPub from "./ContentPub";
import AddingPost from "./AddingPost";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import { useAuthenticationStatus } from "@nhost/react";
import { ActivityIndicator } from "react-native-web";

const Drawer = createDrawerNavigator()

function DrawerNav(){

  const {isLoading ,isAuthenticated} = useAuthenticationStatus();

  /*if(isLoading){
    return <ActivityIndicator/>
  }*/

  return(
    <NavigationContainer>
        <Drawer.Navigator>
          
          {!isAuthenticated ?(
            <>
            <Drawer.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}}/>
            <Drawer.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
            </>
          ):(
            <>
            <Drawer.Screen name = "Menu Principal" component={Home}/>
            <Drawer.Screen name = "Perfil" component={Profile}/>
            <Drawer.Screen name = "Añadir Publicación" component={AddingPost}/>
            </>
            )}
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNav;