import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HelloWorldApp from "./helloworld";


const Drawer = createDrawerNavigator()

function DrawerNavigation(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name = "ProfileScreen" component={HelloWorldApp}/>
    </Drawer.Navigator>
  )
}