import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Login";
import Home from "./Home";
import Profile from "./profile";
import Register from "./Register";


const Drawer = createDrawerNavigator()

function DrawerNav(){
  return(
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name = "Home" component={Home}/>
            <Drawer.Screen name = "ProfileScreen" component={Profile}/>
            <Drawer.Screen name = "Register" component={Register}/>
            <Drawer.Screen name = "Login" component={Login}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNav;