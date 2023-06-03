import React from "react";
import Login from "./components/Login";
import {View, Text} from "react-native";
import DrawerNav from "./components/DrawerNav";
import { NavigationContainer } from "@react-navigation/native";

import { NhostClient, NhostProvider } from "@nhost/react";
import * as SecureStore from "expo-secure-store";

const nhost = new NhostClient({
  backendUrl: "https://eqkexbkhlqgjrwoqlcmh.nhost.run",
  clientStorageType: "expo-secure-storage",
  clientStorage: SecureStore,
});

function App(){
  return(
    <NhostProvider nhost={nhost}>
      <DrawerNav/>
    </NhostProvider>

  )
}

export default App;