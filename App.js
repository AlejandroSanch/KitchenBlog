import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Register from "./components/Register";
import SideMenu from "./components/AddingPost";
import MyDrawer from "./components/AddingPost";
import Drawer from "./components/Drawer"

function MyStack(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="Drawer" component={Navigation}/>
        <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
          <MyStack/>
        </NavigationContainer>
    );
};