import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HelloWorldApp from "./components/helloworld";
import { exp } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./components/Register";
import Login from "./components/Login";


const Drawer = createDrawerNavigator()

function App(){
  return(
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name = "ProfileScreen" component={HelloWorldApp}/>
      <Drawer.Screen name = "Register" component={Register}/>
      <Drawer.Screen name = "Login" component={Login}/>
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;