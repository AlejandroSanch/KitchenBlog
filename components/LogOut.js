import React from 'react';
import {useSignOut} from "@nhost/react";
import {Text, View, Button} from 'react-native';

const LogOut = () => {

    const {signOut} = useSignOut();

  return (
    <Button onPress={signOut} title="Cerrar Sesion"/>
  );
};
export default LogOut;