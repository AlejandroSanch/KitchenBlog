import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Login";
import Home from "./Home";
import Profile from "./profile";
import Register from "./Register";
import ContentPub from "./ContentPub";


const Drawer = createDrawerNavigator()

function DrawerNav(){
  return(
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name = "Menu Principal" component={Home}/>
            <Drawer.Screen name = "Perfil" component={Profile}/>
            <Drawer.Screen name = "Register" component={Register}/>
            <Drawer.Screen name = "Login" component={Login}/>
            <Drawer.Screen name = "ContentPub" component={ContentPub}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNav;